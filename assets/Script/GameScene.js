import BettingArea from "./BettingArea";
import PropositionArea from "./PropositionArea";
import Doms from "./Doms";
import { loadImgAtlas } from "./AssetLoader";
import { TopBar } from "./Topbar";
import { POINTS } from "./Common/Constants";
import { ClientCommService } from "./ClientCommService";


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
        chip2: {
            default: null,
            type: cc.Prefab,
        },
        chip3: {
            default: null,
            type: cc.Prefab,
        },
        chip4: {
            default: null,
            type: cc.Prefab,
        },
        chip5: {
            default: null,
            type: cc.Prefab,
        },
        betDom : {
            default: null,
            type : Doms,
        },
        puck : {
            default: null,
            type : cc.Prefab,
        },
        dice1: cc.Label,
        dice2: cc.Label,
        roll: cc.Button,

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
        this._betList = [];
        let betIds = getRandomItems(this._availableBets, 3);
        betIds.forEach((id) => {
            if ([5, 6, 16, 17].includes(id)) {
                this._betList.push({
                    betId: id,
                    betAmount: 10,
                    betSuccess: 0,
                    contract: getRandomItems(POINTS, 1)[0],
                    limit: 100,
                });
            } else if (14 === id) {
                this._betList.push({
                    betId: id,
                    betAmount: 10,
                    betSuccess: 0,
                    contract: getRandomItems(this._availableComes, 1)[0],
                    limit: 100,
                });
            } else if (15 === id) {
                this._betList.push({
                    betId: id,
                    betAmount: 10,
                    betSuccess: 0,
                    contract: getRandomItems(this._availableDComes, 1)[0],
                    limit: 100,
                });
            } else {
                this._betList.push({
                    betId: id,
                    betAmount: 10,
                    betSuccess: 0,
                    contract: 0,
                    limit: 100,
                });
            }
        });
        ClientCommService.sendClaimRoll(0, this._betList);
    },

    // set result of roll
    setRollResult(dice1, dice2, player, gameState, availableBets, availableComes, availableDComes) {
        this.dice1.string = dice1;
        this.dice2.string = dice2;
        this._availableBets = availableBets;
        this._availableComes = availableComes;
        this._availableDComes = availableDComes;
    },

    // called every frame
    update: function (dt) {

    },
});

function getRandomItems(arr, cnt) {
    const randomItems = [];
    const copyArr = arr.slice(); // Create a copy of the original array

    for (let i = 0; i < cnt; i++) {
        const randomIndex = Math.floor(Math.random() * copyArr.length);
        const randomItem = copyArr.splice(randomIndex, 1)[0];
        randomItems.push(randomItem);
    }

    return randomItems;
}