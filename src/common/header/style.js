import styled from 'styled-components';

import LogoUrl from '../../static/jianshu.png';

export const HeaderWrapper=styled.div`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo=styled.a.attrs({
    href:'./'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    height:56px;
    width:100px;
    background:url(${LogoUrl});
    background-size:contain;
`;

export const Nav=styled.div`
    width:945px;
    height:58px;
    margin:0 auto;
    box-sizing:border-box;
    padding-right:80px;
`;

export const Item=styled.div`
    height:58px;
    line-height:58px;
    font-size:17px;
    padding:0 20px;
    color:#333;

    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }

    i{
        font-size:24px;
    }
`;

export const SearchBox=styled.input.attrs({
    placeholder:'搜索',
})`
    &.slide-enter{
        transition:all 0.2s ease-in;
    }
    &.slide-enter-active{
        width:240px;
    }

    &.slide-exit{
        transition:all 0.2s ease-out;
    }
    &slide-exit-active{
        width:160px;
    }

    height:38px;
    width:160px;
    border:none;
    outline:none;
    background:#eee;
    border-radius:40px;
    padding:0 40px 0 20px;
    box-sizing:border-box;
    margin-top:10px;
    margin-left:20px;
    font-size:14px;

    &::placeholder{
        color:#aaa;
    }

    &.focused{
        width:240px;
        color:#666;
    }
`;


export const SearchWrapper=styled.div`
    float:left;
    position:relative;

    .zoom{
        position:absolute;
        bottom:5px;
        right:5px;
        width:30px;
        text-align:center;
        line-height:30px;
        border-radius:50%;
        font-size:22px;

        &.focus{
            background:#999;
        }
    }
`;

export const SearchInfo=styled.div`
    cursor:pointer;
    position:absolute;
    left:0;
    top:58px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px #ccc;
    background:#fff;
`;

export const SearchHot=styled.div`
    margin:15px 0px;
    font-size:14px;
    color:#787878;
    overflow:hidden;
`;

export const SearchSwitch=styled.div`
    float:right;
    font-size:13px;

    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:4px;
        transition:all 0.2s ease-in;
        transform:rotate(0deg);
        transform-origin:center center;
    }
`;

export const SearchInfoItem=styled.a.attrs({
    href:'#'
})`
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
    padding:0 5px;
    border:1px solid #ddd;
    border-radius:3px;
    color:#969696;
    font-size:12px;
    line-height:20px;
    text-decoration:none;
`;

export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
`;

export const ItemRight=styled.div`
    float:right;
    height:38px;
    border:1px solid #ea6f5a;
    line-height:35px;
    padding:0 20px;
    margin-right:20px;
    border-radius:20px;
    box-sizing:border-box;
    color:#ea6f5a;
    margin-top:10px;

    &.write{
        background:#ea6f5a;
        color:#fff;
    }

    i{
        font-size:24px;
    }
`;

