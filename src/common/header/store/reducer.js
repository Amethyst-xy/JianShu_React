import {constants} from './index';

import {fromJS} from 'immutable';

const defaultState=fromJS({
    focus:false,
    mouseIn:false,
    page:0,
    totalPage:0,
    left:0,
    list:[]
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.HANDLE_FOCUS:
            return state.set('focus',true);
        case  constants.HANDLE_BLUR:
            return state.set('focus',false);
        case constants.HANDLE_AJAX:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage,
                left:action.left
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);

        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);

        case constants.SWITCH_PAGE:
            return state.set('page',action.page);
        default: return state;
    }
}

export default func;