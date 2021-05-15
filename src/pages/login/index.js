import React,{Component} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import {actionCreator} from './store';
import {Redirect} from 'react-router-dom';

import {
    LoginWrapper,
    LogField,
    ButtonArea
} from './style';

class Detail extends Component{
    render(){
        const {loginStatus,handleLogin}=this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LogField>
                        <Input placeholder="Username" 
                            style={{"width":"250px","height":"40px","marginTop":"40px","marginLeft":"75px","marginBottom":"15px"}}
                            ref={(input)=>this.username=input}
                        />
                        <Input placeholder="Password" type="password"
                            style={{"width":"250px","height":"40px","marginLeft":"75px","marginBottom":"15px"}}
                            ref={(input)=>{this.password=input}}
                        />
                        <ButtonArea onClick={()=>{handleLogin(this.username,this.password)}}>登录</ButtonArea>
                    </LogField>
                </LoginWrapper>
            ); 
        }else{
            return <Redirect to='/'/>
        }
    }
}

const mapState=(state)=>{
    return {
        loginStatus:state.getIn(['login','loginStatus'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleLogin(username,password){
            dispatch(actionCreator.getLoginAction(username.state.value,password.state.value))
        }
    }
}

export default connect(mapState,mapDispatch)(Detail);