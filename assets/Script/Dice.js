import GlobalVariables from "./GlobalVariables";


export default cc.Class({
    extends: cc.Component,

    properties: {
        no: 0,
        no1: cc.Node,
        no2: cc.Node,
        no3: cc.Node,
        no4: cc.Node,
        no5: cc.Node,
        no6: cc.Node,
        _nolist: [],
    },

    onLoad() {
        this.no = 0;
        this._nolist = [
            this.no1,
            this.no2,
            this.no3,
            this.no4,
            this.no5,
            this.no6,
        ];
    },

    start1() {
    },

    setNo(no) {
        for (let i = 0; i < 6; i++) {
            this._nolist[i].active = false;
            if ((i + 1) === no) {
                this._nolist[i].active = true;
            }
        }
    },

    // called every frame
    update: function (dt) {
    },

});