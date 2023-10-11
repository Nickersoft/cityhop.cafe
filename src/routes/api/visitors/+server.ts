import dayjs from "dayjs";

import { PH_API_KEY, PH_PROJECT_ID } from "$env/static/private";

import type { RequestHandler } from "./$types";
import { group, shake, sort } from "radash";

interface Event {
  id: string;
  distinct_id: string;
  properties: Record<string, unknown>;
  event: string;
  timestamp: string;
  person: {
    is_identified: false;
    distinct_ids: string[];
    properties: Record<string, unknown>;
  };
  elements: [];
  elements_chain: string;
}

interface EventResponse {
  next: null;
  results: Event[];
}

export const POST: RequestHandler = async ({ request }) => {
  const threshold = dayjs().subtract(5, "minute").toISOString();

  const body = await request.json();

  const url = new URL(
    `https://app.posthog.com/api/projects/${PH_PROJECT_ID}/events/`,
  );

  url.searchParams.set("after", threshold);

  const init: RequestInit = {
    headers: { Authorization: `Bearer ${PH_API_KEY}` },
  };

  const result =
    (await fetch(url.toString(), init).then((res) =>
      res.json()
    )) as EventResponse;

  const events =
    result?.results?.filter((r) => r.distinct_id !== body.distinctID) ?? [];

  const groupedUsers: Record<string, Event[]> = shake(
    group(events, (r) => r.distinct_id),
    (v: Event[]) => {
      const sorted = sort(v, (r) => dayjs(r.timestamp).unix());
      const entered = sorted.findLastIndex((r) => r.event === "$pageview");
      const left = sorted.findLastIndex((r) => r.event === "$pageleave");
      return entered < left;
    },
  );
  console.log(groupedUsers["2eb33fa8-0131-4504-b176-bf4e97082c76"][0].person);
  const cities = group(
    Object.values(groupedUsers).flat(),
    ({ person: { properties } }) => properties["$geoip_city_name"] as string,
  );

  // console.log(JSON.stringify(groupedUsers, null, 2));
  delete cities["undefined"];

  const cityCount = Object.keys(cities).length;
  const userCount = Object.keys(groupedUsers).length;
  // console.log(countries, countryCount);
  console.log(Object.keys(cities), cityCount);
  return new Response(String(userCount));
};
