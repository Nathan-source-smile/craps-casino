import GlobalVariables from "./GlobalVariables";


export default cc.Class({
    extends: cc.Component,

    properties: {
        offSprite: cc.Node,
        onSprite: cc.Node,

        _gameState: -1,
        _originPos: null,
    },

    onLoad() {
        this._gameState = -1;
        this.offSprite.active = true;
        this.onSprite.active = false;
        this._originPos = this.getPosition();
    },

    start1() {
    },

    setFace(on) {
        if (on) {
            this.offSprite.active = false;
            this.onSprite.active = true;
        } else {
            this.offSprite.active = true;
            this.onSprite.active = false;
        }
    },

    getPosition() {
        return this.node.position;
    },

    moveToPos(d, x, y) {
        this.node.stopAllActions();
        cc.tween(this.node)
            .to(d, { x: x, y: y })
            .start();
    },

    setPuck(_gameState) {
        var movieUnit = 70;
        var movePos = 0;
        switch (_gameState) {
            case 4:
                this.setFace(true);
                movePos = movieUnit + this._originPos.x;
                this.moveToPos(0.2, movePos, this._originPos.y);
                break;
            case 5:
                this.setFace(true);
                movePos = 2 * movieUnit + this._originPos.x;
                this.moveToPos(0.2, movePos, this._originPos.y);
                break;
            case 6:
                this.setFace(true);
                movePos = 3 * movieUnit + this._originPos.x;
                this.moveToPos(0.2, movePos, this._originPos.y);
                break;
            case 8:
                this.setFace(true);
                movePos = 4 * movieUnit + this._originPos.x;
                this.moveToPos(0.2, movePos, this._originPos.y);
                break;
            case 9:
                this.setFace(true);
                movePos = 5 * movieUnit + this._originPos.x;
                this.moveToPos(0.2, movePos, this._originPos.y);
                break;
            case 10:
                this.setFace(true);
                movePos = 6 * movieUnit + this._originPos.x;
                this.moveToPos(0.2, movePos, this._originPos.y);
                break;
            default:
                this.setFace(false);
                this.moveToPos(0.2, this._originPos.x, this._originPos.y);
        }

    },

    // called every frame
    update: function (dt) {
    },

});