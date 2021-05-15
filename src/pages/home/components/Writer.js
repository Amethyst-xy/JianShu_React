import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    WriterWrapper,
    RecommendAuthor,
    AuthorList,
    AuthorItem,
    ItemInfo,
    ScanAll
} from '../style';

class Writer extends Component{
    render(){
        const {list}=this.props;
        return (
            <WriterWrapper>
                <RecommendAuthor>
                    <p className='title'>推荐作者</p>
                    <p className='switch'>
                        <i className='iconfont switch_icon'>&#xe851;</i>
                        换一批
                    </p>
                </RecommendAuthor>
                <AuthorList>
                    {
                        list.map((item)=>{
                            return (
                                <AuthorItem key={item.get('id')}>
                                    <img src={item.get('src')} alt=''></img>
                                    <ItemInfo>
                                        <p className='title'>{item.get('author')}</p>
                                        <p className='desc'>写了{item.get('write')}字 · {item.get('like')}喜欢</p>
                                    </ItemInfo>
                                    <p className='attend'>
                                        <i className='iconfont add_icon'>&#xe601;</i>
                                        关注
                                    </p>
                                </AuthorItem>
                            )
                        })
                    }
                </AuthorList>
                <ScanAll>查看全部 &gt;</ScanAll>
            </WriterWrapper>
        );
    }
}

const mapState=(state)=>{
    return {
        list:state.getIn(['home','writerData'])
    }
}

export default connect(mapState,null)(Writer);