const {Client} = require('@xmpp/client');
const {x} = require('@xmpp/xml');

const client = new Client();

const server = 'wss://someserver:5280/websocket';
const user = 'user@someserver';
const pass = 'password';

client.start(server);

client.on('error', err => {
    console.error('❌', err.toString())
});

client.on('status', (status, value) => {
    console.log('🛈', status, value ? value.toString() : '')
});

client.on('online', jid => {
    console.log('🗸', 'online as', jid.toString());
    client.send(
        x('presence')
    );
});

client.on('stanza', stanza => {
    if (stanza.parent) {
        console.error('error, parent set', stanza.parent);
    }
    console.log('⮈', stanza.toString())
});

client.handle('authenticate', authenticate => {
    return authenticate(user, pass)
});
