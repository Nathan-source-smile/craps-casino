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
        const label = this.node.getComponent(cc.Label);
        label.string = "Max. bet: " + GlobalVariables.currentBetMax;
    }
})