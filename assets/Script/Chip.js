const DOUBLE_TOUCH_INTERVAL = 0.3; // Time in seconds between two consecutive touches
import GlobalVariables from "./GlobalVariables";

let touchCount = 0;
let lastTouchTime = 0;

cc.Class({
    extends: cc.Component,

    properties: {
        coin: 0,
    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, (event) => {
            const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
            if (touchCount === 1 && (currentTime - lastTouchTime) <= DOUBLE_TOUCH_INTERVAL) {
                // Handle double touch event
                this.onDoubleTouch(event);
                touchCount = 0;
            } else {
                touchCount = 1;
                lastTouchTime = currentTime;
            }
        }, this);
    },

    start1() {
    },

    onDoubleTouch(event) {
        GlobalVariables.chip = this.coin;
        console.log(GlobalVariables.chip);
        const pos = this.getPosition();
        this.moveToPos(0.1, 20, pos.y);
        let pos1 = this.getPosition();
        console.log(pos1.x, pos1.y);
    },

    moveToPos(d, x, y) {
        // console.log(this.node);
        this.node.stopAllActions();
        cc.tween(this.node)
            .to(d, { x: x, y: y })
            .start();
    },

    getPosition() {
        return this.node.position;
    },

    // called every frame
    update: function (dt) {
        if (GlobalVariables.chip !== this.coin) {
            let pos1 = this.getPosition();
            console.log("sss", this.coin, pos1.x, pos1.y);
            // this.moveToPos(0.1, 0, pos1.y);
            this.node.position = cc.v2(0, pos1.y);
        }
    },

    isListInArray(arr, list) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length === list.length && arr[i].every((value, index) => value === list[index])) {
                return true;
            }
        }
        return false;
    },

});