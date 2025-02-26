import type { Filter } from '$components/ui';
import { Tags } from '$lib/enums';
import {
	CloudFog,
	CloudMoon,
	CloudRain,
	Moon,
	Snowflake,
	SteeringWheel,
	Sun,
	SunHorizon
} from '$lib/icons';

export const FILTER_LIST: Filter[] = [
	{
		value: Tags.morning,
		label: 'Morning',
		icon: SunHorizon
	},
	{
		value: Tags.day,
		label: 'Mid-day',
		icon: Sun
	},
	{
		value: Tags.evening,
		label: 'Evening',
		icon: CloudMoon
	},
	{
		value: Tags.night,
		label: 'Night',
		icon: Moon
	},
	{
		value: Tags.snow,
		label: 'Snow',
		icon: Snowflake
	},
	{
		value: Tags.fog,
		label: 'Fog',
		icon: CloudFog
	},
	{
		value: Tags.rain,
		label: 'Rain',
		icon: CloudRain
	}
];
