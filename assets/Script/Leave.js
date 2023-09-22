cc.Class({
    extends: cc.Component,

    properties: {
        Modal: {
            default: null,
            type: cc.Node,
        },
        
    },
    onLoad() {
    },

    setText(coin) {
        
    },
    
    onClick(){  
        // ClientCommService.cancel();
        this.Modal.active = true;
        // this.node.active = true;
    },

})