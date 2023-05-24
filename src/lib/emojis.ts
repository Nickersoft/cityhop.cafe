import { Country, Genre } from './types';

export const flags: Record<Country, string> = {
	[Country.korea]: '🇰🇷',
	[Country.us]: '🇺🇸',
	[Country.china]: '🇨🇳',
	[Country.japan]: '🇯🇵',
	[Country.india]: '🇮🇳',
	[Country.italy]: '🇮🇹',
	[Country.france]: '🇫🇷',
	[Country.mexico]: '🇲🇽',
	[Country.uk]: '🇬🇧',
	[Country.taiwan]: '🇹🇼',
	[Country.canada]: '🇨🇦',
	[Country.peru]: '🇵🇪',
	[Country.vietnam]: '🇻🇳',
	[Country.thailand]: '🇹🇭',
	[Country.scotland]: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
	[Country.switzerland]: '🇨🇭',
	[Country.spain]: '🇪🇸',
	[Country.ghana]: '🇬🇭'
};

export const genres: Record<Genre, string> = {
	[Genre.pop]: '🎸',
	[Genre.jazz]: '🎷',
	[Genre.lofi]: '☕',
	[Genre.rnb]: '🎤',
	[Genre.classical]: '🎻',
	[Genre.electronic]: '🎹'
};
