# riot-hub
A wrapper around Riot Observable that utilizes module caching for components to share messages and state

### use case

This is a small module that wraps around Riot.js' Observable API to allow you to create a single event emitter instance upon which you can attach event listeners and emit events to them.

The reason for using this is that it allows you to neatly decouple your Riot.js components so that they don't reference one another, but simply listen for events on the hub, and trigger events to the hub. This makes it easier to add and remove Riot.js components to your application.

### Install

```shell
npm install riot-hub
```

### Usage

```javascript
// Include this line in each Riot.js tag that you want to make use of hub,
// alternatively pass it in the html attribute options to the component
const hub = require('riot-hub')();

// Say you have a file listening to Websocket messages
// Transmit an event
let data = {name: 'new message received', time: Date.now(), metadata: {message: 'Hi Paul'} };
hub.trigger('eventOccurring', data);


// And another file prints out the contents of those messages to a debugging panel
//
hub.on('eventOccurring', (data) => {
  console.log(data.name, 'at', new Date(data.time).toLocaleString());
	console.table(data.metadata);
});
```

### Credits

&copy; 2016 Anephenix Ltd. Riot Hub is licensed under the MIT license.
