# proper-event [![npm version](https://img.shields.io/npm/v/proper-event.svg)](https://www.npmjs.com/package/proper-event)

> Given an event type, automatically get the correct event class (`'click'` -> `MouseEvent`)

`properEvent` is meant to be used when you want to trigger a number of events in a loop or when the event type is user-provided. It avoids code like:

```js
switch (type) {
	case 'click':
		event = new MouseEvent('click');
		break;
	case 'keydown':
		event = new KeyboardEvent('keydown');
		break;
	case 'submit':
		event = new Event('submit');
		break;
	default:
		event = new CustomEvent(type);
		break;
}
```

replacing it with:

```js
const event = properEvent(type);
```

See the list of supported events in the [./index.js](./index.js) file. If the event is not known or not supported by the current platform, you will get a `CustomEvent` instance.

## Install

```sh
npm install proper-event
```

## Usage

```js
import properEvent from 'proper-event';

const event = properEvent(prompt('What event should be triggered?'));

document.querySelector('a').dispatchEvent(event);
```

## API

### properEvent(type, init?)

Provide a type like `'click'` and get the corresponding event instance, like `new MouseEvent('click')`

If none is found, you will get a `CustomEvent` instance.

```js
import properEvent from 'proper-event';

const event = properEvent('click');
```

### type

Type: `string`

The event type to be triggered, like `'click'`,`'submit'`, `'keydown'`, etc.

### init

Type: `EventInit`

Optional

The event options, like `{ bubbles: true, altKey: true }`. This is the same as the second argument of `new Event(type, init)`.

## License

MIT © [Federico Brigante](https://fregante.com)
