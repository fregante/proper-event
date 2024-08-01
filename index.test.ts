// @vitest-environment happy-dom
// TODO: Eventually switch to https://vitest.dev/guide/browser/

import {expect, expectTypeOf, test} from 'vitest';
import properEvent from './index.js';

test('click', () => {
	const event = properEvent('click');
	expectTypeOf(event).toEqualTypeOf<MouseEvent>();
	expect(event).toBeInstanceOf(MouseEvent);
	expect(event.type).toBe('click');
});

test('any', () => {
	const event = properEvent('any');
	expect(event).toBeInstanceOf(CustomEvent);
	expect(event.type).toBe('any');
});

