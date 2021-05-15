import {constants} from './index';
import axios from 'axios';

const getData=(value)=>({
    type:constants.GET_DETAIL_DATA,
    value
});

export const getDataAction=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const action=getData(res.data.data);
            dispatch(action);
        });
    }
}