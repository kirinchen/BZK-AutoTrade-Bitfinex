const BFX = require('bitfinex-api-node');

const bfx = new BFX({
    apiKey: '',
    apiSecret: '',

    ws: {
        autoReconnect: true,
        seqAudit: true,
        packetWDDelay: 10 * 1000
    }
});

const ws = bfx.ws();

ws.on('error', (err) => console.log(err))
ws.on('open', () => {
    ws.subscribeTrades('BTCUSD')
})

ws.onTrades({ symbol: 'tBTCUSD' }, (trades) => {
    console.log(`trades: ${JSON.stringify(trades)}`)
});

ws.open()