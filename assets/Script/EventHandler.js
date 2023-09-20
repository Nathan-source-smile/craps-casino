import { ClientCommService } from "./ClientCommService";
import GlobalVariables from "./GlobalVariables";
import BetItem from "./BetItem";

cc.Class({
    extends: cc.Component,

    properties: {
        _colliders: [],
    },

    onLoad() {
        // Enable mouse input events
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        
        this._colliders = this.node.getComponentsInChildren(cc.PolygonCollider);
    },

    start1() {
    },

    onMouseMove(event) {
        const touchPos = event.getLocation();
        for (let i = 0; i < this._colliders.length; i++) {
            const localPos = this._colliders[i].node.convertToNodeSpaceAR(touchPos);
            const betItem = this._colliders[i].node.getComponent(BetItem);
            if (cc.Intersection.pointInPolygon(localPos, this._colliders[i].points)) {
                betItem.onMouseMove();
            } else {
                betItem.onMouseLeave();
            }
        }

    },

    onTouchStart(event) {
        const touchPos = event.getLocation();
        for (let i = 0; i < this._colliders.length; i++) {
            const localPos = this._colliders[i].node.convertToNodeSpaceAR(touchPos);
            const betItem = this._colliders[i].node.getComponent(BetItem);
            if (cc.Intersection.pointInPolygon(localPos, this._colliders[i].points)) {
                betItem.onTouchStart();
            }
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