import React,{Component} from 'react';
import {
    DownloadWrapper,
    DownloadInfo
} from '../style';

class Downloadapp extends Component{
    render(){
        return (
            <DownloadWrapper>
                <img className='download_pic' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png' alt=''></img>
                <DownloadInfo>
                    <p className='title'>下载简书手机APP &gt;</p>
                    <p className='desc'>随时随地发现和创作内容</p>
                </DownloadInfo>
            </DownloadWrapper>
        );
    }
}

export default Downloadapp;