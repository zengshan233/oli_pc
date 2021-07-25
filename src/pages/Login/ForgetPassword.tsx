import { Form, Input, Button } from 'antd';
import { observer } from 'mobx-react';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { LoginModel, loginStore } from '../../stores/LoginStore';
import './Login.scss';

interface ForgetPasswordProps {
    close: Function;
}


export const ForgetPasswordPage = observer((props: ForgetPasswordProps) => {
    let email: string = '';
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(v) => loginStore.findPassword(v)}
        >

            <Form.Item
                name="email"
                rules={[{ required: true, message: '请输入邮箱地址' }]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="请输入邮箱地址" onChange={(e) => { email = e.target.value }} />
            </Form.Item>
            <div className="captcha">
                <Form.Item
                    className="codeInput"
                    name="captcha"
                    rules={[{ required: true, message: '请输入验证码' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />

                </Form.Item>
                <Button htmlType="submit" className="forget-form-button" onClick={() => { loginStore.sendEmial(email) }}>
                    {loginStore.sendBtnText}
                </Button>
            </div>

            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="最少8位且须包含大小写字母"
                />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className="login-form-button">
                    注册
                </Button>
                <div className="form-wrapper">
                    <div className="toLogin"><span>已有账号？</span><span className="loginLabel" onClick={() => {
                        if (loginStore.registerLoading) return;
                        loginStore.setLoginModel(LoginModel.login)
                    }}> 登录</span></div>
                </div>
            </Form.Item>
        </Form>
    );
});













