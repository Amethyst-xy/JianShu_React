import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import {withRouter} from 'react-router-dom';
import {
    DetailWrapper,
    DetailContent,
    Header,
    Content
} from './style';

class Detail extends Component{
    render(){
        const {data}=this.props;
        return (
            <DetailWrapper>
                <DetailContent>
                    <Header>戴望舒——在最美的时光里错过</Header>
                    <Content dangerouslySetInnerHTML={{__html:data}}/>
                </DetailContent>
            </DetailWrapper>
        ); 
    }

    componentDidMount(){
        this.props.handleGetData(this.props.match.params.id);
    }
}

const mapState=(state)=>{
    return {
        data:state.getIn(['detail','data']),
        loginStatus:state.getIn(['login','loginStatus'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleGetData(id){
            dispatch(actionCreator.getDataAction(id));
        }
    }
}

export default connect(mapState,mapDispatch)(withRouter(Detail));