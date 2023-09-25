import GlobalVariables from "./GlobalVariables";
import { BET_LIST } from "./Common/Constants";

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        flowSpeed: {
            default: 100,
            type: cc.Integer
        },

        _update: true,
        _temp: "",
    },

    onLoad() {
        // Set up label properties
        this.label.overflow = cc.Label.Overflow.NONE;
        this.label.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
        this.label.verticalAlign = cc.Label.VerticalAlign.CENTER;
    },

    labelFlow() {
        const startPos = this.label.node.position;
        const endPos = cc.v2(- this.label.node.position.x, 0);
        const distance = startPos.sub(endPos).mag();

        const duration = distance / this.flowSpeed;

        cc.tween(this.label.node)
            .to(duration, { x: endPos.x, y: endPos.y })
            .call(() => {
                this.startFlowAnimation();
            })
            .start();
    },



    startFlowAnimation() {
        if (GlobalVariables.message.length * 9 > this.node.width) {
            this._update = false;
            this.label.node.position = cc.v2(this.node.width / 2 + this.label.node.width / 2, 0);
            this.labelFlow();
        } else {
            this.label.node.stopAllActions();
            // cc.tween(this.label.node).stop();
            this.label.node.position = cc.v2(0, 0);
        }
    },

    updateLabel() {
        if (this.label.string !== GlobalVariables.message) {
            this._update = true;
            this.label.string = GlobalVariables.message; // Assuming GlobalVariables.message contains the dynamic label content
        }
    },

    // Called every frame
    update(dt) {
        this.updateLabel();
        if (this._update) {
            this.startFlowAnimation();
        }
    }
})