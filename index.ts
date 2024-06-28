const events = {
	click: MouseEvent,
} as const;
type Events = typeof events;

function createEvent<Name extends keyof Events>(name: Name): Events[Name]['prototype'];
function createEvent<Name extends string>(name: Name): CustomEvent;
function createEvent<Name extends keyof Events>(name: Name): Events[Name]['prototype'] | CustomEvent {
	return events[name] ? new events[name](name) : new CustomEvent(name);
}

const click: MouseEvent = createEvent('click');
document.dispatchEvent(click);
const any: CustomEvent = createEvent('any');
document.dispatchEvent(any);

export default createEvent;
