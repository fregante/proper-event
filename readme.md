# proper-event [![npm version](https://img.shields.io/npm/v/proper-event.svg)](https://www.npmjs.com/package/proper-event)

> Given an event type, automatically get the correct event class (`'click'` -> `MouseEvent`)

## Install

```sh
npm install proper-event
```

## Usage

```js
import properEvent from 'proper-event';

const event = properEvent('click');

document.querySelector('a').dispatchEvent(event);
```

## API

### properEvent(type)

Provide a type like `'click'` and get the corresponding event instance, like `new MouseEvent('click')`

If none is found, you will get a `CustomEvent` instance.

## License

MIT © [Federico Brigante](https://fregante.com)
