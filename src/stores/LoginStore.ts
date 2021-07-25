import { makeAutoObservable, } from "mobx";
import { ForgetPasswordService, LoginService, SendEmialService } from "../services/LoginService";
import { showError, showLoading, showSuccess } from "../components/Message";

enum LoginModel {
  login,
  register,
  forgetPassword
}

class LoginStore {

  public LoginModel: LoginModel = LoginModel.login;

  public loginLoading: boolean = false;

  public registerLoading: boolean = false;

  public findLoading: boolean = false;

  public sending: boolean = false;

  public sendBtnText: string = '获取验证码';

  public countDwon: number = 60;

  private timer: any;

  constructor() {
    makeAutoObservable(this);
  }

  public async login(data: any, success: Function) {
    if (this.loginLoading) {
      return;
    }
    this.loginLoading = true;
    showLoading('登录中...');
    try {
      await new LoginService(data.email, data.password, 999).send();
    } catch (e) {
      this.loginLoading = false;
      showError(e);
      return;
    }
    this.loginLoading = false;
    showSuccess('登录成功！');
    success && success();
  }

  public async register(data: any, success: Function) {
    if (this.registerLoading) {
      return;
    }
    this.registerLoading = true;
    showLoading('注册中...');
    try {
      await new LoginService(data.username, data.email, data.password).send();
    } catch (e) {
      this.registerLoading = false;
      showError(e);
      return;
    }
    this.registerLoading = false;
    showSuccess('注册成功！');
    success && success();
  }


  public async sendEmial(_emial: string) {
    if (this.sending || (this.countDwon < 60 && this.countDwon > 0)) {
      return;
    }
    this.sending = true;

    this.sendBtnText = '发送中...';
    try {
      await new SendEmialService(_emial).send();
    } catch (e) {
      this.sending = false;
      this.sendBtnText = '获取验证码';
      showError(e);
      return;
    }
    this.sending = false;
    showSuccess('发送成功！');
    this.timer = setInterval(() => {
      if (this.countDwon == 0) {
        this.sendBtnText = '获取验证码';
        clearInterval(this.timer);
        return;
      }
      this.countDwon -= 1;
      this.sendBtnText = `${this.countDwon}s`;
    }, 1000);
  }

  public async findPassword(data: any) {
    if (this.findLoading) {
      return;
    }
    this.findLoading = true;
    showLoading('提交中...');
    try {
      await new ForgetPasswordService(data.email, data.captcha, data.password).send();
    } catch (e) {
      this.findLoading = false;
      showError(e);
      return;
    }
    this.findLoading = false;
    showSuccess('密码修改成功！');
    this.LoginModel = LoginModel.login;
  }


  setLoginModel(LoginModel: LoginModel) {
    this.LoginModel = LoginModel;
  }

}

const loginStore = new LoginStore();

export { loginStore, LoginModel };