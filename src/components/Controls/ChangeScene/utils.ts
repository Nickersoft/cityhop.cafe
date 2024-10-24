import { dash } from 'radashi';

export function getFlagEmoji(name: string) {
	return `flag-${dash(name)}`;
}
