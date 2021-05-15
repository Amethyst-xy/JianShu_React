import React,{Component} from 'react';
import Downloadapp from './components/Downloadapp';
import List from './components/List';
import Recommend from './components/Recommend';
import Topics from './components/Topics';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import {
    HomeWrapper,
    HomeLft,
    HomeRight,
    BackTop
} from './style';

const scrollToTop=()=>{
    window.scrollTo(0,0);
}

class Home extends Component{
    render(){
        const {isShow}=this.props;
        return (
            <HomeWrapper>
                <HomeLft>
                    <img src='//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='img'></img>
                    <Topics/>
                    <List/>
                </HomeLft>
                <HomeRight>
                    <Recommend/>
                    <Downloadapp/>
                    <Writer/>
                </HomeRight>
                {isShow ? <BackTop onClick={scrollToTop}>顶部</BackTop> : null}
            </HomeWrapper>
        );
    }

    componentDidMount(){
        this.props.getData();
        this.handleScrollChange();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeShow);
    }

    handleScrollChange(){
        window.addEventListener('scroll',this.props.changeShow);
    }
}

const mapState=(state)=>{
    return {
        isShow:state.getIn(['home','isShow']),
    }
}

const mapDispatch=(dispatch)=>{
    return {
        getData(){
            const action=actionCreator.getTopicAction();
            dispatch(action);
        },
        changeShow(){
            if(document.documentElement.scrollTop>600){
                dispatch(actionCreator.getShowAction(true));
            }else{
                dispatch(actionCreator.getShowAction(false));
            }
        }
    }
}

export default connect(mapState,mapDispatch)(Home);