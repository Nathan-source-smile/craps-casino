import GlobalVariables from "./GlobalVariables";
import { BET_LIST } from "./Common/Constants";

cc.Class({
    extends: cc.Component,

    properties: {
        explabel: cc.Label,
    },

    onLoad() {
    },

    start1() {
    },

    // called every frame
    update: function (dt) {
        this.explabel.string = "Time: " + dt.toFixed(2);
    },

});