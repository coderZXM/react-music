import React, {memo, useEffect, useRef, useState} from 'react';
import {Button, Col, Form, Input, Modal, Row} from 'antd';
import {LoginDiv} from './styled';
import {PHONE} from './constant';
import {setStorageItems} from '../../utils/storageTool';
import {apiLoginInfo} from '../../services/Login';
import {useDispatch, useSelector} from 'react-redux';
import {infoLogin, apiuserInfo} from '../../store/reducer/homeSlice';
import requests from '../../services/request';
import {apiVerification} from '../../services/Login';
import axios from 'axios';
import {useLocalStorageState} from 'ahooks';

interface Props {
  open: boolean; //显示登录
  onCancel: Function; //点击关闭触发方法
  hanledLogin: Function; //判断是否登录
}

const Login = memo((props: Props) => {
  const {open, onCancel, hanledLogin} = props;
  const [form] = Form.useForm();
  /**检测用户是否登录 */
  //const [isLogin,setIsLogin] = useState<boolean>(false)
  /**使用reudex */
  const isLogin = useSelector((state: any) => state.home.isLogin);
  /**导入派发方法 */
  const dispatch: any = useDispatch();
  /**存储倒计时数字 */
  const [count, setcount] = useState<number>(60);
  /**实时记录倒计时数据 */
  const timeref = useRef<any>(null);
  const cutCount = () => {
    setcount(pre => pre - 1);
    // setlike(true);
  };
  /**获取Redux内的数据 */
  const userInfo = useSelector((state: any) => state.home.userInfo);

  function showCode() {
    if (count === 60) {
      return <div style={{color: 'white'}}>获取验证码</div>;
    } else {
      return <div style={{color: 'white'}}>已发送({count})</div>;
    }
  }
  /**点击登录方法 */
  const onFinish = (values: any) => {
    const phone = values.phone;
    const captcha = values.captcha;
    dispatch(apiuserInfo());
    if (userInfo) {
      onCancel();
    }
    setTimeout(() => {
      /**存储token */
      if (userInfo.token) {
        setStorageItems('USER_INFO_CACHE', userInfo.token);
      }
    });
  };

  /**获取验证码 */
  const phone = form.getFieldValue('phone');
  const getVerification = () => {
    cutCount();
    timeref.current = setInterval(cutCount, 1000);
    // let phone = form.getFieldValue('phone')
    //apiVerification(phone)
  };
  /**周期回调-记录倒计时 */
  useEffect(() => {
    if (count === 0) {
      setcount(60);
      clearInterval(timeref.current);
    }
  }, [count]);

  /**周期回调 */
  useEffect(() => {}, []);

  return (
    <Modal
      title="账号登录"
      destroyOnClose={true}
      centered
      open={open}
      footer={[]}
      // onOk={() => form.resetFields()}
      onCancel={() => {
        onCancel();
        form.resetFields();
      }}
      maskClosable={false}
      width={600}
      style={{height: '400px', top: '-45px'}}
      //getContainer
    >
      <Form form={form} onFinish={onFinish}>
        <LoginDiv className="LoginDiv">
          <div className="Title">验证码登录</div>
          <div>
            推荐使用<a>快捷登录</a>，防止盗号。
          </div>
          <Form.Item
            name="phone"
            className="username"
            rules={[
              {required: true, message: '手机号不能为空'},
              {pattern: new RegExp(PHONE), message: '请输入正确的手机号'},
            ]}>
            <Input
              placeholder="支持QQ号/邮箱/手机号登录"
              maxLength={11}
              onChange={e => {
                form.setFieldValue('username', e.target.value.trim());
              }}
            />
          </Form.Item>
          <Row>
            <Col>
              <Form.Item
                className="captcha"
                name="captcha"
                rules={[{required: true, message: '短信验证码不能为空'}]}>
                <Input placeholder="输入验证码" maxLength={4}></Input>
              </Form.Item>
            </Col>
            <Col>
              <Button
                className="verification"
                onClick={getVerification}
                disabled={count === 60 ? false : true}>
                {showCode()}
              </Button>
            </Col>
          </Row>

          <Button className="login" htmlType="submit">
            登录
          </Button>
        </LoginDiv>
      </Form>
    </Modal>
  );
});

export default Login;
