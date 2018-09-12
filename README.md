This repo tries to reproduce https://github.com/xmppjs/xmpp.js/issues/546

1) run `npm install`
2) edit main.js and change the definitions for `server`, `user` and `pass`
3) run `npx browserify main.js -o bundle.js`
4) server the folder via `npx http-server`
5) open it in your favorite browser and open the developer tools
6) interact with the account via other programs, e.g. send messages to the JID
7) look in the console for `error, parent set` - if it does not appear everything is fine
