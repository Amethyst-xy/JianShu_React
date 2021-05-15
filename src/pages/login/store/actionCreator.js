import {constants} from './index';
import axios from 'axios';

const getLogin=(value)=>({
    type:constants.HANDLE_LOGIN,
    value
});

export const getLoginAction=(username,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?username='+username+'&password='+password).then((res)=>{
            const status=res.data.status;
            if(status){
                dispatch(getLogin(status));
            }else{
                alert('登录失败！');
            }
        }).catch(()=>alert('error!'));
    }
};

export const getLogoutAction=()=>({
    type:constants.HANDLE_LOGOUT
});