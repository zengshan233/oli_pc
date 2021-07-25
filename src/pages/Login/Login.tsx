import { Form, Input, Button, Spin } from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { LoginModel, loginStore } from '../../stores/LoginStore';
import './Login.scss';

interface loginProps {
    close: Function;
}

export const LoginPage = (props: loginProps) => {
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(v) => loginStore.login(v, props.close)}
        >
            <Form.Item
                name="email"
                rules={[{ required: true, message: '请输入邮箱地址' }]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="请输入邮箱地址"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="请输入密码"
                />
            </Form.Item>
            <Form.Item>
                <div className="form-wrapper">
                    <a className="login-form-forgot" href="javascript::" onClick={() => {
                        if (loginStore.loginLoading) return;
                        loginStore.setLoginModel(LoginModel.forgetPassword)
                    }}>
                        忘记密码
                    </a>
                    <a className="login-form-register" href="javascript::" onClick={() => {
                        if (loginStore.loginLoading) return;
                        loginStore.setLoginModel(LoginModel.register)
                    }}>注册</a>
                </div>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className="login-form-button">
                    登录
                    {/* <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} /> */}

                </Button>
            </Form.Item>
        </Form>
    );
}













