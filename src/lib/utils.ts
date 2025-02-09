import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function getYouTubeLink(videoId?: string) {
	return `https://www.youtube.com/watch?v=${videoId}`;
}

/**
 * Combines multiple class strings into a single class string
 * @param inputs - The class strings to combine
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/**
 * Generates a random integer between min and max. Both min and max
 * are inclusive.
 *
 * @example
 * random(1, 10) // => 5
 */
export function random(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * “Draw” a random item from an array. The item is not removed from
 * the array. Returns `null` if the array is empty.
 *
 * @example
 * const numbers = [1, 2, 3]
 *
 * draw(numbers) // => 2
 * numbers // => [1, 2, 3]
 */
export function draw<T>(array: readonly T[]): T | null {
	const max = array.length;

	if (max === 0) {
		return null;
	}

	const index = random(0, max - 1);

	return array[index];
}

/**
 * Sorts an array of string in alphabetical order
 *
 * @param array - The array to sort
 *
 * @example alphabetical(["foo", "bar", "baz"], (item) => item); // ["bar", "baz", "foo"]
 */
export function alphabetical<T>(
	array: readonly T[],
	getter: (item: T) => string,
	dir: 'asc' | 'desc' = 'asc'
) {
	if (!array) return [];
	const asc = (a: T, b: T) => `${getter(a)}`.localeCompare(getter(b));
	const dsc = (a: T, b: T) => `${getter(b)}`.localeCompare(getter(a));
	return array.slice().sort(dir === 'desc' ? dsc : asc);
}

/**
 * Convert an array to a dictionary by mapping each item into a
 * dictionary key & value.
 *
 * @see https://radashi-org.github.io/reference/array/objectify
 * @example
 * ```ts
 * objectify([1, 2, 3], (n) => '#' + n) // { '#1': 1, '#2': 2, '#3': 3 }
 *
 * objectify(
 *   [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}],
 *   (obj) => obj.id,
 *   (obj) => obj.name
 * ) // { 1: 'John', 2: 'Jane' }
 * ```
 */
export function objectify<T, Key extends string | number | symbol, Value = T>(
	array: readonly T[],
	getKey: (item: T) => Key,
	getValue: (item: T) => Value = (item) => item as unknown as Value
): Record<Key, Value> {
	return array.reduce(
		(acc, item) => {
			acc[getKey(item)] = getValue(item);
			return acc;
		},
		{} as Record<Key, Value>
	);
}
