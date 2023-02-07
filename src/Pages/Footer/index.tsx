import React, {memo} from 'react';
import {Footerdiv} from './styled';

const Footer = memo(() => {
  /**鼠标移动 */
  const handleMosue = () => {
    console.log('ssss');
  };

  return (
    <Footerdiv>
      <div className="Fmain">
        <div className="FmainT">
          <div className="dowland">
            <h1>下载QQ音乐客户端</h1>
            <ul>
              <li onMouseMove={handleMosue} style={{marginLeft: '-30px'}}>
                <i className="pc"></i>
                PC版
              </li>
              <li>
                <i className="mac" style={{backgroundPosition: '-92px 0'}}></i>
                <span>Mac版</span>
              </li>
              <li>
                <i className="and" style={{backgroundPosition: '-185px 0'}}></i>
                <span>Android版</span>
              </li>
              <li>
                <i
                  className="ipone"
                  style={{backgroundPosition: '-272px 0'}}></i>
                <span>iPhone版</span>
              </li>
            </ul>
          </div>
          <div className="product">
            <h1>特色产品</h1>
            <ul>
              <li onMouseMove={handleMosue} style={{marginLeft: '-30px'}}>
                <i className="pc" style={{backgroundPosition: '-370px 0'}}></i>
                全民k歌
              </li>
              <li>
                <i className="mac" style={{backgroundPosition: '-463px 0'}}></i>
                <span>银河特效</span>
              </li>
              <li>
                <i className="and" style={{backgroundPosition: '-563px 0'}}></i>
                <span>QPlay</span>
              </li>
              <li>
                <i
                  className="ipone"
                  style={{backgroundPosition: '-650px 0'}}></i>
                <span>Fan直播伴侣</span>
              </li>
            </ul>
          </div>
          <div className="cooperation">
            <h1>合作链接</h1>
            <ul>
              <li>CJ ENM</li>
              <li>腾讯视频</li>
              <li>手机QQ空间</li>
              <li>最新版QQ</li>
              <li>腾讯社交广告</li>
              <li>电脑管家</li>
              <li>QQ浏览器</li>
              <li>腾讯微云</li>
              <li>腾讯云</li>
              <li>企鹅FM</li>
              <li>智能电视网</li>
              <li>当贝市场</li>
              <li>酷我音乐</li>
              <li>酷狗听书</li>
              <li></li>
            </ul>
          </div>
          <div className="open">
            <h1>开放平台</h1>
            <ul>
              <li>QQ音乐开放平台</li>
              <li>腾讯音乐人</li>
              <li>音乐推-歌曲推广</li>
              <li>TME聚星-歌曲定制</li>
            </ul>
          </div>
          <div className="official">
            <h1>TME集团官网</h1>
            <li>腾讯音乐</li>
          </div>
        </div>
        <div className="FmianB">
          <p>
            <span>关于腾讯</span>|<span>About Tencent</span>|
            <span>服务条款</span>|<span>服务条款</span>|
            <span>用户服务协议 </span>|<span>隐私政策 </span>|
            <span>权利声明</span>|<span>广告服务 </span>|<span>腾讯招聘</span>|
            <span>客服中心</span>|<span>网站导航</span>|<span>举报中心</span>
          </p>
          <p>
            <span> Copyright</span>|<span> © 1998 - 2023 </span>|
            <span> Tencent. All Rights Reserved.</span>
          </p>
          <p>
            <span> 腾讯公司</span>|
            <span>版权所有</span>|
            <span>营业执照</span>|
            <span>网络文化经营许可证：</span>|
            <span>粤网文[2020]3396-195号</span>|
            <span>客服电话：4006016666</span>|
            <span>违法与不良信息举报邮箱：tme_musicjubao@tencentmusic.com</span>
          </p>
        </div>
      </div>
    </Footerdiv>
  );
});

export default Footer;
