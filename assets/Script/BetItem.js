import { ClientCommService } from "./ClientCommService";
import GlobalVariables from "./GlobalVariables";

export default cc.Class({
    extends: cc.Component,

    properties: {
        hover : cc.Node,

        betId: -1,
        _betAmount: 0,
        _betSuccess: 0,
        contract: 0,
        _limit: 100,
    },

    onLoad() {
        this.hover.active = false;
    },

    start1() {
    },

    onMouseMove() {
        this.hover.active = true;
        GlobalVariables.currentBetId = this.betId;
        GlobalVariables.currentBetContract = this.contract;
        GlobalVariables.currentBetMax = 200;
        GlobalVariables.message = "ergjgvweopgj we wfjwefj krgregjpo";
    },

    onMouseLeave() {
        // Handle hover leave event
        this.hover.active = false;
    },

    onTouchStart() {
        if (GlobalVariables.chip !== -1) {
            console.log(GlobalVariables.chip);
        } else {
            console.log("The betting option is not available.");
        }
    },

    isListInArray(arr, list) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length === list.length && arr[i].every((value, index) => value === list[index])) {
                return true;
            }
        }
        return false;
    }

});