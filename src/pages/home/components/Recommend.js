import React,{Component} from 'react';
import {connect} from 'react-redux';

import {
    RecommendWrapper,
    RecommendItem,
} from '../style';

class Recommend extends Component{
    render(){
        const {list} =this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item)=>{
                        return <RecommendItem key={item.get('id')} imgUrl={item.get('src')}></RecommendItem>
                    })
                }
            </RecommendWrapper>
        );
    }
}

const mapState=(state)=>{
    return {
        list:state.getIn(['home','recommendData'])
    }
}

export default connect(mapState,null)(Recommend);