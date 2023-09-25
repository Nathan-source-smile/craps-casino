import { MESSAGE_TYPE, ROUNDS } from "../Common/Messages";
import { ClientCommService } from "../ClientCommService";
import { TIME_LIMIT, ALARM_LIMIT, BET_LIST, POINTS } from "../Common/Constants";


Array.prototype.copy = function () {
    var obj = new Array();

    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i].length > 0 && this[i].copy()) { obj[i] = this[i].copy(); }
        else { obj[i] = this[i]; }
    }

    return obj;
}

function copyObject(object) {
    if (!object) {
        console.log("undefined object in copyObject:", object);
        return object;
    }
    return JSON.parse(JSON.stringify(object));
}

if (!trace) {
    var trace = function () {
        // console.trace(JSON.stringify(arguments));
    }
}

//--------Defining global variables----------
var betItem = {
    betId: -1,
    betAmount: 0,
    betSuccess: 0,
    contract: 0,
    limit: 100,
}
var player = {
    state: "",
    betList: [],
    coins: 1000,
}
var playerList = [];
var availableBets = [];
var gameState = -1;
var playerCnt = 1;
var repliedUsers = [];
var dice1 = -1;
var dice2 = -1;
var availableComes = [];
var availableDComes = [];
//--------Defining global variables----------

function initHandlers() {
    ServerCommService.addRequestHandler(
        MESSAGE_TYPE.CS_CLAIM_ROLL,
        rollDices
    );
    ServerCommService.addRequestHandler(
        MESSAGE_TYPE.CS_RESTART_MISSION,
        startMission
    );
    ServerCommService.addRequestHandler(
        MESSAGE_TYPE.CS_RESTART_GAME,
        init
    );
}

function resetRepliedUsers() {
    repliedUsers = [];
}

function isUserRepliedAlready(user) {
    repliedUsers.indexOf(user) >= 0;
}

function markUserReplied(user) {
    if (isUserRepliedAlready(user)) {
        return false;
    }
    repliedUsers.push(user);
    return true;
}

function isAllUsersReplied() {
    return repliedUsers.length === playerCnt;
}

function init() {
    for (var i = 0; i < playerCnt; i++) {
        playerList = playerList.concat(copyObject(player));
    }
    gameState = -1;
    startMission();
}

function startMission() {
    dice1 = -1;
    dice2 = -1;

    getAvailBets();

    // start game
    ServerCommService.send(
        MESSAGE_TYPE.SC_START_GAME,
        {
            availableBets: availableBets,
        },
        [0],
    );
}

function askUser() {
    trace("ask user to claim put stone : " + turn);
    // ServerCommService.send(
    //     MESSAGE_TYPE.SC_DO_MUS_CLAIM,
    //     { user, round_count: this.round_count, dealer: this.dealer },
    //     user
    // );
    var random = Math.floor(Math.random() * availAreas.length);
    TimeoutManager.setNextTimeout(function () {
        clickMouse({ x: availAreas[random][0], y: availAreas[random][1], turn: turn }, 1);
    });
}

// roll the dices
function rollDices(data, room) {
    var user = data.user;
    console.log("new", data.new_betList);
    // var temp_betList = [];
    // for (var j = 0; j < playerList[0].betList.length; j++) {
    //     if (playerList[0].betList[j].betSuccess === 0) {
    //         temp_betList.push(copyObject(playerList[0].betList[j]));
    //     }
    // }
    // for (var i = 0; i < data.new_betList.length; i++) {
        // var flag = false;
        // for (var j = 0; j < temp_betList.length; j++) {
        //     if (temp_betList[j].betSuccess === 0) {
        //         if (temp_betList[j].betId === data.betList[i].betId) {
        //             if ([5, 6, 16, 17].includes(temp_betList[j].betId)) {
        //                 if (temp_betList[j].contract === data.betList[i].contract) {
        //                     temp_betList[j].betAmount += data.betList[i].betAmount;
        //                     flag = true;
        //                 }
        //             } else {
        //                 // var tbetItem = {
        //                 //     betId: data.betList[i].betId,
        //                 //     betAmount: temp_betList[j].betAmount + data.betList[i].betAmount,
        //                 //     betSuccess: temp_betList[j].betSuccess,
        //                 //     contract: temp_betList[j].contract,
        //                 //     limit: temp_betList[j].limit,
        //                 // }
        //                 // temp_betList.push(copyObject(tbetItem));
        //                 temp_betList[j].betAmount += data.betList[i].betAmount;
        //                 flag = true;
        //             }

        //         }
        //     }
        // }
        // if (!flag) {
        //     temp_betList.push(copyObject(data.betList[i]));
        // }
        // playerList[0].coins -= data.new_betList[i].betAmount;
    // }
    playerList[0].coins = data.coins;
    playerList[0].betList = copyObject(data.betList);
    console.log("player", playerList[0]);
    dice1 = Math.floor(Math.random() * 6 + 1);
    dice2 = Math.floor(Math.random() * 6 + 1);
    var sum = dice1 + dice2;
    evalCoins();
    if (gameState === -1) {
        if (POINTS.includes(sum)) {
            gameState = sum;
        }
    } else {
        if (gameState === sum) {
            gameState = -1;
        } else if (sum === 7) {
            gameState = -1;
        }
    }
    console.log("gameState", gameState);
    getAvailBets();
    ServerCommService.send(
        MESSAGE_TYPE.SC_ROLL_RESULT,
        {
            dice1: dice1,
            dice2: dice2,
            player: playerList[0],
            gameState: gameState,
            availableBets: availableBets,
            availableComes: availableComes,
            availableDComes: availableDComes,
        },
        [0]
    )
}

function evalCoins() {
    var sum = dice1 + dice2;
    var result = 0;
    playerList[0].betList.forEach(function (betItem, i) {
        switch (betItem.betId) {
            case BET_LIST[0].id:
                if (gameState === -1) {
                    if ([7, 11].includes(sum)) {
                        result += BET_LIST[0].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if ([2, 3, 12].includes(sum)) {
                        betItem.betSuccess = -1;
                    }
                } else {
                    if (gameState === sum) {
                        result += BET_LIST[0].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if (7 === sum) {
                        betItem.betSuccess = -1;
                    }
                }
                break;
            case BET_LIST[1].id:
                if (gameState === -1) {
                    if ([2, 3].includes(sum)) {
                        result += BET_LIST[1].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if ([7, 11].includes(sum)) {
                        betItem.betSuccess = -1;
                    } else if (12 === sum) {
                        result += betItem.betAmount;
                        betItem.betSuccess = 1;
                    }
                } else {
                    if (7 === sum) {
                        result += BET_LIST[1].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if (gameState === sum) {
                        betItem.betSuccess = -1;
                    }
                }
                break;
            case BET_LIST[2].id:
                if (betItem.contract === 0) {
                    if ([7, 11].includes(sum)) {
                        result += BET_LIST[2].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if ([2, 3, 12].includes(sum)) {
                        betItem.betSuccess = -1;
                    } else if (POINTS.includes(sum)) {
                        betItem.contract = sum;
                    }
                } else {
                    if (betItem.contract === sum) {
                        result += BET_LIST[2].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if (7 === sum) {
                        betItem.betSuccess = -1;
                    }
                }
                break;
            case BET_LIST[3].id:
                if (betItem.contract === 0) {
                    if ([2, 3].includes(sum)) {
                        result += BET_LIST[3].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if ([7, 11].includes(sum)) {
                        betItem.betSuccess = -1;
                    } else if (12 === sum) {
                        result += betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if (POINTS.includes(sum)) {
                        betItem.contract = sum;
                    }
                } else {
                    if (7 === sum) {
                        result += BET_LIST[3].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else if (betItem.contract === sum) {
                        betItem.betSuccess = -1;
                    }
                }
                break;
            case BET_LIST[4].id:
                if (gameState === sum) {
                    if ([6, 8].includes(gameState)) {
                        result += BET_LIST[4].pay_rate[0] * betItem.betAmount;
                    } else if ([5, 9].includes(gameState)) {
                        result += BET_LIST[4].pay_rate[1] * betItem.betAmount;
                    } else if ([4, 10].includes(gameState)) {
                        result += BET_LIST[4].pay_rate[2] * betItem.betAmount;
                    }
                    betItem.betSuccess = 1;
                } else if (7 === sum) {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[5].id:
                if (gameState !== -1) {
                    if (betItem.contract === sum) {
                        if ([6, 8].includes(betItem.contract)) {
                            result += BET_LIST[5].pay_rate[0] * betItem.betAmount;
                        } else if ([5, 9].includes(betItem.contract)) {
                            result += BET_LIST[5].pay_rate[1] * betItem.betAmount;
                        } else if ([4, 10].includes(betItem.contract)) {
                            result += BET_LIST[5].pay_rate[2] * betItem.betAmount;
                        }
                        betItem.betSuccess = 1;
                    } else if (7 === sum) {
                        betItem.betSuccess = -1;
                    }
                }
                break;
            case BET_LIST[6].id:
                if (gameState !== -1) {
                    if (betItem.contract === sum) {
                        if ([6, 8].includes(betItem.contract)) {
                            result += BET_LIST[6].pay_rate[0] * betItem.betAmount;
                        } else if ([5, 9].includes(betItem.contract)) {
                            result += BET_LIST[6].pay_rate[1] * betItem.betAmount;
                        } else if ([4, 10].includes(betItem.contract)) {
                            result += BET_LIST[6].pay_rate[2] * betItem.betAmount;
                        }
                        betItem.betSuccess = 1;
                    } else if (7 === sum) {
                        betItem.betSuccess = -1;
                    }
                }
                break;
            case BET_LIST[7].id:
                if (6 === sum) {
                    result += BET_LIST[7].pay_rate * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else if (7 === sum) {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[8].id:
                if (8 === sum) {
                    result += BET_LIST[8].pay_rate * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else if (7 === sum) {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[9].id:
                if (6 === sum) {
                    if (dice1 === dice2) {
                        result += BET_LIST[9].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else {
                        betItem.betSuccess = -1;
                    }
                } else if (7 === sum) {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[10].id:
                if (8 === sum) {
                    if (dice1 === dice2) {
                        result += BET_LIST[10].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else {
                        betItem.betSuccess = -1;
                    }
                } else if (7 === sum) {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[11].id:
                if (4 === sum) {
                    if (dice1 === dice2) {
                        result += BET_LIST[11].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else {
                        betItem.betSuccess = -1;
                    }
                } else if (7 === sum) {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[12].id:
                if (10 === sum) {
                    if (dice1 === dice2) {
                        result += BET_LIST[12].pay_rate * betItem.betAmount;
                        betItem.betSuccess = 1;
                    } else {
                        betItem.betSuccess = -1;
                    }
                } else if (7 === sum) {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[13].id:
                if (gameState === sum) {
                    betItem.betSuccess = -1;
                } else if (7 === sum) {
                    if ([6, 8].includes(gameState)) {
                        result += BET_LIST[13].pay_rate[0] * betItem.betAmount;
                    } else if ([5, 9].includes(gameState)) {
                        result += BET_LIST[13].pay_rate[1] * betItem.betAmount;
                    } else if ([4, 10].includes(gameState)) {
                        result += BET_LIST[13].pay_rate[2] * betItem.betAmount;
                    }
                    betItem.betSuccess = 1;
                }
                break;
            case BET_LIST[14].id:
                if (betItem.contract === sum) {
                    if ([6, 8].includes(betItem.contract)) {
                        result += BET_LIST[14].pay_rate[0] * betItem.betAmount;
                    } else if ([5, 9].includes(betItem.contract)) {
                        result += BET_LIST[14].pay_rate[1] * betItem.betAmount;
                    } else if ([4, 10].includes(betItem.contract)) {
                        result += BET_LIST[14].pay_rate[2] * betItem.betAmount;
                    }
                    betItem.betSuccess = 1;
                } else if (7 === sum) {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[15].id:
                if (betItem.contract === sum) {
                    betItem.betSuccess = -1;
                } else if (7 === sum) {
                    if ([6, 8].includes(betItem.contract)) {
                        result += BET_LIST[15].pay_rate[0] * betItem.betAmount;
                    } else if ([5, 9].includes(betItem.contract)) {
                        result += BET_LIST[15].pay_rate[1] * betItem.betAmount;
                    } else if ([4, 10].includes(betItem.contract)) {
                        result += BET_LIST[15].pay_rate[2] * betItem.betAmount;
                    }
                    betItem.betSuccess = 1;
                }
                break;
            case BET_LIST[16].id:
                if (gameState !== -1) {
                    if (betItem.contract === sum) {
                        betItem.betSuccess = -1;
                    } else if (7 === sum) {
                        if ([6, 8].includes(betItem.contract)) {
                            result += BET_LIST[16].pay_rate[0] * betItem.betAmount;
                        } else if ([5, 9].includes(betItem.contract)) {
                            result += BET_LIST[16].pay_rate[1] * betItem.betAmount;
                        } else if ([4, 10].includes(betItem.contract)) {
                            result += BET_LIST[16].pay_rate[2] * betItem.betAmount;
                        }
                        betItem.betSuccess = 1;
                    }
                }
                break;
            case BET_LIST[17].id:
                if (gameState !== -1) {
                    if (betItem.contract === sum) {
                        betItem.betSuccess = -1;
                    } else if (7 === sum) {
                        if ([6, 8].includes(betItem.contract)) {
                            result += BET_LIST[17].pay_rate[0] * betItem.betAmount;
                        } else if ([5, 9].includes(betItem.contract)) {
                            result += BET_LIST[17].pay_rate[1] * betItem.betAmount;
                        } else if ([4, 10].includes(betItem.contract)) {
                            result += BET_LIST[17].pay_rate[2] * betItem.betAmount;
                        }
                        betItem.betSuccess = 1;
                    }
                }
                break;
            case BET_LIST[18].id:
                if ([3, 4, 9, 10, 11].includes(sum)) {
                    result += BET_LIST[18].pay_rate[0] * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else if ([2, 12].includes(sum)) {
                    result += BET_LIST[18].pay_rate[1] * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[19].id:
                if (2 === sum) {
                    result += BET_LIST[19].pay_rate * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[20].id:
                if (12 === sum) {
                    result += BET_LIST[20].pay_rate * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[21].id:
                if (3 === sum) {
                    result += BET_LIST[21].pay_rate * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[22].id:
                if (11 === sum) {
                    result += BET_LIST[22].pay_rate * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[23].id:
                if (7 === sum) {
                    result += BET_LIST[23].pay_rate * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[24].id:
                if ([2, 3, 12].includes(sum)) {
                    result += BET_LIST[24].pay_rate * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else {
                    betItem.betSuccess = -1;
                }
                break;
            case BET_LIST[25].id:
                if ([2, 12].includes(sum)) {
                    result += BET_LIST[25].pay_rate[0] * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else if ([3, 11].includes(sum)) {
                    result += BET_LIST[25].pay_rate[1] * betItem.betAmount;
                    betItem.betSuccess = 1;
                } else {
                    betItem.betSuccess = -1;
                }
                break;
        }
    });
    playerList[0].coins += result;
}

function getAvailBets() {
    availableComes = [];
    availableDComes = [];
    availableBets = [18, 19, 20, 21, 22, 23, 24, 5, 6, 16, 17, 9, 10, 11, 12, 25, 7, 8];
    if (gameState === -1) {
        availableBets.push(0, 1);
    } else {
        availableBets.push(2, 3);
        for (var i = 0; i < playerList[0].betList.length; i++) {
            if (playerList[0].betList[i].betSuccess === 0) {
                if (playerList[0].betList[i].betId === 0) {
                    availableBets.push(4);
                } else if (playerList[0].betList[i].betId === 1) {
                    availableBets.push(13);
                } else if (playerList[0].betList[i].betId === 2 && playerList[0].betList[i].contract !== 0) {
                    availableComes.push(playerList[0].betList[i].contract);
                    availableBets.push(14);
                } else if (playerList[0].betList[i].betId === 3 && playerList[0].betList[i].contract !== 0) {
                    availableDComes.push(playerList[0].betList[i].contract);
                    availableBets.push(15);
                }
            }
        }
    }
}

// finish the game or mission
function gameOver() {
    missionEndFlag = 1;
    if (blackStoneNum < whiteStoneNum) {
        missionScore[0] += 1;
    } else if (blackStoneNum > whiteStoneNum) {
        missionScore[1] += 1;
    }
    if (missionScore[0] > 14) {
        // finish the game
        ServerCommService.send(
            MESSAGE_TYPE.SC_END_GAME,
            { blackScore: blackStoneNum, whiteScore: whiteStoneNum, missionScore: missionScore, winner: "white" },
            [-1, 1]
        );
    } else if (missionScore[1] > 14) {
        // finish the game
        ServerCommService.send(
            MESSAGE_TYPE.SC_END_GAME,
            { blackScore: blackStoneNum, whiteScore: whiteStoneNum, missionScore: missionScore, winner: "black" },
            [-1, 1]
        );
    } else {
        // finish the mission
        ServerCommService.send(
            MESSAGE_TYPE.SC_END_MISSION,
            { blackScore: blackStoneNum, whiteScore: whiteStoneNum, missionScore: missionScore },
            [-1, 1]
        );
    }
}

export const ServerCommService = {
    callbackMap: {},
    init() {
        this.callbackMap = {};
    },
    addRequestHandler(messageType, callback) {
        this.callbackMap[messageType] = callback;
    },
    send(messageType, data, users) {

        // TODO: Make fake code here to send message to client side
        // Added timeout bc there are times that UI are not updated properly if we send next message immediately
        // If we move to backend, we can remove this timeout
        setTimeout(function () {
            ClientCommService.onExtensionResponse({
                cmd: messageType,
                params: data,
                users: users,
            });
        }, 100);
    },
    onReceiveMessage(messageType, data, room) {
        const callback = this.callbackMap[messageType];
        trace("S - onReceiveMessage", messageType, data, room);
        if (callback) {
            callback(data, room);
        }
    },
};
ServerCommService.init();

const TimeoutManager = {
    timeoutHandler: null,
    nextAction: null,

    setNextTimeout(callback, timeLimit) {
        this.timeoutHandler = setTimeout(
            function () {
                return callback();
            },
            timeLimit ? timeLimit * 1000 : (TIME_LIMIT) * 1000
        );
    },

    clearNextTimeout() {
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    },
};

export const FakeServer = {
    initHandlers() {
        initHandlers();
    },
    init() {
        init();
    },

    startMission() {
        startMission();
    },
    //ask user to put stone
    askUser() {
        askUser();
    },
    // finish the game or mission
    gameOver() {
        gameOver();
    },
};

FakeServer.initHandlers();
setTimeout(
    function () {
        FakeServer.init();
    },
    2000
);