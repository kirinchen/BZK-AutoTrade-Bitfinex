const Config = require('bzk').Config;
const MC = require('./ManagerCenter');
var _cfg = require('../demo/MyCfg');
var config = new Config(_cfg);
MC.init(config);

const bfx = MC.bfx;

/*const ws = bfx.ws();

ws.on('error', (err) => console.log(err))
ws.on('open', () => {
    ws.subscribeTrades('BTCUSD')
})

ws.onTrades({ symbol: 'tBTCUSD' }, (trades) => {
    console.log(`trades: ${JSON.stringify(trades)}`)
});

ws.open()*/

const rest = bfx.rest(2, { transform: true })
rest.symbols().then(symbols => {
    console.log('available symbols are: %s', symbols.join(', '))
});

//BTCUSD

rest.tickersHistory(['tBTCUSD'], 1575445533000, 1578753429000 ).then(tk => {
    console.log("tk:" + JSON.stringify(tk));
});