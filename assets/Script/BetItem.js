import Chip from "./Chip";
import { ClientCommService } from "./ClientCommService";
import Coin from "./Coin";
import GlobalVariables from "./GlobalVariables";


export default cc.Class({
    extends: cc.Component,

    properties: {
        hover: cc.Node,
        dom: cc.Node,
        coin1: cc.Prefab,
        coin5: cc.Prefab,
        coin10: cc.Prefab,
        coin25: cc.Prefab,
        coin50: cc.Prefab,
        coin100: cc.Prefab,

        betId: -1,
        _betAmount: 0,
        _betSuccess: 0,
        contract: 0,
        _limit: 100,

        _lastAmount: 0,
    },

    onLoad() {
        this.hover.active = false;
    },

    start1() {
    },

    onMouseMove() {
        console.log("hover");
        this.hover.active = true;
        GlobalVariables.currentBetId = this.betId;
        GlobalVariables.currentBetContract = this.contract;
        GlobalVariables.currentBetMax = 200;
    },

    onMouseLeave() {
        // Handle hover leave event
        this.hover.active = false;
    },

    onTouchStart() {
        if (GlobalVariables.chip !== -1) {
            if ((this._betAmount + GlobalVariables.chip) > this._limit) {
                GlobalVariables.message = "Can't put"
                return;
            }
            let flag = true;
            GlobalVariables.new_betList = GlobalVariables.new_betList.map((el, i) => {
                if (el.betId === this.betId) {
                    flag = false;
                    el.betAmount += GlobalVariables.chip;
                    return { ...el, betAmount: el.betAmount };
                } else {
                    return el;
                }
            });
            if (flag) {
                GlobalVariables.new_betList.push({
                    betId: this.betId,
                    betAmount: GlobalVariables.chip,
                    betSuccess: 0,
                    contract: this.contract,
                    limit: this.limit,
                });
            }
            flag = true;
            GlobalVariables.betList = GlobalVariables.betList.map((el, i) => {
                if (el.betId === this.betId) {
                    flag = false;
                    this._betAmount += GlobalVariables.chip;
                    return { ...el, betAmount: this._betAmount };
                } else {
                    return el;
                }
            });
            if (flag) {
                this._betAmount = GlobalVariables.chip;
                GlobalVariables.betList.push({
                    betId: this.betId,
                    betAmount: this._betAmount,
                    betSuccess: 0,
                    contract: this.contract,
                    limit: this.limit,
                });
            }
            // console.log(GlobalVariables.new_betList);
            GlobalVariables.message = "Put " + GlobalVariables.chip + " coin";
        } else {
            GlobalVariables.message = "The betting option is not available.";
        }
    },

    // called every frame
    update: function (dt) {
        let flag = true;
        GlobalVariables.betList.forEach((el) => {
            if (el.betId === this.betId) {
                flag = false;
                this._lastAmount = this._betAmount;
                let coins = this.node.getComponentsInChildren(Coin);
                coins.forEach(element => {
                    element.node.destroy();
                });
                let a100 = Math.floor(this._betAmount / 100); let b100 = this._betAmount % 100;
                let a50 = Math.floor(b100 / 50); let b50 = b100 % 50;
                let a25 = Math.floor(b50 / 25); let b25 = b50 % 25;
                let a10 = Math.floor(b25 / 10); let b10 = b25 % 10;
                let a5 = Math.floor(b10 / 5); let b5 = b10 % 5;
                let a1 = Math.floor(b5 / 1);

                for (let i = 0; i < a100; i++) {
                    const coin100 = cc.instantiate(this.coin100);
                    coin100.scale = cc.v2(0.3, 0.3);
                    this.dom.addChild(coin100);
                    coin100.setPosition(25, 0);
                }
                for (let i = 0; i < a50; i++) {
                    const coin50 = cc.instantiate(this.coin50);
                    coin50.scale = cc.v2(0.3, 0.3);
                    this.dom.addChild(coin50);
                    coin50.setPosition(20, 0);
                }
                for (let i = 0; i < a25; i++) {
                    const coin25 = cc.instantiate(this.coin25);
                    coin25.scale = cc.v2(0.3, 0.3);
                    this.dom.addChild(coin25);
                    coin25.setPosition(15, 0);
                }
                for (let i = 0; i < a10; i++) {
                    const coin10 = cc.instantiate(this.coin10);
                    coin10.scale = cc.v2(0.3, 0.3);
                    this.dom.addChild(coin10);
                    coin10.setPosition(10, 0);
                }
                for (let i = 0; i < a5; i++) {
                    const coin5 = cc.instantiate(this.coin5);
                    coin5.scale = cc.v2(0.3, 0.3);
                    this.dom.addChild(coin5);
                    coin5.setPosition(5, 0);
                }
                for (let i = 0; i < a1; i++) {
                    const coin1 = cc.instantiate(this.coin1);
                    coin1.scale = cc.v2(0.3, 0.3);
                    this.dom.addChild(coin1);
                    coin1.setPosition(0, 0);
                }
            }
        });
        if (flag) {
            let coins = this.node.getComponentsInChildren(Coin);
            coins.forEach(element => {
                element.node.destroy();
            });
            this._betAmount = 0;
        }
    },
});