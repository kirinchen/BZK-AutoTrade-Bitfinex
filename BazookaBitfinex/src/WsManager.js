const BFX = require('bitfinex-api-node');
const ManagerCenter = require('./ManagerCenter');

class WsManager {

    static instance;
    get bfx() { return ManagerCenter.bfx;} 

    init(cfg) {


    }



    static getInstance() {
        if (!this.instance) this.instance = new WsManager();
        return this.instance;
    }

}

module.exports = WsManager.getInstance();