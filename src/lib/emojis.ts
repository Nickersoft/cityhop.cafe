import { Country, Genre } from './types';

export const flags: Record<Country, string> = {
	[Country.korea]: '🇰🇷',
	[Country.us]: '🇺🇸',
	[Country.china]: '🇨🇳',
	[Country.japan]: '🇯🇵',
	[Country.india]: '🇮🇳',
	[Country.italy]: '🇮🇹',
  [Country.turkey]: '🇹🇷',
  [Country.southAfrica]: '🇿🇦',
	[Country.france]: '🇫🇷',
	[Country.mexico]: '🇲🇽',
	[Country.germany]: '🇩🇪',
	[Country.uk]: '🇬🇧',
  [Country.serbia]: '🇷🇸',
	[Country.taiwan]: '🇹🇼',
	[Country.austria]: '🇦🇹',
	[Country.canada]: '🇨🇦',
	[Country.netherlands]: '🇳🇱',
	[Country.czechRepublic]: '🇨🇿',
	[Country.peru]: '🇵🇪',
	[Country.vietnam]: '🇻🇳',
	[Country.thailand]: '🇹🇭',
	[Country.scotland]: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
	[Country.egypt]: '🇪🇬',
	[Country.russia]: '🇷🇺',
	[Country.ukraine]: '🇺🇦',
	[Country.switzerland]: '🇨🇭',
	[Country.spain]: '🇪🇸',
	[Country.ghana]: '🇬🇭',
	[Country.uae]: '🇦🇪',
	[Country.lebanon]: '🇱🇧',
	[Country.singapore]: '🇸🇬'
};

export const genres: Record<Genre, string> = {
	[Genre.pop]: '🎸',
	[Genre.jazz]: '🎷',
	[Genre.lofi]: '☕',
	[Genre.rnb]: '🎤',
	[Genre.classical]: '🎻',
	[Genre.electronic]: '🎹'
};
