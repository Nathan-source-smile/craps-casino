import GlobalVariables from "./GlobalVariables";
import { BET_LIST } from "./Common/Constants";

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad() {
    },

    start1() {
    },

    // called every frame
    update: function (dt) {
        const tcoin = this.node.getComponent(cc.Label);
        tcoin.string = GlobalVariables.totalCoin;
    }
})