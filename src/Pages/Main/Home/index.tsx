import React, {memo, useState} from 'react';
import {HomeDiv, CutDiv, Contentdiv} from './style';
import {Carousel} from 'antd';
import {apiRecommendedplaylist} from '../../../services/home';
import {useMount} from 'ahooks';
import {getCount} from '../../../utils/format-utils';
import ZkNavigation from '../../../components/ZkNavigation';
import ZkShowMusic from '../../../components/ZkShowMusic';
/**首页 */

const contentStyle: React.CSSProperties = {
  height: '224px',
  width: '224px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  //background: '#364d79',
  border: '1px solid red',
};
/**导航栏数据 */
const Navdata = ['最新', '内地', '港台', '欧美', '韩国', '日本'];
const Home = memo(() => {
  const [barindex, setBarindex] = useState<number>(0);
  /**获取推荐歌单 */
  const [recommendedList, setrecommendedList] = useState<any>();
  /**切换走马灯 */
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  /**是否显示播放 */
  const [playshow, setPlayshow] = useState<boolean>(false);
  /**导航栏菜单 */
  const hanldenavigationbar = () => {
    const title = [
      '为你推荐',
      '经典粤语',
      '网络歌曲',
      '经典',
      '官方歌单',
      '情歌',
    ];
    const changeIndex = (index: number) => {
      return () => {
        setBarindex(index);
      };
    };
    return title.map((item, index) => {
      return (
        <li
          onClick={changeIndex(index)}
          key={index}
          className={barindex === index ? 'active' : ''}>
          {item}
        </li>
      );
    });
  };
  /**周期回调 */
  useMount(() => {
    apiRecommendedplaylist(5).then(res => {
      console.log(res.result);
      setrecommendedList(res.result);
    });
  });
  console.log(recommendedList);
  /**封装走马灯 */
  function changePhoto() {
    if (recommendedList) {
      return recommendedList.map((item: any, index: number) => {
        /**鼠标移入事件 */
        const onMouseEnter = () => {
          setPlayshow(true);
        };
        /**鼠标移出事件 */
        const onMouseLeave = () => {
          setPlayshow(false);
        };
        return (
          <CutDiv
            key={index}
            style={{height: '284px', width: '233px'}}
            className="remocder">
            <div className="imgI" style={{width: '224px', height: '224px'}}>
              <img
                style={{height: '100%', width: '100%', cursor: 'pointer'}}
                src={item.picUrl}
              />
              <div className="play">
                <img src={require('./img/play.png')} />
              </div>
            </div>
            <div
              style={{
                fontSize: '14px',
                margin: '10px 0 5px 0px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {item.name}
            </div>
            <div style={{fontSize: '14px', color: '#999'}}>
              播放量：{getCount(item.playCount)}
            </div>
          </CutDiv>
        );
      });
    }
  }
  /**播放全部 */
  const PlayAll = () => {
    return (
      <div
        style={{
          padding: ' 10px 30px 10px 35px',
          display: 'block',
          fontSize: '14px',
          border: '1px solid #c9c9c9',
          position: 'absolute',
          left: '350px',
          cursor: 'pointer',
        }}>
        <i
          style={{
            width: ' 13px',
            height: '16px',
            backgroundPosition: ' -60px -220px',
          }}>
          {'>'}
        </i>
        播放全部
      </div>
    );
  };
  return (
    <>
      <HomeDiv>
        <h2>歌 单 推 荐</h2>
        <ul>{hanldenavigationbar()}</ul>
        <Carousel afterChange={onChange}>
          <div>{changePhoto()}</div>
          <div>
            <div style={{display: 'flex'}}>{changePhoto()}</div>
          </div>
          <div>
            <div style={{display: 'flex'}}>{changePhoto()}</div>
          </div>
          <div>
            <div style={{display: 'flex'}}>{changePhoto()}</div>
          </div>
        </Carousel>
      </HomeDiv>
      <Contentdiv>
        <h2>新 歌 首 发 </h2>
        <ZkNavigation data={Navdata} Leftsolt={PlayAll} />
        <Carousel afterChange={onChange}>
          <div style={{display: 'flex',flexWrap:'wrap'}}>
            <ZkShowMusic/>
            <ZkShowMusic/>
            <ZkShowMusic/>
            <ZkShowMusic/>
            <ZkShowMusic/>
            <ZkShowMusic/>
            <ZkShowMusic/>
            <ZkShowMusic/>
            <ZkShowMusic/>
          </div>
        </Carousel>
      </Contentdiv>
    </>
  );
});

export default Home;
