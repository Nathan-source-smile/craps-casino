import { ClientCommService } from "./ClientCommService"

export default cc.Class({
    extends: cc.Component,

    properties: {
        // ModalScore: {
        //     default: null,
        //     type: cc.Label,
        // },
        
    },
    onLoad() {
    },

    setText(coin) {
        
    },
    
    onCancelClick(){
        // ClientCommService.cancel();
        this.node.active = false;
    },

    onLeaveClick() {
        // ClientCommService.leave();
        this.node.active = false;
    }

})