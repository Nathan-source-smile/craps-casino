import Coin from "./Coin";
import { POINTS } from "./Common/Constants";
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

        _disable: false,
        _updateState: false,

    },

    onLoad() {
        this.hover.active = false;
        if ([2, 3].includes(this.betId) && this.contract !== 0) {
            this._disable = true;
        }
        // this.start1();
    },

    start1() {
        console.log("111");
        let startPosition = this.dom.convertToNodeSpaceAR(cc.v2(480, 405));
        const coin100 = cc.instantiate(this.coin100);
        coin100.scale = cc.v2(0.3, 0.3);
        this.dom.addChild(coin100);
        coin100.setPosition(5, 0);
        coin100.setPosition(startPosition);
        let targetPosition = cc.v2(0, 0);
        this.moveToPos(coin100, 0.2, 0, 0)
    },

    onMouseMove() {
        if (this._disable)
            return;
        if (!GlobalVariables.availableBets.includes(this.betId)) {
            GlobalVariables.avail = false;
        } else {
            GlobalVariables.currentBetId = this.betId;
            GlobalVariables.currentBetContract = this.contract;
            GlobalVariables.currentBetMax = this._limit;
            if (14 === this.betId && !GlobalVariables.availableComes.includes(this.contract)) {
                GlobalVariables.avail = false;
                return;
            }
            if (15 === this.betId && !GlobalVariables.availableDComes.includes(this.contract)) {
                GlobalVariables.avail = false;
                return;
            }
            GlobalVariables.avail = true;
            this.hover.active = true;
        }
    },

    onMouseLeave() {
        if (this._disable)
            return;
        // Handle hover leave event
        this.hover.active = false;
    },

    onTouchStart() {
        if (this._disable)
            return;
        if (!GlobalVariables.availableBets.includes(this.betId)) {
            // GlobalVariables.message = "Not available bet"
        } else {
            if (14 === this.betId && !GlobalVariables.availableComes.includes(this.contract)) {
                // GlobalVariables.message = "Not available bet"
                return;
            }
            if (15 === this.betId && !GlobalVariables.availableDComes.includes(this.contract)) {
                // GlobalVariables.message = "Not available bet"
                return;
            }
            if (GlobalVariables.chip !== -1) {
                if ((this._betAmount + GlobalVariables.chip) > this._limit) {
                    GlobalVariables.message = "Overflow the bet amount"
                    return;
                }
                GlobalVariables.history.push({
                    betId: this.betId,
                    betAmount: GlobalVariables.chip,
                    betSuccess: 0,
                    contract: this.contract,
                    limit: this.limit,
                });
                this._updateState = false;
                let coin;
                switch (GlobalVariables.chip) {
                    case 1:
                        coin = cc.instantiate(this.coin1);
                        break;
                    case 5:
                        coin = cc.instantiate(this.coin5);
                        break;
                    case 10:
                        coin = cc.instantiate(this.coin10);
                        break;
                    case 25:
                        coin = cc.instantiate(this.coin25);
                        break;
                    case 50:
                        coin = cc.instantiate(this.coin50);
                        break;
                    case 100:
                        coin = cc.instantiate(this.coin100);
                        break;
                    default:
                        coin = cc.instantiate(this.coin1);
                        break;
                }
                coin.scale = cc.v2(0.3, 0.3);
                this.dom.addChild(coin);
                coin.setPosition(cc.v2(0, 10));
                this.moveToPos(coin, 0.2, 0, 0);
                let flag = true;
                GlobalVariables.new_betList = GlobalVariables.new_betList.map((el, i) => {
                    if (el.betId === this.betId) {
                        if ([2, 3, 5, 6, 14, 15, 16, 17].includes(el.betId)) {
                            if (el.contract === this.contract) {
                                flag = false;
                                el.betAmount += GlobalVariables.chip;
                                return { ...el, betAmount: el.betAmount };
                            } else {
                                return el;
                            }
                        } else {
                            flag = false;
                            el.betAmount += GlobalVariables.chip;
                            return { ...el, betAmount: el.betAmount };
                        }
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
                        if ([2, 3, 5, 6, 14, 15, 16, 17].includes(el.betId)) {
                            if (el.contract === this.contract) {
                                flag = false;
                                this._betAmount += GlobalVariables.chip;
                                return { ...el, betAmount: this._betAmount };
                            } else {
                                return el;
                            }
                        } else {
                            flag = false;
                            this._betAmount += GlobalVariables.chip;
                            return { ...el, betAmount: this._betAmount };
                        }
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
                GlobalVariables.totalCoin -= GlobalVariables.chip;
                GlobalVariables.message = "Put " + GlobalVariables.chip + " coin";
            } else {
                GlobalVariables.message = "Please select a chip";
            }
        }
    },

    // called every frame
    update: function (dt) {
        if (this._updateState) {
            let flag = true;
            GlobalVariables.betList.forEach((el) => {
                if (el.betId === this.betId) {
                    if ([2, 3, 5, 6, 14, 15, 16, 17].includes(el.betId)) {
                        if (el.contract === this.contract) {
                            flag = false;
                            this._betAmount = el.betAmount;
                            this.removeCoins();
                            this.addCoins();
                        }
                    } else {
                        flag = false;
                        this._betAmount = el.betAmount;
                        this.removeCoins();
                        this.addCoins();
                    }
                }
            });
            if (flag) {
                this.removeCoins();
                this._betAmount = 0;
            }
            let res;
            if (this.betId === 4) {
                res = this.getbetItem(0, 0);
                if (res) {
                    this._limit = res.betAmount * 3;
                } else {
                    this._limit = 0;
                }
            }
            if (this.betId === 13) {
                res = this.getbetItem(1, 0);
                if (res) {
                    this._limit = res.betAmount * 3;
                } else {
                    this._limit = 0;
                }
            }
            if (this.betId === 14 && POINTS.includes(this.contract)) {
                res = this.getbetItem(2, this.contract);
                if (res) {
                    this._limit = res.betAmount * 3;
                } else {
                    this._limit = 0;
                }
            }
            if (this.betId === 15 && POINTS.includes(this.contract)) {
                res = this.getbetItem(3, this.contract);
                if (res) {
                    this._limit = res.betAmount * 3;
                } else {
                    this._limit = 0;
                }
            }
        }
    },

    removeCoins() {
        let coins = this.node.getComponentsInChildren(Coin);
        coins.forEach(element => {
            element.node.destroy();
        });
    },

    addCoins() {
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
            coin100.setPosition(5, 0);
        }
        for (let i = 0; i < a50; i++) {
            const coin50 = cc.instantiate(this.coin50);
            coin50.scale = cc.v2(0.3, 0.3);
            this.dom.addChild(coin50);
            coin50.setPosition(4, 0);
        }
        for (let i = 0; i < a25; i++) {
            const coin25 = cc.instantiate(this.coin25);
            coin25.scale = cc.v2(0.3, 0.3);
            this.dom.addChild(coin25);
            coin25.setPosition(3, 0);
        }
        for (let i = 0; i < a10; i++) {
            const coin10 = cc.instantiate(this.coin10);
            coin10.scale = cc.v2(0.3, 0.3);
            this.dom.addChild(coin10);
            coin10.setPosition(2, 0);
        }
        for (let i = 0; i < a5; i++) {
            const coin5 = cc.instantiate(this.coin5);
            coin5.scale = cc.v2(0.3, 0.3);
            this.dom.addChild(coin5);
            coin5.setPosition(1, 0);
        }
        for (let i = 0; i < a1; i++) {
            const coin1 = cc.instantiate(this.coin1);
            coin1.scale = cc.v2(0.3, 0.3);
            this.dom.addChild(coin1);
            coin1.setPosition(0, 0);
        }
        // if (this.betId === 2 && this.contract !== 0) {
        //     let coins = this.node.getComponentsInChildren(Coin);
        //     coins.forEach(element => {
        //         let startPosition = this.dom.convertToNodeSpaceAR(cc.v2(480, 405));
        //         element.node.setPosition(startPosition);
        //         let targetPosition = cc.v2(0, 0);
        //         this.moveToPos(element.node, 0.2, 0, 0)
        //     });
        // }
    },

    moveToPos(node, d, x, y) {
        node.stopAllActions();
        cc.tween(node)
            .to(d, { x: x, y: y })
            .call(() => { this._updateState = true; })
            .start();
    },

    getbetItem(betId, contract) {
        let result = null;
        GlobalVariables.betList.forEach(el => {
            if (el.betId === betId && el.contract === contract) {
                result = { ...el };
            }
        });
        return result;
    }
});