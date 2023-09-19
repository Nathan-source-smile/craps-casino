import BettingArea from "./BettingArea";
import PropositionArea from "./PropositionArea";
import Doms from "./Doms";
import { loadImgAtlas } from "./AssetLoader";
import { TopBar } from "./Topbar";


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
            defult: null,
            type : cc.Prefab,
        }
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = this.text;
        GameScene = this;
    },

    // called every frame
    update: function (dt) {

    },
});
