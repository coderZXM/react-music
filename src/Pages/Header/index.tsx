import React, {memo, useState} from 'react';
import {HeaderDIv} from './styled';
import {AudioOutlined} from '@ant-design/icons';
import requests from '../../services/request';
import {Input} from 'antd';
import {useMount} from 'ahooks';
import Login from '../Login/index';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { infoLogin,Logout } from '../../store/reducer/homeSlice';

const {Search} = Input;

const Header = memo(() => {
  /**保存用户切换index */
  const [checkIndex, setCheckIndex] = useState<number>(0);
  /**保存导航栏下标签 */
  const [barindex, setbarIndex] = useState<number>(0);
  /**点击登录弹框 */
  const [loginopen, setLoginopen] = useState<boolean>(false);
  /**保存登录状态 */
  const [login, setLogin] = useState<boolean>(false);
  /**显示图标拓展 */
  const [loginmore, setloginmore] = useState<boolean>(false);
  /**编程式导航 */
  const navigate = useNavigate();
  /**使用reudex */
  const isLogin = useSelector((state :any) => state.home.isLogin);
  /**导入派发方法 */
  const dispatch = useDispatch();

  /**头部选择框 */
  function changeHedercheck() {
    const title = ['音乐馆', '我的音乐', '客户端', '开放平台', 'VIP'];
    const changetitle = (index: number) => {
      return () => {
        setCheckIndex(index);
      };
    };
    return title.map((item, index) => {
      return (
        <li
          key={index}
          className={index === checkIndex ? 'active' : ''}
          onClick={changetitle(index)}>
          {item}
          {item === '客户端' ? (
            <img src={require('@/asstes/img/header/mark_1.png')} />
          ) : (
            ''
          )}
        </li>
      );
    });
  }
  /**头部框下菜单 */
  function hanldenavigationbar() {
    const _title = [
      '首页',
      '歌手',
      '新碟',
      '排行榜',
      '分类菜单',
      '电台',
      'MV',
      '数字专辑',
    ];
    const URL = [
      '/home',
      '/singer',
      '/newdisc',
      '/rankinglist',
      '/classifiedplaylist',
      '/broadcastingstation',
      '/mv',
      '/digitalalbum',
      
    ];

    /**切换修改index */
    const changebarIndex = (bindex: number) => {
      return () => {
        const url = URL.filter((item, index) => bindex === index)[0];
        console.log(url);
        setbarIndex(bindex);
        navigate(url, {
          replace: false,
        });
      };
    };
    return _title.map((item, index) => {
      return (
        <>
          <li
            key={index}
            className={index === barindex ? 'active' : ''}
            onClick={changebarIndex(index)}>
            {item}
          </li>
        </>
      );
    });
  }
  useMount(() => {
    // requests({url: '/top/mv', method: 'get', params: {limit: 10}}).then(res => {
    //   console.log(res);
    // });
  });

  /** 点击登录后操作 */
  const hanleLogin = () => {
    setLoginopen(true);
  };
  /**点击关闭的触发的方法 */
  const handelonCancel = () => {
    setLoginopen(false);
  };
  /**调用子组件的值 */
  const hanledLogin = (value: boolean) => {
    value ? setLogin(true) : setLogin(false);
  };
  /**鼠标移入头像 */
  const onMouseEnter = () => {
    setloginmore(true);
  };
  /**鼠标移出头像 */
  const onMouseLeave = () => {
    setTimeout(() => {
      setloginmore(false);
    }, 2000);
  };
  /**退出登录 */
  const handellogout = () => {
    setLogin(false);
    setloginmore(false);
    dispatch(Logout())
  };
  return (
    <HeaderDIv>
      <div className="mian">
        <div className="mianTop">
          <div className="logo">
            <img src={require('@/asstes/img/header/logo.png')} alt="logo" />
          </div>
          <ul className="changetype">{changeHedercheck()}</ul>
          <div className="search">
            <Search
              placeholder="搜索音乐、MV、歌单、用户"
              allowClear
              style={{width: 220, height: 50}}
            />
          </div>
          <ul className="login">
            {isLogin ? (
              <img
                src={require('@/asstes/img/header/header.jpg')}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            ) : (
              <li className="login1" onClick={hanleLogin}>
                登录
              </li>
            )}
            {loginmore ? (
              <div className="loginmore" onMouseEnter={onMouseEnter}>
                <div className="loginmoreT" style={{flex: '3'}}>
                  <img
                    src={require('@/asstes/img/header/header.jpg')}
                    style={{
                      height: '80px',
                      width: '80px',
                      borderRadius: ' 50%',
                    }}
                  />
                  <span style={{fontSize: '14px'}}>牛爷爷</span>
                </div>
                <div style={{flex: '4'}}>
                  <div style={{display: 'flex', padding: '0 20px'}}>
                    <div style={{flex: '7'}}>
                      <span style={{fontSize: '14px'}}>绿钻豪华版</span> <br />
                      <span
                        style={{fontSize: '10px', color: 'rgb(153,153,153)'}}>
                        开通立即赠送付费音乐包
                      </span>
                    </div>
                    <div className="Button">开通</div>
                  </div>
                  <div style={{display: 'flex', padding: '20px 20px'}}>
                    <div style={{flex: '7'}}>
                      <span style={{fontSize: '14px'}}>付费音乐包</span> <br />
                      <span
                        style={{fontSize: '10px', color: 'rgb(153,153,153)'}}>
                        畅享千万包月曲库
                      </span>
                    </div>
                    <div className="Button">开通</div>
                  </div>
                </div>
                <div style={{flex: '3'}} className="loginmoreB">
                  <div>评论通知</div>
                  <div onClick={handellogout}>退出登录</div>
                </div>
              </div>
            ) : (
              ''
            )}

            <li className="login2">开通vip</li>
            <li className="login3">充值</li>
          </ul>
        </div>
        <div className="mianBottom">
          <ul className="navigationbar">{hanldenavigationbar()}</ul>
        </div>
      </div>
      <Login
        open={loginopen}
        onCancel={handelonCancel}
        hanledLogin={hanledLogin}
      />
    </HeaderDIv>
  );
});

export default Header;
