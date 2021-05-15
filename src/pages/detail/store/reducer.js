import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState=fromJS({
    data:''
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_DETAIL_DATA:
            return state.set('data',fromJS(action.value));
        default: return state;
    }
}

export default func;