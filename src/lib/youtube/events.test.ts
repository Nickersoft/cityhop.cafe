import { describe, expect, test } from 'vitest';

import { EVENT_NAMES } from './events';

describe('EVENT_NAMES', () => {
	test('includes current YouTube autoplay blocked event', () => {
		expect(EVENT_NAMES).toContain('autoplayBlocked');
	});
});
