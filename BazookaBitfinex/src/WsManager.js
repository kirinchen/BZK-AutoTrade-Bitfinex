const BFX = require('bitfinex-api-node');

class WsManager {

    static instance;
    bfx;

    init(cfg) {

        this.bfx = new BFX({
            apiKey: cfg.data.bitfinex.apiKey,
            apiSecret: cfg.data.bitfinex.apiSecret,
            ws: {
                autoReconnect: true,
                seqAudit: true,
                packetWDDelay: 10 * 1000
            }
        });

    }



    static getInstance() {
        if (!this.instance) this.instance = new WsManager();
        return this.instance;
    }

}

module.exports = WsManager.getInstance();