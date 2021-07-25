import { Modal } from 'antd';
import { observer } from 'mobx-react';
import { LoginPage } from './Login';
import { RegisterPage } from './Register';
import { LoginModel, loginStore } from '../../stores/LoginStore';
import './Login.scss';
import { ForgetPasswordPage } from './ForgetPassword';

interface LoginModalProps {
    visible: boolean;
    cancle: Function;
}

export const LoginRegisterModal = observer((props: LoginModalProps) => {
    return (
        <Modal title={loginStore.LoginModel == LoginModel.login ? "登录" : loginStore.LoginModel == LoginModel.register ? "注册" : "忘记密码"} visible={props.visible}
            width={400}
            footer={null}
            centered={true}
            onCancel={() => { props.cancle() }}
        >
            {
                loginStore.LoginModel == LoginModel.login ? <LoginPage close={() => { props.cancle() }} /> :
                    loginStore.LoginModel == LoginModel.register ?
                        <RegisterPage close={() => { props.cancle() }} /> : <ForgetPasswordPage close={() => { props.cancle() }} />}
        </Modal>
    );
})













