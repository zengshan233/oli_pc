import './Header.scss';
import { Link } from 'react-router-dom';
import { LoginRegisterModal } from '../Login/LoginModal';
import { useState } from 'react';

export const Headers = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div className="header">
            <div className="wrapper">
                <div className="logo">
                    <div className="logoInfo">
                        <img src={require('../../images/logo.webp').default} alt="" />
                        <div>
                            <span className="name">OLI VIEW</span>
                            <span className="abstract">Analysis smart, dream big.</span>
                        </div>
                    </div>

                </div>
                <ul className="nav">
                    <li key="top">
                        <Link to={'./index'}>
                            主页
                        </Link>
                    </li>

                    <li key="shehui">
                        <Link to={'./test'}>
                            会员资讯
                            <ul className="subList">
                                <li className="title">
                                    <Link to={'./news'}>
                                        傲利观点
                                    </Link>
                                </li>
                                <li className="title">
                                    <Link to={'./test'}>
                                        傲利视讯
                                    </Link>
                                </li>
                                <li className="title">
                                    <Link to={'./test'}>
                                        傲利研报
                                    </Link>
                                </li>
                            </ul>
                        </Link>
                    </li>

                    <li key="guonei">
                        <Link to={'./test'}>
                            会员服务
                        </Link>
                    </li>

                    <li key="guoji">
                        <Link to={'/aboutUs'}>
                            关于我们
                        </Link>
                    </li>

                    <li key="yule">
                        <img className="login" src={require('../../images/login.svg').default} alt="" onClick={() => {
                            setModalVisible(true);
                        }} />
                        <LoginRegisterModal visible={modalVisible} cancle={() => {setModalVisible(false)}} />
                    </li>
                </ul>

            </div>
        </div>
    )
}