const { create } = require('@open-wa/wa-automate');

create({
  sessionId: "cryptcambio-bot",
  multiDevice: true,
  headless: true,
  qrTimeout: 0,
  authTimeout: 60,
  cacheEnabled: false,
  useChrome: true,
}).then(client => start(client)).catch(err => console.error(err));

function start(client) {
  console.log("🤖 Bot iniciado correctamente.");
  client.onMessage(async message => {
    if (message.body === '!ping') {
      await client.sendText(message.from, 'pong 🏓');
    }
  });
}