import Dice from "./Dice";

export default cc.Class({
    extends: cc.Component,

    properties: {
        dice1: Dice,
        dice2: Dice,

        _position1: null,
        _position2: null,
    },

    onLoad() {
        this._position1 = this.dice1.node.position;
        this._position2 = this.dice2.node.position;
        // this.doAnimation();
    },

    start1() {
    },

    doAnimation() {
        this.dice1.node.stopAllActions();
        // this.setVisible(true);
        let startPosition = this.node.convertToNodeSpaceAR(cc.v2(-100, getRandomInteger(150, 300)));
        this.dice1.node.setPosition(startPosition);
        this.dice1.node.angle = 0;
        cc.tween(this.dice1.node).to(0.7, { position: this._position1, angle: -1080, })
            .start();

        this.dice2.node.stopAllActions();
        // this.setVisible(true);
        startPosition = this.node.convertToNodeSpaceAR(cc.v2(-100, getRandomInteger(350, 500)));
        this.dice2.node.setPosition(startPosition);
        this.dice2.node.angle = 0;
        cc.tween(this.dice2.node).to(0.7, { position: this._position2, angle: 1080, })
            .start();

    },

    // called every frame
    update: function (dt) {
    },

});

function getRandomInteger(min, max) {
    // Add 1 to the max value, as Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
    // Multiply the difference between max and min by Math.random()
    // Use Math.floor() to round down the result to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}