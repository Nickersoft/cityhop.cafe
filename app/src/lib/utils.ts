import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class strings into a single class string
 * @param inputs - The class strings to combine
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
