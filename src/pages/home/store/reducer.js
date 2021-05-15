import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState=fromJS({
    page:1,
    isShow:false,
    topicsData:[],
    listData:[],
    recommendData:[],
    writerData:[]
});

const setGetHome=(action)=>({
    topicsData:fromJS(action.data.topicsData),
    listData:fromJS(action.data.listData),
    recommendData:fromJS(action.data.recommendData),
    writerData:fromJS(action.data.writerData),
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_HOME:
            return state.merge(setGetHome(action));
        case constants.GET_MORE_INFO:
            return state.merge({
                'listData':state.get('listData').concat(action.data),
                'page':action.page
            });
        case constants.CHANGE_SHOW:
            return state.set('isShow',action.value);

        default: return state;
    }
}

export default func; 