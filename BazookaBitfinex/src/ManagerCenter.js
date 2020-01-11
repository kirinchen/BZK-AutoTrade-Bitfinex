const BFX = require('bitfinex-api-node');
class ManagerCenter {

    static instance;
    config;
    _bfx;

    init(cfg) {
        this.config = cfg;
        this._bfx = new BFX({
            apiKey: cfg.get('bitfinex.apiKey'),
            apiSecret: cfg.get('bitfinex.apiSecret'),
            ws: {
                autoReconnect: true,
                seqAudit: true,
                packetWDDelay: 10 * 1000
            }
        });
        this.wsManager.init(this.config);
    }


    get wsManager() { return require('./WsManager'); }

    get bfx() { return this._bfx; }

    static getInstance() {
        if (!this.instance) this.instance = new ManagerCenter();
        return this.instance;
    }

}

module.exports = ManagerCenter.getInstance();