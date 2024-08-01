// Update and keep in sync with `GlobalEventHandlersEventMap`
// https://github.com/microsoft/TypeScript/blob/41b993bebe01c3401269839ffda4ae9a422ebb6b/src/lib/dom.generated.d.ts#L8901

type EventInits = {
	abort: UIEventInit;
	animationcancel: AnimationEventInit;
	animationend: AnimationEventInit;
	animationiteration: AnimationEventInit;
	animationstart: AnimationEventInit;
	auxclick: MouseEventInit;
	beforeinput: InputEventInit;
	beforetoggle: EventInit;
	blur: FocusEventInit;
	cancel: EventInit;
	canplay: EventInit;
	canplaythrough: EventInit;
	change: EventInit;
	click: MouseEventInit;
	close: EventInit;
	compositionend: CompositionEventInit;
	compositionstart: CompositionEventInit;
	compositionupdate: CompositionEventInit;
	contextmenu: MouseEventInit;
	copy: ClipboardEventInit;
	cuechange: EventInit;
	cut: ClipboardEventInit;
	dblclick: MouseEventInit;
	drag: DragEventInit;
	dragend: DragEventInit;
	dragenter: DragEventInit;
	dragleave: DragEventInit;
	dragover: DragEventInit;
	dragstart: DragEventInit;
	drop: DragEventInit;
	durationchange: EventInit;
	emptied: EventInit;
	ended: EventInit;
	error: ErrorEventInit;
	focus: FocusEventInit;
	focusin: FocusEventInit;
	focusout: FocusEventInit;
	gotpointercapture: PointerEventInit;
	input: EventInit;
	invalid: EventInit;
	keydown: KeyboardEventInit;
	keypress: KeyboardEventInit;
	keyup: KeyboardEventInit;
	load: EventInit;
	loadeddata: EventInit;
	loadedmetadata: EventInit;
	loadstart: EventInit;
	lostpointercapture: PointerEventInit;
	mousedown: MouseEventInit;
	mouseenter: MouseEventInit;
	mouseleave: MouseEventInit;
	mousemove: MouseEventInit;
	mouseout: MouseEventInit;
	mouseover: MouseEventInit;
	mouseup: MouseEventInit;
	paste: ClipboardEventInit;
	pause: EventInit;
	play: EventInit;
	playing: EventInit;
	pointercancel: PointerEventInit;
	pointerdown: PointerEventInit;
	pointerenter: PointerEventInit;
	pointerleave: PointerEventInit;
	pointermove: PointerEventInit;
	pointerout: PointerEventInit;
	pointerover: PointerEventInit;
	pointerup: PointerEventInit;
	progress: ProgressEventInit;
	ratechange: EventInit;
	reset: EventInit;
	resize: UIEventInit;
	scroll: EventInit;
	scrollend: EventInit;
	securitypolicyviolation: SecurityPolicyViolationEventInit;
	seeked: EventInit;
	seeking: EventInit;
	select: EventInit;
	selectionchange: EventInit;
	selectstart: EventInit;
	slotchange: EventInit;
	stalled: EventInit;
	submit: SubmitEventInit;
	suspend: EventInit;
	timeupdate: EventInit;
	toggle: EventInit;
	touchcancel: TouchEventInit;
	touchend: TouchEventInit;
	touchmove: TouchEventInit;
	touchstart: TouchEventInit;
	transitioncancel: TransitionEventInit;
	transitionend: TransitionEventInit;
	transitionrun: TransitionEventInit;
	transitionstart: TransitionEventInit;
	volumechange: EventInit;
	waiting: EventInit;
	webkitanimationend: EventInit;
	webkitanimationiteration: EventInit;
	webkitanimationstart: EventInit;
	webkittransitionend: EventInit;
	wheel: WheelEventInit;
};

const events = {
	abort: globalThis.UIEvent,
	animationcancel: globalThis.AnimationEvent,
	animationend: globalThis.AnimationEvent,
	animationiteration: globalThis.AnimationEvent,
	animationstart: globalThis.AnimationEvent,
	auxclick: globalThis.MouseEvent,
	beforeinput: globalThis.InputEvent,
	beforetoggle: globalThis.Event,
	blur: globalThis.FocusEvent,
	cancel: globalThis.Event,
	canplay: globalThis.Event,
	canplaythrough: globalThis.Event,
	change: globalThis.Event,
	click: globalThis.MouseEvent,
	close: globalThis.Event,
	compositionend: globalThis.CompositionEvent,
	compositionstart: globalThis.CompositionEvent,
	compositionupdate: globalThis.CompositionEvent,
	contextmenu: globalThis.MouseEvent,
	copy: globalThis.ClipboardEvent,
	cuechange: globalThis.Event,
	cut: globalThis.ClipboardEvent,
	dblclick: globalThis.MouseEvent,
	drag: globalThis.DragEvent,
	dragend: globalThis.DragEvent,
	dragenter: globalThis.DragEvent,
	dragleave: globalThis.DragEvent,
	dragover: globalThis.DragEvent,
	dragstart: globalThis.DragEvent,
	drop: globalThis.DragEvent,
	durationchange: globalThis.Event,
	emptied: globalThis.Event,
	ended: globalThis.Event,
	error: globalThis.ErrorEvent,
	focus: globalThis.FocusEvent,
	focusin: globalThis.FocusEvent,
	focusout: globalThis.FocusEvent,
	gotpointercapture: globalThis.PointerEvent,
	input: globalThis.Event,
	invalid: globalThis.Event,
	keydown: globalThis.KeyboardEvent,
	keypress: globalThis.KeyboardEvent,
	keyup: globalThis.KeyboardEvent,
	load: globalThis.Event,
	loadeddata: globalThis.Event,
	loadedmetadata: globalThis.Event,
	loadstart: globalThis.Event,
	lostpointercapture: globalThis.PointerEvent,
	mousedown: globalThis.MouseEvent,
	mouseenter: globalThis.MouseEvent,
	mouseleave: globalThis.MouseEvent,
	mousemove: globalThis.MouseEvent,
	mouseout: globalThis.MouseEvent,
	mouseover: globalThis.MouseEvent,
	mouseup: globalThis.MouseEvent,
	paste: globalThis.ClipboardEvent,
	pause: globalThis.Event,
	play: globalThis.Event,
	playing: globalThis.Event,
	pointercancel: globalThis.PointerEvent,
	pointerdown: globalThis.PointerEvent,
	pointerenter: globalThis.PointerEvent,
	pointerleave: globalThis.PointerEvent,
	pointermove: globalThis.PointerEvent,
	pointerout: globalThis.PointerEvent,
	pointerover: globalThis.PointerEvent,
	pointerup: globalThis.PointerEvent,
	progress: globalThis.ProgressEvent,
	ratechange: globalThis.Event,
	reset: globalThis.Event,
	resize: globalThis.UIEvent,
	scroll: globalThis.Event,
	scrollend: globalThis.Event,
	securitypolicyviolation: globalThis.SecurityPolicyViolationEvent,
	seeked: globalThis.Event,
	seeking: globalThis.Event,
	select: globalThis.Event,
	selectionchange: globalThis.Event,
	selectstart: globalThis.Event,
	slotchange: globalThis.Event,
	stalled: globalThis.Event,
	submit: globalThis.SubmitEvent,
	suspend: globalThis.Event,
	timeupdate: globalThis.Event,
	toggle: globalThis.Event,
	touchcancel: globalThis.TouchEvent,
	touchend: globalThis.TouchEvent,
	touchmove: globalThis.TouchEvent,
	touchstart: globalThis.TouchEvent,
	transitioncancel: globalThis.TransitionEvent,
	transitionend: globalThis.TransitionEvent,
	transitionrun: globalThis.TransitionEvent,
	transitionstart: globalThis.TransitionEvent,
	volumechange: globalThis.Event,
	waiting: globalThis.Event,
	webkitanimationend: globalThis.Event,
	webkitanimationiteration: globalThis.Event,
	webkitanimationstart: globalThis.Event,
	webkittransitionend: globalThis.Event,
	wheel: globalThis.WheelEvent,
} as const;

type Events = typeof events;

function properEvent<Name extends keyof Events>(name: Name, options?: EventInits[Name]): InstanceType<Events[Name]>;
function properEvent<Name extends string>(name: Name, options?: CustomEventInit): CustomEvent;
function properEvent<Name extends string>(name: Name, options?: EventInit): Event {
	if (name in events) {
		return new events[name as keyof Events](name, options);
	}

	return new CustomEvent(name, options);
}

const click: MouseEvent = properEvent('click', {
	which: 1,
});
document.dispatchEvent(click);
const any: CustomEvent = properEvent('any', {
	bubbles: true,
	detail: 1,
});
document.dispatchEvent(any);

export default properEvent;
