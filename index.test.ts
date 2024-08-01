// @vitest-environment happy-dom
// TODO: Eventually switch to https://vitest.dev/guide/browser/

import {expect, expectTypeOf, test} from 'vitest';
import properEvent, {eventMap} from './index.js';

test('click', () => {
	const event = properEvent('click');
	expectTypeOf(event).toEqualTypeOf<MouseEvent>();
	expect(event).toBeInstanceOf(MouseEvent);
	expect(event).toBeInstanceOf(UIEvent);
	expect(event.type).toBe('click');
	expect(event.altKey).toBe(false);
});

test('any', () => {
	const event = properEvent('any');
	expect(event).toBeInstanceOf(CustomEvent);
	expect(event.type).toBe('any');
});

test('click with init', () => {
	const event = properEvent('click', {
		altKey: true,
	});
	expectTypeOf(event).toEqualTypeOf<MouseEvent>();
	expect(event).toBeInstanceOf(MouseEvent);
	expect(event.type).toBe('click');
	expect(event.altKey).toBe(true);
});

test('custom with init', () => {
	const event = properEvent('any', {
		bubbles: true,
		detail: 1,
	});
	expect(event).toBeInstanceOf(CustomEvent);
	expect(event.type).toBe('any');
	expect(event.bubbles).toBe(true);
	expect(event.detail).toBe(1);
});

test('formdata', () => {
	// @ts-expect-error Missing in happy-dom. Replace with global FormDataEvent after using https://vitest.dev/guide/browser/
	eventMap.formdata = Event;

	const formdata = properEvent('formdata', {
		formData: {} as unknown as FormData,
	});
	expectTypeOf(formdata).toEqualTypeOf<FormDataEvent>();

	// @ts-expect-error Missing in happy-dom. Replace with global FormDataEvent after using https://vitest.dev/guide/browser/
	expect(formdata).toBeInstanceOf(eventMap.formdata);
	expect(formdata.type).toBe('formdata');
});

// TODO: Restore after using https://vitest.dev/guide/browser/
test.fails('throws error', () => {
	expect(() =>
		// @ts-expect-error It should throw a type error just like `new FormDataEvent('formdata')` without an init parameter
		properEvent('formdata')).toThrowError();
});
