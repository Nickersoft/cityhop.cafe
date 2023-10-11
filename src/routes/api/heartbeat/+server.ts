import { PostHog } from "posthog-node";

import type { RequestHandler } from "./$types";

import { PUBLIC_PH_TOKEN } from "$env/static/public";
import type { Scene, Track } from "$lib/types";

interface HeartbeatBody {
  distinctID: string;
  currentScene: Scene;
  currentTrack: Track;
}

export const POST: RequestHandler = async ({ getClientAddress, request }) => {
  const ph = new PostHog(PUBLIC_PH_TOKEN, {
    host: "https://app.posthog.com",
    flushAt: 1,
    flushInterval: 0,
  });

  const body: HeartbeatBody = await request.json();
  console.log(body.distinctID);
  ph.capture({
    distinctId: body.distinctID,
    event: "heartbeat",
    properties: {
      "$ip": getClientAddress(),
      currentScene: body.currentScene,
      currentTrack: body.currentTrack,
    },
  });

  await ph.shutdownAsync();

  return new Response(JSON.stringify({ success: true }));
};
