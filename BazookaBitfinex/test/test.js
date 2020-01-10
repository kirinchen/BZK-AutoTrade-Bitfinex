var assert = require('chai').assert;
const MC = require('../src/ManagerCenter');
const Config = require('bzk').Config;



describe(" test app", function () {


    /*it("Check Instan is single  ", function () {
        const ManagerCenter = require('../src/ManagerCenter');
        const ManagerCenter2 = require('../src/ManagerCenter');

    });*/

    it("busy check  ", function () {
        var _cfg = require('../demo/MyCfg');
        console.log("bzk:" + JSON.stringify(require('bzk')) + "c:" + Config + " v:" + require('bzk').version);
        var config = new Config(_cfg);
        MC.init(config);

    });



}

)