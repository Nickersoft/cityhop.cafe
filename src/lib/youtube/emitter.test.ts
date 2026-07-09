import { describe, expect, test } from 'vitest';

import { createEmitter } from './emitter';

describe('createEmitter', () => {
	test('registers, triggers, and removes listeners', () => {
		const emitter = createEmitter();
		const events: unknown[] = [];
		const listener = emitter.on('autoplayBlocked', (event) => events.push(event));

		emitter.trigger('autoplayBlocked', { data: 'blocked' });
		emitter.off('autoplayBlocked', listener);
		emitter.trigger('autoplayBlocked', { data: 'ignored' });

		expect(events).toEqual([{ data: 'blocked' }]);
	});
});
