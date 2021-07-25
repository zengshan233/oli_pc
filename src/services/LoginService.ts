import { Ajax } from '../utils/http';
import { LocalStorageService } from '../utils/storage';

export class LoginService {
    private email: string;
    private password: string;
    private validityday: number;
    constructor(_emal: string, _password: string, _validityday: number) {
        this.email = _emal;
        this.password = _password;
        this.validityday = _validityday;
    }

    public async send() {
        let response: UserInfo;
        let data = {
            email: this.email,
            password: this.password,
            validityday: this.validityday
        }
        try {
            response = await new Ajax<UserInfo>('/login/emailLogin', data).post();
        } catch (e) {
            throw e;
        }
        LocalStorageService.set('token', response.token);
    }
}
export class RegisterService {
    private username: string;
    private email: string;
    private password: string;
    constructor(_username: string, _emal: string, _password: string, _validityday: number) {
        this.email = _emal;
        this.password = _password;
        this.username = _username;
    }

    public async send() {
        let data = {
            username: this.username,
            email: this.email,
            password: this.password,
        }
        try {
            await new Ajax('/login/register', data).post();
        } catch (e) {
            throw e;
        }
    }
}

export class SendEmialService {
    private email: string;
    constructor(_emal: string) {
        this.email = _emal;
    }
    public async send() {
        let data = {
            email: this.email,
        }
        try {
            await new Ajax('/login/sendEmail', data).post();
        } catch (e) {
            throw e;
        }
    }
}

export class ForgetPasswordService {
    private email: string;
    private captcha: string;
    private password: string;
    constructor(_emal: string, _captcha: string, _password: string) {
        this.email = _emal;
        this.captcha = _captcha;
        this.password = _password;
    }
    public async send() {
        let data = {
            email: this.email,
            captcha: this.captcha,
            password: this.password,
            confirmpassword: this.password,
        }
        try {
            await new Ajax('/login/forGetPwd', data).post();
        } catch (e) {
            throw e;
        }
    }
}

export interface UserInfo {
    id: string;
    group_id: string;
    level: string;
    phone: string;
    email: string;
    avatar: string;
    userusername: string;
    sex: string;
    profile: string;
    birthday: string;
    collectcount: string;
    likecount: string;
    isdelete: string;
    chatnotice: string;
    customerservicenotice: string;
    systemnotice: string;
    deviceid: string;
    createtime: string;
    expiretime: string;
    token: string;
    rongyuUserid: string;
    rongyuToken: string;
}

