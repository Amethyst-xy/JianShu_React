import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from '../store';
import {Link} from 'react-router-dom';

import {
    ListWrapper,
    ListItem,
    ListTitle,
    ListComment,
    CommentItem,
    LoadMore
} from '../style';

class List extends Component{
    render(){
        const {list,page,loadMore}=this.props;
        return (
            <ListWrapper>
                {
                    list.map((item,index)=>{
                        return (
                            <Link key={index} to={'/detail/'+item.get('id')} style={{"textDecoration":"none"}}>
                                <ListItem>
                                    <img className='list_pic' src={item.get('src')} alt=''></img>
                                    <ListTitle>{item.get('title')}</ListTitle>
                                    <p>{item.get('desc')}</p>
                                    <ListComment>
                                        <CommentItem><i className='iconfont topic_icon'>&#xe63c;</i>{item.get('dia')}</CommentItem>
                                        <CommentItem>{item.get('auth')}</CommentItem>
                                        <CommentItem><i className='iconfont topic_icon'>&#xe600;</i>{item.get('com')}</CommentItem>
                                        <CommentItem><i className='iconfont topic_icon last_icon'>&#xe601;</i>{item.get('heart')}</CommentItem>
                                    </ListComment>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={()=>{loadMore(page)}}>阅读更多</LoadMore>
            </ListWrapper>
        );
    }
}

const mapState=(state)=>{
    return {
        list:state.getIn(['home','listData']),
        page:state.getIn(['home','page'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        loadMore(page){
            const action=actionCreator.getMoreAction(page);
            dispatch(action);
        }
    }
}

export default connect(mapState,mapDispatch)(List);