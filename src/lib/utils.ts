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
): T[] {
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

/**
 * Split an array into two array based on a true/false condition
 * function.
 *
 * @example
 * fork([1, 2, 3, 4], (n) => n % 2 === 0) // [[2, 4], [1, 3]]
 */
export function fork<T>(array: readonly T[], condition: (item: T) => boolean): [T[], T[]] {
	const forked: [T[], T[]] = [[], []];
	if (array) {
		for (const item of array) {
			forked[condition(item) ? 0 : 1].push(item);
		}
	}
	return forked;
}

/**
 * Map over all the keys to create a new object.
 *
 * @example
 * const a = { a: 1, b: 2, c: 3 }
 * mapValues(a, (value, key) => value * 2) // => { a: 2, b: 4, c: 6 }
 */
export function mapValues<TValue, TKey extends string | number | symbol, TNewValue>(
	obj: { [K in TKey]: TValue },
	mapFunc: (value: TValue, key: TKey) => TNewValue
): { [K in TKey]: TNewValue };

// This overload exists to support cases where `obj` is a partial
// object whose values are never undefined when the key is also
// defined. For example:
//   { [key: string]?: number } versus { [key: string]: number | undefined }
export function mapValues<TValue, TKey extends string | number | symbol, TNewValue>(
	obj: { [K in TKey]?: TValue },
	mapFunc: (value: TValue, key: TKey) => TNewValue
): { [K in TKey]?: TNewValue };

export function mapValues<TValue, TKey extends string | number | symbol, TNewValue>(
	obj: { [K in TKey]?: TValue },
	mapFunc: (value: TValue, key: TKey) => TNewValue
): Record<TKey, TNewValue> {
	const keys = Object.keys(obj) as TKey[];
	return keys.reduce(
		(acc, key) => {
			acc[key] = mapFunc(obj[key]!, key);
			return acc;
		},
		{} as Record<TKey, TNewValue>
	);
}

/**
 * Sorts an `array` of items into groups. The return value is a map
 * where the keys are the group IDs the given `getGroupId` function
 * produced and the value is an array of each item in that group.
 *
 * @see https://radashi-org.github.io/reference/array/group
 * @example
 * ```ts
 * group([1, 2, 3, 4], (n) => n % 2 === 0 ? 'even' : 'odd') // { even: [2], odd: [1, 3, 4] }
 * ```
 */
export function group<T, Key extends string | number | symbol>(
	array: readonly T[],
	getGroupId: (item: T) => Key
): { [K in Key]?: T[] } {
	return array.reduce(
		(acc, item) => {
			const groupId = getGroupId(item);
			if (!acc[groupId]) {
				acc[groupId] = [];
			}
			acc[groupId].push(item);
			return acc;
		},
		{} as Record<Key, T[]>
	);
}

declare const setTimeout: (fn: () => void, ms: number) => unknown;
declare const clearTimeout: (timer: unknown) => void;

export type DebounceFunction<TArgs extends any[]> = {
	(...args: TArgs): void;
	/**
	 * Cancels the debounced function
	 */
	cancel(): void;
	/**
	 * Checks if there is any invocation debounced
	 */
	isPending(): boolean;
	/**
	 * Runs the debounced function immediately
	 */
	flush(...args: TArgs): void;
};

/**
 * Given a delay and a function returns a new function that will only
 * call the source function after delay milliseconds have passed
 * without any invocations.
 *
 * The debounce function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to invoke them
 * immediately.
 *
 * @example
 * const myDebouncedFunc = debounce({ delay: 1000 }, (x) => console.log(x))
 *
 * myDebouncedFunc(0)
 * myDebouncedFunc(1) // Logs 1, but not 0
 */
export function debounce<TArgs extends any[]>(
	{ delay }: { delay: number },
	func: (...args: TArgs) => any
): DebounceFunction<TArgs> {
	let timer: unknown = undefined;
	let active = true;

	const debounced: DebounceFunction<TArgs> = (...args: TArgs) => {
		if (active) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				active && func(...args);
				timer = undefined;
			}, delay);
		} else {
			func(...args);
		}
	};

	debounced.isPending = () => {
		return timer !== undefined;
	};

	debounced.cancel = () => {
		active = false;
	};

	debounced.flush = (...args: TArgs) => func(...args);

	return debounced;
}

/**
 * Dynamically get a nested value from an array or object with a string.
 *
 * @example
 * const person = {
 *   name: 'John',
 *   friends: [{ name: 'Jane' }]
 * }
 *
 * get(person, 'friends[0].name') // => 'Jane'
 */
export function get<TDefault = unknown>(
	value: unknown,
	path: string,
	defaultValue?: TDefault
): TDefault {
	const segments = path.split(/[\.\[\]]/g);

	let current: any = value;

	for (const key of segments) {
		if (current === null || current === undefined) {
			return defaultValue as TDefault;
		}

		const dequoted = key.replace(/['"]/g, '');

		if (dequoted.trim() === '') {
			continue;
		}

		current = current[dequoted];
	}

	if (current === undefined) {
		return defaultValue as TDefault;
	}

	return current;
}
