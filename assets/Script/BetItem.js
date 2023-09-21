import { ClientCommService } from "./ClientCommService";
import GlobalVariables from "./GlobalVariables";

export default cc.Class({
    extends: cc.Component,

    properties: {
        betId: -1,
        _betAmount: 0,
        _betSuccess: 0,
        contract: 0,
        _limit: 100,
    },

    onLoad() {
        this.node.opacity = 0;
        // Enable mouse input events
        // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        // this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        // this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    },

    start1() {
    },

    onMouseMove() {
        this.node.opacity = 255;
        GlobalVariables.currentBetId = this.betId;
        GlobalVariables.currentBetContract = this.contract;
        GlobalVariables.currentBetMax = 200;
    },

    onMouseLeave() {
        // Handle hover leave event
        this.node.opacity = 0;
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