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
        let totalBet = 0;

        for( i = 0; i < GlobalVariables.betList.length; i++ ){
            totalBet += GlobalVariables.betList[i].betAmount;
        }

        const label = this.node.getComponent(cc.Label);
        label.string = "Current bet: " + totalBet;
    }
})