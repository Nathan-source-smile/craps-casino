import BettingArea from "./BettingArea";
import PropositionArea from "./PropositionArea";
import Doms from "./Doms";
import { loadImgAtlas } from "./AssetLoader";
import TopBar from "./TopBar";
import { ClientCommService } from "./ClientCommService";
import Dice from './Dice';
import GlobalVariables from "./GlobalVariables";
import Puck from "./Puck";
import DiceAnimation from "./DiceAnimation";


function copyObject(object) {
    if (!object) {
        console.log("undefined object in copyObject:", object);
        return object;
    }
    return JSON.parse(JSON.stringify(object));
}

export let GameScene;
cc.Class({
    extends: cc.Component,

    properties: {
        bettingArea: {
            default: null,
            type: BettingArea,
        },
        propositionArea: {
            default: null,
            type: PropositionArea,
        },
        menuBar: {
            default: null,
            type: TopBar,
        },
        chip1: {
            default: null,
            type: cc.Prefab,
        },
        chip5: {
            default: null,
            type: cc.Prefab,
        },
        chip25: {
            default: null,
            type: cc.Prefab,
        },
        chip100: {
            default: null,
            type: cc.Prefab,
        },
        chip500: {
            default: null,
            type: cc.Prefab,
        },
        betDom: {
            default: null,
            type: Doms,
        },
        puck: {
            default: null,
            type: Puck,
        },
        dice1: Dice,
        dice2: Dice,
        roll: cc.Button,
        diceArea: DiceAnimation,

        _gameState: -1,
        _availableBets: [],
        _betList: [],
        _availableComes: [],
        _availableDComes: [],
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = this.text;
        GameScene = this;
        this.start1();
    },

    start1(availableBets) {
        this._gameState = -1;
        this._availableBets = availableBets;
        this._betList = [];
    },

    onRollClick() {
        if (GlobalVariables.betList.length === 0) {
            GlobalVariables.message = "Place your bet"
        } else {
            ClientCommService.sendClaimRoll(0, GlobalVariables.betList, GlobalVariables.new_betList, GlobalVariables.totalCoin);
            GlobalVariables.new_betList = [];
        }
    },

    // set result of roll
    setRollResult(dice1, dice2, player, gameState, availableBets, availableComes, availableDComes) {
        GlobalVariables.message = "Place your bet";
        this.dice1.setNo(dice1);
        this.dice2.setNo(dice2);
        this.diceArea.doAnimation();
        this.puck.setPuck(gameState);

        this._availableBets = availableBets;
        this._availableComes = availableComes;
        this._availableDComes = availableDComes;

        GlobalVariables.history = [];
        GlobalVariables.gameState = gameState;
        GlobalVariables.availableBets = availableBets;
        GlobalVariables.availableComes = availableComes;
        GlobalVariables.availableDComes = availableDComes;
        GlobalVariables.betList = [];
        let delta = GlobalVariables.totalCoin - player.coins;
        if (delta < 0) {
            GlobalVariables.message = "the player wins " + delta.toFixed(2) + " toros";
        } else if (delta > 0) {
            GlobalVariables.message = "the casino wins";
        }
        GlobalVariables.totalCoin = player.coins;
        for (let i = 0; i < player.betList.length; i++) {
            if (player.betList[i].betSuccess === 0) {
                GlobalVariables.betList.push(copyObject(player.betList[i]));
            } else if (player.betList[i].betSuccess === 1) {
                console.log("s:", player.betList[i]);
            } else if (player.betList[i].betSuccess === -1) {
                console.log("f:", player.betList[i]);
                GlobalVariables.message = "the casino wins";
            }
        }
    },

    onClearClick() {
        GlobalVariables.message = "Place your bet";
        let temp_betList = [];
        GlobalVariables.deleted_betList = [];
        // GlobalVariables.history = [];
        GlobalVariables.betList.forEach((betItem) => {
            if (betItem.betId === 2 && betItem.contract !== 0) {
                temp_betList.push(betItem);
            } else if (betItem.betId === 3 && betItem.contract !== 0) {
                temp_betList.push(betItem);
            } else if (betItem.betId === 0 && GlobalVariables.gameState !== -1) {
                temp_betList.push(betItem);
            } else {
                GlobalVariables.deleted_betList.push(betItem);
                GlobalVariables.totalCoin += betItem.betAmount;
            }
        });
        if (GlobalVariables.deleted_betList.length > 0) {
            GlobalVariables.history.push("deleted");
        }
        GlobalVariables.betList = [...temp_betList];
    },

    onUndoClick() {
        if (GlobalVariables.history.length > 0) {
            GlobalVariables.message = "Place your bet";
            let temp = GlobalVariables.history.pop();
            console.log(temp);
            let temp_betList = [];
            if (temp === "deleted") {
                GlobalVariables.deleted_betList.forEach((deleted) => {
                    // let flag = true;
                    // GlobalVariables.betList.forEach(betItem => {
                    //     if (betItem.betId === deleted.betId && betItem.contract === deleted.contract) {
                    //         GlobalVariables.totalCoin -= deleted.betAmount;
                    //         let rest = betItem.betAmount + deleted.betAmount;
                    //         if (rest > 0) {
                    //             flag = false;
                    //             temp_betList.push({ ...betItem, betAmount: rest });
                    //         }
                    //     }
                    // });
                    GlobalVariables.totalCoin -= deleted.betAmount;
                    GlobalVariables.betList.push(deleted);
                });
            } else {
                GlobalVariables.betList.forEach((betItem) => {
                    if (betItem.betId === temp.betId && betItem.contract === temp.contract) {
                        GlobalVariables.totalCoin += temp.betAmount;
                        let rest = betItem.betAmount - temp.betAmount;
                        if (rest > 0) {
                            temp_betList.push({ ...betItem, betAmount: rest });
                        }
                    } else {
                        temp_betList.push(betItem);
                    }
                });
                GlobalVariables.betList = [...temp_betList];
            }
        }
    },

    // called every frame
    update: function (dt) {

    },
});