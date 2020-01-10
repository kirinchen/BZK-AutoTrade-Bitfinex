class ManagerCenter {

    static instance;
    config;

    init(cfg) {
        this.config = cfg;
        this.wsManager.init(this.config);
    }

    getConfig() {
        return this.config;
    }

    get wsManager() {
        return require('./WsManager');
    }

    static getInstance() {
        if (!this.instance) this.instance = new ManagerCenter();
        return this.instance;
    }

}

module.exports = ManagerCenter.getInstance();