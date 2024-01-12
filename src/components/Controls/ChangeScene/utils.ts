import { dash } from 'radash';

export function getFlagEmoji(name: string) {
	return `flag-${dash(name)}`;
}
