const DOUBLE_TOUCH_INTERVAL = 0.3; // Time in seconds between two consecutive touches
import GlobalVariables from "./GlobalVariables";


cc.Class({
    extends: cc.Component,

    properties: {
        mainButton: cc.Button,
        offSprite: cc.Sprite,
        onSprite: cc.Sprite,
        flag : false,

        _gameState: -1,
    },

    onLoad() {
    },

    start1() {
    },

    // calcDistance(curState, nextState){
    //     if()
    // },

    // animationButton () {
    //     if(getPosition() > 0){
    //         mainButton.
    //     }
    // },

    getPosition() {
        return this.node.position;
    },

    setPuck ( _gameState){
        let curPosition;
        var movieUnit = 73;
        var movePos = 0;
        if(_gameState === -1) {
            flag = false;
        } else {
            switch (_gameState) {
                case 4:
                    flag = true;
                    curPosition = this.getPosition();
                    movePos = movieUnit - curPosition.x;
                    onSprite.moveToPos(abs(movePos/movieUnit)*300, movePos, 0);
                    break;
                case 5:
                    flag = true;
                    curPosition = this.getPosition();
                    movePos = 2*movieUnit - curPosition;
                    onSprite.moveToPos(abs(movePos/movieUnit)*300, movePos, 0);
                    break;
                case 6:
                    flag = true;
                    curPosition = this.getPosition();
                    movePos = 3*movieUnit - curPosition;
                    onSprite.moveToPos(abs(movePos/movieUnit)*300, movePos, 0);
                    break;
                case 8: 
                    flag = true;
                    curPosition = this.getPosition();
                    movePos = 4*movieUnit - curPosition;
                    onSprite.moveToPos(abs(movePos/movieUnit)*300, movePos, 0);
                    break;
                case 9:
                    flag = true;
                    curPosition = this.getPosition();
                    movePos = 5*movieUnit - curPosition;
                    onSprite.moveToPos(abs(movePos/movieUnit)*300, movePos, 0);
                    break;
                case 10:
                    flag = true;
                    curPosition = this.getPosition();
                    movePos = 6*movieUnit - curPosition;
                    onSprite.moveToPos(abs(movePos/movieUnit)*300, movePos, 0);
                    break;
                default:
                    flag = false;
                    onSprite.moveToPos(500, 0, 0);
            }
        }

    },


    

    // called every frame
    update: function (dt) {
        if (GlobalVariables.chip !== this.coin) {
            let pos1 = this.getPosition();
            this.node.position = cc.v2(0, pos1.y);
        }
    },

});