import { MESSAGE_TYPE } from "./Common/Messages";
import { ServerCommService } from "./Common/CommServices";
import { GameScene } from "./GameScene";

export const ClientCommService = {
    onExtensionResponse(event) {
        const messageType = event.cmd;
        const params = event.params;

        // console.log("C - onExtensionResponse", event.cmd, event.params);

        switch (messageType) {
            case MESSAGE_TYPE.SC_START_GAME:
                GameScene.start1(params.availableBets);
                break;
            case MESSAGE_TYPE.SC_ROLL_RESULT:
                GameScene.setRollResult(params.dice1, params.dice2, params.player, params.gameState, params.availableBets, params.availableComes, params.availableDComes);
        }
    },

    send(messageType, data, room) {
        ServerCommService.onReceiveMessage(messageType, data, room);
    },
    

    sendClaimRoll(user, betList, new_betList, coins) {
        this.send(MESSAGE_TYPE.CS_CLAIM_ROLL, { user, betList, new_betList, coins }, 1);
    },

    sendRestartMission() {
        this.send(MESSAGE_TYPE.CS_RESTART_MISSION, {}, 1);
    },

    sendRestartGame() {
        this.send(MESSAGE_TYPE.CS_RESTART_GAME, {}, 1);
    }
};
