import {constants} from './index';
import axios from 'axios';
import {fromJS} from 'immutable';

export const getFocusAction=()=>{
    return {
        type:constants.HANDLE_FOCUS
    }
}

export const getBlurAction=()=>{
    return {
        type:constants.HANDLE_BLUR
    }
}

export const getAjaxAction=()=>{
    return (dispatch)=>{
        axios.get('/api/data.json').then((res)=>{
            const action=handleAjax(res.data.data);
            dispatch(action);
        });
    }
}

export const getMouseEnter=()=>{
    return {
        type:constants.MOUSE_ENTER,
    }
}

export const getMouseLeave=()=>{
    return {
        type:constants.MOUSE_LEAVE,
    }
}

export const getSwitchPageAction=(page,totalPage)=>{
    if(page<totalPage-1){
        return {
            type:constants.SWITCH_PAGE,
            page:page+1
        }
    }else{
        return {
            type:constants.SWITCH_PAGE,
            page:0
        }
    }
}

const handleAjax=(data)=>{
    return {
        type:constants.HANDLE_AJAX,
        data:fromJS(data),
        totalPage:Math.ceil(data.length/10),
        left:data.length%10
    }
}
