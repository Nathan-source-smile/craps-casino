import GlobalVariables from "./GlobalVariables";
import { BET_LIST } from "./Common/Constants";

cc.Class({
    extends: cc.Component,

    properties: {
        explabel: cc.Label,
    },

    onLoad() {
    },

    start1() {
    },

    // called every frame
    update: function (dt) {
        switch (GlobalVariables.currentBetId) {
            default:
                this.explabel.string = "";
            case 0:
                this.explabel.string = BET_LIST[0].name + " - " + (GlobalVariables.avail ? BET_LIST[0].rule : "not allowed");
                break;
            case 1:
                this.explabel.string = BET_LIST[1].name + " - " + (GlobalVariables.avail ? BET_LIST[1].rule : "not allowed");
                break;
            case 2:
                this.explabel.string = BET_LIST[2].name + " - " + (GlobalVariables.avail ? BET_LIST[2].rule : "not allowed");
                break;
            case 3:
                this.explabel.string = BET_LIST[3].name + " - " + (GlobalVariables.avail ? BET_LIST[3].rule : "not allowed");
                break;
            case 4:
                this.explabel.string = BET_LIST[4].name + " - " + (GlobalVariables.avail ? BET_LIST[4].rule : "not allowed");
                break;
            case 5:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[5].name + " FOUR" + " - " + (GlobalVariables.avail ? BET_LIST[5].rule[0] : "not allowed");
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[5].name + " FIVE" + " - " + (GlobalVariables.avail ? BET_LIST[5].rule[1] : "not allowed");
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[5].name + " SIX" + " - " + (GlobalVariables.avail ? BET_LIST[5].rule[2] : "not allowed");
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[5].name + " EIGHT" + " - " + (GlobalVariables.avail ? BET_LIST[5].rule[3] : "not allowed");
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[5].name + " NINE" + " - " + (GlobalVariables.avail ? BET_LIST[5].rule[4] : "not allowed");
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[5].name + " TEN" + " - " + (GlobalVariables.avail ? BET_LIST[5].rule[5] : "not allowed");
                        break;       
                }
                break;
            case 6:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[6].name + " FOUR" + " - " + (GlobalVariables.avail ? BET_LIST[6].rule[0] : "not allowed");
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[6].name + " FIVE" + " - " + (GlobalVariables.avail ? BET_LIST[6].rule[1] : "not allowed");
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[6].name + " SIX" + " - " + (GlobalVariables.avail ? BET_LIST[6].rule[2] : "not allowed");
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[6].name + " EIGHT" + " - " + (GlobalVariables.avail ? BET_LIST[6].rule[3] : "not allowed");
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[6].name + " NINE" + " - " + (GlobalVariables.avail ? BET_LIST[6].rule[4] : "not allowed");
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[6].name + " TEN" + " - " + (GlobalVariables.avail ? BET_LIST[6].rule[5] : "not allowed");
                        break;       
                }
                break;
            case 7:
                this.explabel.string = BET_LIST[7].name + " - " + (GlobalVariables.avail ? BET_LIST[7].rule : "not allowed");
                break;
            case 8:
                this.explabel.string = BET_LIST[8].name + " - " + (GlobalVariables.avail ? BET_LIST[8].rule : "not allowed");
                break;
            case 9:
                this.explabel.string = BET_LIST[9].name + " - " + (GlobalVariables.avail ? BET_LIST[9].rule : "not allowed");
                break;
            case 10:
                this.explabel.string = BET_LIST[10].name + " - " + (GlobalVariables.avail ? BET_LIST[10].rule : "not allowed");
                break;
            case 11:
                this.explabel.string = BET_LIST[11].name + " - " + (GlobalVariables.avail ? BET_LIST[11].rule : "not allowed");
                break;
            case 12:
                this.explabel.string = BET_LIST[12].name + " - " + (GlobalVariables.avail ? BET_LIST[12].rule : "not allowed");
                break;
            case 13:
                this.explabel.string = BET_LIST[13].name + " - " + (GlobalVariables.avail ? BET_LIST[13].rule : "not allowed");
                break;
            case 14:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[14].name + " FOUR" + " - " + (GlobalVariables.avail ? BET_LIST[14].rule[0] : "not allowed");
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[14].name + " FIVE" + " - " + (GlobalVariables.avail ? BET_LIST[14].rule[1] : "not allowed");
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[14].name + " SIX" + " - " + (GlobalVariables.avail ? BET_LIST[14].rule[2] : "not allowed");
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[14].name + " EIGHT" + " - " + (GlobalVariables.avail ? BET_LIST[14].rule[3] : "not allowed");
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[14].name + " NINE" + " - " + (GlobalVariables.avail ? BET_LIST[14].rule[4] : "not allowed");
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[14].name + " TEN" + " - " + (GlobalVariables.avail ? BET_LIST[14].rule[5] : "not allowed");
                        break;       
                }
                break;
            case 15:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[15].name + " FOUR" + " - " + (GlobalVariables.avail ? BET_LIST[15].rule[0] : "not allowed");
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[15].name + " FIVE" + " - " + (GlobalVariables.avail ? BET_LIST[15].rule[1] : "not allowed");
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[15].name + " SIX" + " - " + (GlobalVariables.avail ? BET_LIST[15].rule[2] : "not allowed");
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[15].name + " EIGHT" + " - " + (GlobalVariables.avail ? BET_LIST[15].rule[3] : "not allowed");
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[15].name + " NINE" + " - " + (GlobalVariables.avail ? BET_LIST[15].rule[4] : "not allowed");
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[15].name + " TEN" + " - " + (GlobalVariables.avail ? BET_LIST[15].rule[5] : "not allowed");
                        break;       
                }
                break;
            case 16:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[16].name + " FOUR" + " - " + (GlobalVariables.avail ? BET_LIST[16].rule[0] : "not allowed");
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[16].name + " FIVE" + " - " + (GlobalVariables.avail ? BET_LIST[16].rule[1] : "not allowed");
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[16].name + " SIX" + " - " + (GlobalVariables.avail ? BET_LIST[16].rule[2] : "not allowed");
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[16].name + " EIGHT" + " - " + (GlobalVariables.avail ? BET_LIST[16].rule[3] : "not allowed");
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[16].name + " NINE" + " - " + (GlobalVariables.avail ? BET_LIST[16].rule[4] : "not allowed");
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[16].name + " TEN" + " - " + (GlobalVariables.avail ? BET_LIST[16].rule[5] : "not allowed");
                        break;       
                }
                break;
            case 17:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[17].name + " FOUR" + " - " + (GlobalVariables.avail ? BET_LIST[17].rule[0] : "not allowed");
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[17].name + " FIVE" + " - " + (GlobalVariables.avail ? BET_LIST[17].rule[1] : "not allowed");
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[17].name + " SIX" + " - " + (GlobalVariables.avail ? BET_LIST[17].rule[2] : "not allowed");
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[17].name + " EIGHT" + " - " + (GlobalVariables.avail ? BET_LIST[17].rule[3] : "not allowed");
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[17].name + " NINE" + " - " + (GlobalVariables.avail ? BET_LIST[17].rule[4] : "not allowed");
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[17].name + " TEN" + " - " + (GlobalVariables.avail ? BET_LIST[17].rule[5] : "not allowed");
                        break;       
                }
                break;
            case 18:
                this.explabel.string = BET_LIST[18].name + " - " + (GlobalVariables.avail ? BET_LIST[18].rule : "not allowed");
                break;
            case 19:
                this.explabel.string = BET_LIST[19].name + " - " + (GlobalVariables.avail ? BET_LIST[19].rule : "not allowed");
                break;
            case 20:
                this.explabel.string = BET_LIST[20].name + " - " + (GlobalVariables.avail ? BET_LIST[20].rule : "not allowed");
                break;
            case 21:
                this.explabel.string = BET_LIST[21].name + " - " + (GlobalVariables.avail ? BET_LIST[21].rule : "not allowed");
                break;
            case 22:
                this.explabel.string = BET_LIST[22].name + " - " + (GlobalVariables.avail ? BET_LIST[22].rule : "not allowed");
                break;
            case 23:
                this.explabel.string = BET_LIST[23].name + " - " + (GlobalVariables.avail ? BET_LIST[23].rule : "not allowed");
                break;
            case 24:
                this.explabel.string = BET_LIST[24].name + " - " + (GlobalVariables.avail ? BET_LIST[24].rule : "not allowed");
                break;
            case 25:
                this.explabel.string = BET_LIST[25].name + " - " + (GlobalVariables.avail ? BET_LIST[25].rule : "not allowed");
                break;
        }
    },

});