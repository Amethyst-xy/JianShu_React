import React,{Component} from 'react';
import {connect} from 'react-redux';

import {
    TopicWrapper,
    TopicItem
} from '../style';

class Topics extends Component{
    render(){
        const {list} =this.props
        return <TopicWrapper>
            {
                list.map((item)=>{
                    return (
                        <TopicItem key={item.get('id')}>
                        <img className='topic_pic' src={item.get('src')} alt=''></img>
                        {item.get('text')}
                        </TopicItem>
                    );
                })
            }
        </TopicWrapper>
    }
}

const mapState=(state)=>{
    return {
        list:state.getIn(['home','topicsData'])
    }
}

export default connect(mapState,null)(Topics);