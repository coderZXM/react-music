import React, {memo, useEffect, useState} from 'react';
import {Button, Form, Input, Modal} from 'antd';
import {LoginDiv} from './styled';
import {PHONE} from './constant';
import {apiLoginInfo} from '../../services/Login';
import {useDispatch, useSelector} from 'react-redux';
import {infoLogin} from '../../store/reducer/homeSlice'

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
  const dispatch = useDispatch();
  /**点击登录方法 */
  const onFinish = (values: any) => {
    const phone = values.phone;
    const password = values.password;
    // apiLoginInfo({phone,password}).then((res)=>{
    //     console.log(res)
    // })
    if (phone == 18531610711 && password == 'zlw1314521') {
      onCancel();
      dispatch(infoLogin())
    }
  };

  /**周期回调 */
  // useEffect(()=>{
  //   hanledLogin(isLogin)

  // },[isLogin])

  return (
    <Modal
      title="账号登录"
      destroyOnClose= {true}
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
          <div className="Title">密码登录</div>
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
          <Form.Item
            name="password"
            className="password"
            rules={[{required: true, message: '密码不能为空'}]}>
            <Input.Password
              placeholder="请输入密码"
              onChange={e => {
                form.setFieldValue('password', e.target.value.trim());
              }}
            />
          </Form.Item>
          <Button className="login" htmlType="submit">
            登录
          </Button>
        </LoginDiv>
      </Form>
    </Modal>
  );
});

export default Login;
