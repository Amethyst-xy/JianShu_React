import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {
    WriteWrapper
} from './style.js';

class Detail extends Component{
    render(){
        const {loginStatus}=this.props;
        if(loginStatus){
           return (
            <WriteWrapper>
                Please write here
           </WriteWrapper>
           );
        }else{
            return <Redirect to='/login/0'/>
        }
    }
}

const mapState=(state)=>{
    return {
        loginStatus:state.getIn(['login','loginStatus'])
    }
}

export default connect(mapState,null)(Detail);