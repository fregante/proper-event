# Proper Event [![npm version](https://img.shields.io/npm/v/proper-event.svg)](https://www.npmjs.com/package/proper-event)
    
Crikey, tell event type, automatically get the correct event class (`'click'` -> `MouseEvent`)

`properEvent` is for when you're arsed about triggering events in a loop or dealing with user-provided event types. It saves you from writing this bollocks:

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

Instead, you can just do:

```js
const event = properEvent(type);
```

Check the [index.ts](./index.ts) file for supported events. If it's not there or your platform's being a muppet, you'll get a `CustomEvent` instance.

## Install

```sh
npm install proper-event
```

## Usage

Here's how you use this thing:

```js
import properEvent from 'proper-event';

const event = properEvent(prompt('What event should we trigger, mate?'));

document.querySelector('a').dispatchEvent(event);
```

## API

### properEvent(type, init?)

Give it a type like `'click'` and get the right event instance back. Simple as.

```js
import properEvent from 'proper-event';

const event = properEvent('click');
```

### type

Type: `string`

The event type you want, like `'click'`, `'submit'`, `'keydown'`, whatever.

### init

Type: `EventInit`

Optional

Event options, if you're feeling fancy. Same as the second argument of `new Event(type, init)`.

## License

Do what you want with it, just don't be a twat.

MIT © [Federico Brigante](https://fregante.com)
