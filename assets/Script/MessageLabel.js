import GlobalVariables from "./GlobalVariables";
import { BET_LIST } from "./Common/Constants";

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        boxWidth: {
            default: 100,
            type: cc.Integer
        },
        boxHeight: {
            default: 50,
            type: cc.Integer
        },
        flowSpeed: {
            default: 100,
            type: cc.Integer
        }
    },

    onLoad() {
        this.label = this.node.getComponent(cc.Label);
        // this.label.node.width = this.boxWidth;
        // this.label.node.height = this.boxHeight;
        this.label.overflow = cc.Label.Overflow.NONE;
        this.label.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
        this.label.verticalAlign = cc.Label.VerticalAlign.CENTER;

        // this.startFlowAnimation();
    },

    startFlowAnimation() {
        const startPos = cc.v2(this.boxWidth / 2, -this.boxHeight / 2);
        const endPos = cc.v2(-this.label.node.width / 2, -this.boxHeight / 2);
        const distance = startPos.sub(endPos).mag();

        const duration = distance / this.flowSpeed;

        cc.tween(this.label.node)
            .to(duration, { position: endPos })
            .call(() => {
                this.label.node.position = cc.v2(this.boxWidth / 2, -this.boxHeight / 2);
                this.startFlowAnimation();
            })
            .start();
    },

    start1() {
    },

    updateLabel() {
        // const contentWidth = this.label.node.width;
        // const textWidth = this.label.node.getContentSize().width;

        // if (textWidth > contentWidth) {
        //     const offset = textWidth - contentWidth;
        //     const duration = offset / this.flowSpeed;

        //     cc.tween(this.label.node)
        //         .to(duration, { position: cc.v2(-offset / 2, -this.boxHeight / 2) })
        //         .start();
        // }

        this.label.string = GlobalVariables.message;
    },

    // called every frame
    update(dt) {
        this.updateLabel();
    }
})