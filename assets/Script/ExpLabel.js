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
                this.explabel.string = BET_LIST[0].name + " - " + BET_LIST[0].rule;
                break;
            case 1:
                this.explabel.string = BET_LIST[1].name + " - " + BET_LIST[1].rule;
                break;
            case 2:
                this.explabel.string = BET_LIST[2].name + " - " + BET_LIST[2].rule;
                break;
            case 3:
                this.explabel.string = BET_LIST[3].name + " - " + BET_LIST[3].rule;
                break;
            case 4:
                this.explabel.string = BET_LIST[4].name + " - " + BET_LIST[4].rule;
                break;
            case 5:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[5].name + " FOUR" + " - " + BET_LIST[5].rule[0];
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[5].name + " FIVE" + " - " + BET_LIST[5].rule[1];
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[5].name + " SIX" + " - " + BET_LIST[5].rule[2];
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[5].name + " EIGHT" + " - " + BET_LIST[5].rule[3];
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[5].name + " NINE" + " - " + BET_LIST[5].rule[4];
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[5].name + " TEN" + " - " + BET_LIST[5].rule[5];
                        break;       
                }
                break;
            case 6:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[6].name + " FOUR" + " - " + BET_LIST[6].rule[0];
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[6].name + " FIVE" + " - " + BET_LIST[6].rule[1];
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[6].name + " SIX" + " - " + BET_LIST[6].rule[2];
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[6].name + " EIGHT" + " - " + BET_LIST[6].rule[3];
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[6].name + " NINE" + " - " + BET_LIST[6].rule[4];
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[6].name + " TEN" + " - " + BET_LIST[6].rule[5];
                        break;       
                }
                break;
            case 7:
                this.explabel.string = BET_LIST[7].name + " - " + BET_LIST[7].rule;
                break;
            case 8:
                this.explabel.string = BET_LIST[8].name + " - " + BET_LIST[8].rule;
                break;
            case 9:
                this.explabel.string = BET_LIST[9].name + " - " + BET_LIST[9].rule;
                break;
            case 10:
                this.explabel.string = BET_LIST[10].name + " - " + BET_LIST[10].rule;
                break;
            case 11:
                this.explabel.string = BET_LIST[11].name + " - " + BET_LIST[11].rule;
                break;
            case 12:
                this.explabel.string = BET_LIST[12].name + " - " + BET_LIST[12].rule;
                break;
            case 13:
                this.explabel.string = BET_LIST[13].name + " - " + BET_LIST[13].rule;
                break;
            case 14:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[14].name + " FOUR" + " - " + BET_LIST[14].rule[0];
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[14].name + " FIVE" + " - " + BET_LIST[14].rule[1];
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[14].name + " SIX" + " - " + BET_LIST[14].rule[2];
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[14].name + " EIGHT" + " - " + BET_LIST[14].rule[3];
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[14].name + " NINE" + " - " + BET_LIST[14].rule[4];
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[14].name + " TEN" + " - " + BET_LIST[14].rule[5];
                        break;       
                }
                break;
            case 15:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[15].name + " FOUR" + " - " + BET_LIST[15].rule[0];
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[15].name + " FIVE" + " - " + BET_LIST[15].rule[1];
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[15].name + " SIX" + " - " + BET_LIST[15].rule[2];
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[15].name + " EIGHT" + " - " + BET_LIST[15].rule[3];
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[15].name + " NINE" + " - " + BET_LIST[15].rule[4];
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[15].name + " TEN" + " - " + BET_LIST[15].rule[5];
                        break;       
                }
                break;
            case 16:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[16].name + " FOUR" + " - " + BET_LIST[16].rule[0];
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[16].name + " FIVE" + " - " + BET_LIST[16].rule[1];
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[16].name + " SIX" + " - " + BET_LIST[16].rule[2];
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[16].name + " EIGHT" + " - " + BET_LIST[16].rule[3];
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[16].name + " NINE" + " - " + BET_LIST[16].rule[4];
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[16].name + " TEN" + " - " + BET_LIST[16].rule[5];
                        break;       
                }
                break;
            case 17:
                switch(GlobalVariables.currentBetContract){
                    case 4:
                        this.explabel.string = BET_LIST[17].name + " FOUR" + " - " + BET_LIST[17].rule[0];
                        break;
                    case 5:
                        this.explabel.string = BET_LIST[17].name + " FIVE" + " - " + BET_LIST[17].rule[1];
                        break;
                    case 6:
                        this.explabel.string = BET_LIST[17].name + " SIX" + " - " + BET_LIST[17].rule[2];
                        break;
                    case 8:
                        this.explabel.string = BET_LIST[17].name + " EIGHT" + " - " + BET_LIST[17].rule[3];
                        break;
                    case 9:
                        this.explabel.string = BET_LIST[17].name + " NINE" + " - " + BET_LIST[17].rule[4];
                        break;
                    case 10:
                        this.explabel.string = BET_LIST[17].name + " TEN" + " - " + BET_LIST[17].rule[5];
                        break;       
                }
                break;
            case 18:
                this.explabel.string = BET_LIST[18].name + " - " + BET_LIST[18].rule;
                break;
            case 19:
                this.explabel.string = BET_LIST[19].name + " - " + BET_LIST[19].rule;
                break;
            case 20:
                this.explabel.string = BET_LIST[20].name + " - " + BET_LIST[20].rule;
                break;
            case 21:
                this.explabel.string = BET_LIST[21].name + " - " + BET_LIST[21].rule;
                break;
            case 22:
                this.explabel.string = BET_LIST[22].name + " - " + BET_LIST[22].rule;
                break;
            case 23:
                this.explabel.string = BET_LIST[23].name + " - " + BET_LIST[23].rule;
                break;
            case 24:
                this.explabel.string = BET_LIST[24].name + " - " + BET_LIST[24].rule;
                break;
            case 25:
                this.explabel.string = BET_LIST[25].name + " - " + BET_LIST[25].rule;
                break;
        }
    },

});