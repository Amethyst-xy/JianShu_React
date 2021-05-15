import styled from 'styled-components';

export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLft=styled.div`
    width:625px;
    float:left;
    box-sizing:border-box;
    padding-top:30px;
    margin-left:15px;

    img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight=styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper=styled.div`
    overflow:hidden;
    width:625px;
    padding:20px 0 10px 0;
    border-bottom:1px solid #ddd;
`;

export const TopicItem=styled.div`
    height:30px;
    float:left;
    background:#efefef;
    border:1px solid #ddd;
    color:#000;
    border-radius:4px;
    margin-right:20px;
    margin-bottom:10px;
    overflow:hidden;
    font-size:12px;
    padding-right:10px;
    line-height:30px;

    .topic_pic{
        margin-right:10px;
        display:block;
        float:left;
        width:30px;
        height:30px;
    }
`;

export const ListWrapper=styled.div`
    width:625px;
    margin-top:30px;
`;

export const ListItem=styled.div`
    width:625px;
    padding:10px 0 20px 0;
    border-bottom:1px solid #eee;
    overflow:hidden;
    margin-bottom:10px;

    .list_pic{
        display:block;
        width:150px;
        height:100px;
        float:right;
        border-radius:3px;
        margin-top:15px;
    }
    p{
        font-size:14px;
        color:#898989;
        line-height:25px;
    }
`;

export const ListTitle=styled.div` 
    font-size:20px;
    line-height:30px;
    margin-bottom:10px;
    font-weight:bold;
    color:#000;
    text-decoration:none;
`;

export const ListComment=styled.div`
    padding:15px 0 0px 0;
    overflow:hidden;
`;

export const CommentItem=styled.div`
    float:left;
    margin-right:10px;
    font-size:12px;
    color:#999;

    .topic_icon{
        font-size:13px;
        margin-right:4px;
    }
    .last_icon{
        font-size:11px;
    }
`;

export const RecommendWrapper=styled.div`
    width:280px;
    padding:10px 0 10px 0;
`;

export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
    margin-bottom:6px;
`;

export const DownloadWrapper=styled.div`
    width:280px;
    height:80px;
    padding:10px 22px;
    box-sizing:border-box;
    border:1px solid #eee;
    border-radius:6px;
    margin-bottom:30px;

    .download_pic{
        vertical-align:middle;
        width:60px;
        height:60px;
    }
`;

export const DownloadInfo=styled.div`
    width:164px;
    margin-left:10px;
    vertical-align:middle;
    display:inline-block;

    .title{
        color:#333;
        margin-bottom:8px;
    }
    .desc{
        font-size:13px;
        color:#787878;
    }
`;

export const WriterWrapper=styled.div`
    width:280px;
    padding:10px 0 10px 0;
    box-sizing:border-box;
`;

export const RecommendAuthor=styled.div`
    overflow:hidden;
    color:#969696;
    margin-bottom:10px;

    .title{
        font-size:14px;
        float:left;
    }
    .switch{
        font-size:13px;
        float:right;

        .switch_icon{
            font-size:13px;
            margin-right:5px;
        }
    }
`;

export const AuthorList=styled.div`
    width:280px;
    padding:10px 0 10px 0;
    box-sizing:border-box;

    img{
        width:48px;
        height:48px;
        border-radius:50%;
        vertical-align:middle;
    }

    .attend{
        width:45px;
        font-size:13px;
        color:#42c02e;
        float:right;
        margin-top:15px;

        .add_icon{
            font-size:12px;
            margin-right:3px;
        }
    }
`;

export const AuthorItem=styled.div`
    width:280px;
    margin-bottom:15px;
`;

export const ItemInfo=styled.div`
    width:177px;
    margin-left:10px;
    vertical-align:middle;
    display:inline-block;

    .title{
        color:#333;
        margin-bottom:8px;
    }
    .desc{
        font-size:12px;
        color:#787878;
    }
`;

export const ScanAll=styled.div`
    width:278px;
    height:34px;
    background:#f7f7f7;
    color:#787878;
    border:1px solid #dcdcdc;
    font-size:13px;
    line-height:34px;
    text-align:center;
    border-radius:4px;
`;

export const LoadMore=styled.div`
    width:625px;
    height:40px;
    padding:10px 15px;
    box-sizing:border-box;
    margin:30px 0 60px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    font-size:15px;
    color:#fff;
    line-height:20px;
    cursor:pointer;
`;

export const BackTop=styled.div`
    width:40px;
    height:40px;
    line-height:40px;
    text-align:center;
    background:#eee;
    border:1px solid #ddd;
    border-radius:4px;
    position:fixed;
    right:100px;
    bottom:100px;
    font-size:14px;
    color:#333;
    cursor:pointer;
`;