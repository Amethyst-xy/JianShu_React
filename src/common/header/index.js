import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';

import {actionCreator as loginActionCreator} from '../../pages/login/store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    Item,
    SearchBox,
    SearchInfo,
    SearchHot,
    SearchSwitch,
    SearchInfoItem,
    ItemRight,
    Addition,
    SearchWrapper
} from './style';

class Header extends Component{
    showSearchInfo(){
        const {focus,list,totalPage,page,mouseIn,left,handleMouseEnter,handleMouseLeave,pageSwitch}=this.props;
        if(focus||mouseIn){
            const dataList=[];
            if(totalPage){
                const newList=list.toJS();

                if(page===totalPage-1 && left){
                    for(let i=page*10;i<page*10+left;i++){
                        dataList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
                    }
                }else{
                    for(let i=page*10;i<page*10+10;i++){
                        dataList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
                    }
                }
            }

            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchHot>
                        热门搜索
                    <SearchSwitch
                        onClick={()=>{
                            pageSwitch(page,totalPage,this.iconSpin);
                        }}
                    >
                        <i ref={(icon)=>{this.iconSpin=icon}} className="iconfont spin">&#xe851;</i>
                        换一批</SearchSwitch>
                    </SearchHot>
                    <div></div>
                    
                    {dataList}
                </SearchInfo>
            );
        }else{
            return null;
        }
    }

    render(){
        const {focus,list,loginStatus,handleFocus,handleBlur,handleLogout}=this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <Link to='/'>
                        <Item className='left active'>首页</Item>
                    </Link>
                    <Item className='left'>下载App</Item>

                    {loginStatus ? <Item className='right' onClick={handleLogout}>退出</Item> : 
                    <Link to='/login/0'><Item className='right'>登录</Item></Link>}

                    <Item className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </Item>
                    <SearchWrapper>
                        <CSSTransition
                            in={focus}
                            timeout={200}
                            classNames='slide'
                        >
                            <SearchBox className={focus? 'focused':''}
                            onFocus={()=>{
                                handleFocus(list);
                            }}
                            
                            onBlur={handleBlur}
                        />
                        </CSSTransition>
                        <i className={focus? 'focus iconfont zoom':'iconfont zoom'}>&#xe614;</i>
    
                        {this.showSearchInfo()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='write'>
                        <ItemRight className='write'>
                            <i className="iconfont">&#xe708;</i>
                            写文章</ItemRight>
                        </Link>
                        <ItemRight className='register'>注册</ItemRight>                      
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        focus:state.getIn(['header','focus']),
        mouseIn:state.getIn(['header','mouseIn']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        left:state.getIn(['header','left']),
        loginStatus:state.getIn(['login','loginStatus'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleFocus(list){
            (list.size===0)&&dispatch(actionCreators.getAjaxAction());
            dispatch(actionCreators.getFocusAction());
        },

        handleBlur(){
            dispatch(actionCreators.getBlurAction());
        },

        handleMouseEnter(){
            dispatch(actionCreators.getMouseEnter());
        },

        handleMouseLeave(){
            dispatch(actionCreators.getMouseLeave());
        },

        pageSwitch(page,totalPage,spin){   
            let originAngle=spin.style.transform.replace(/[^0-9]/gi,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform='rotate('+(originAngle+360)+'deg)';

            dispatch(actionCreators.getSwitchPageAction(page,totalPage));
        },
        handleLogout(){
            const confirm=window.confirm('你确定要退出吗？');
            confirm && dispatch(loginActionCreator.getLogoutAction());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
