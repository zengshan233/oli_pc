import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { LoginModel, loginStore } from '../../stores/LoginStore';
import './Login.scss';

interface registerProps {
    close: Function;
}


export const RegisterPage = (props: registerProps) => {
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(v) => loginStore.register(v, props.close)}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入姓名' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: '请输入邮箱地址' }]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="请输入邮箱地址" />
            </Form.Item>
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
}













