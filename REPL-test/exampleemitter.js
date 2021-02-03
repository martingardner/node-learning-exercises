const EventEmitter = require('events');

const newEmitter = new EventEmitter();

newEmitter.emit('TEST_EVENT'); //note on below won't pick up because it wasn't subscribed yet

newEmitter.on('TEST_EVENT', ()=> {
    console.log('event received');
});

newEmitter.emit('TEST_EVENT'); //this will trigger the .on because it is subscribed and listening.