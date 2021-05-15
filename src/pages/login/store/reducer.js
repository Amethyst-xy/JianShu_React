import {constants} from './index';
import {fromJS} from 'immutable';
const defaultState=fromJS({
    loginStatus:false
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.HANDLE_LOGIN:
            return state.set('loginStatus',action.value);
        case constants.HANDLE_LOGOUT:
            return state.set('loginStatus',false);
        default:return state;
    }
}

export default func;