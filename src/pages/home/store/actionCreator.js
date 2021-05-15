import {constants} from './index';
import {fromJS} from 'immutable';
import axios from 'axios';

const getTopic=(data)=>({
    type:constants.GET_HOME,
    data
});

const getMoreInfo=(data,page)=>({
    type:constants.GET_MORE_INFO,
    data:fromJS(data),
    page
});

export const getTopicAction=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const action=getTopic(res.data);
            dispatch(action);
        }).catch(()=>alert('error!'));
    }
}

export const getMoreAction=(page)=>{
    return (dispatch)=>{
        axios.get('/api/moreinfo.json?page='+page).then((res)=>{
            const action=getMoreInfo(res.data.data,page+1);
            dispatch(action);
        }).catch(()=>alert('error!'));
    }
}

export const getShowAction=(value)=>({
    type:constants.CHANGE_SHOW,
    value
});