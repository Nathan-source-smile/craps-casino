import GlobalVariables from "./GlobalVariables";
import { BET_LIST } from "./Common/Constants";

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // box: {
        //     default: null,
        //     type: cc.Node,
        // },
        // boxWidth: {
        //     default: 80,
        //     type: cc.Integer
        // },
        // boxHeight: {
        //     default: 50,
        //     type: cc.Integer
        // },
        flowSpeed: {
            default: 100,
            type: cc.Integer
        }
    },

    onLoad() {
        // Set up label properties
        this.label.overflow = cc.Label.Overflow.NONE;
        this.label.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
        this.label.verticalAlign = cc.Label.VerticalAlign.CENTER;

        // Start the flow animation
        this.startFlowAnimation();
        //this.labelFlow();
    },

    labelFlow() {
        const startPos = this.label.node.position;
        console.log("labelflow", startPos.x)
        const endPos = cc.v2(- this.label.node.position.x, 0);
        console.log("labelflow", startPos, endPos)
        const distance = startPos.sub(endPos).mag();

        const duration = distance / this.flowSpeed;

        // if (this.label.length * 9 > this.node.width) {
            cc.tween(this.label.node)
                .to(duration, { x: endPos.x, y: endPos.y })
                .call(() => {
                    this.startFlowAnimation();
                })
                .start();
        // }


        // Create and run the movement animation
        // const moveAction = cc.moveBy(duration*2, endPos);
        // const resetAction = cc.callFunc(() => {
        //     this.label.node.position = cc.v2(500, -this.node.height );
        //      this.startFlowAnimation();
        // });

        // const sequence = cc.sequence(moveAction, resetAction);
        // this.label.node.runAction(sequence);
    },



    startFlowAnimation() {
        this.label.node.position = cc.v2( this.node.width / 2 + this.label.node.width / 2, 0);
        // this.label.node.position = cc.v2( 0 , 0);
        this.labelFlow();
    },

    updateLabel() {
        this.label.string = GlobalVariables.message; // Assuming GlobalVariables.message contains the dynamic label content
    },

    // Called every frame
    update(dt) {
        this.updateLabel();
    }
})