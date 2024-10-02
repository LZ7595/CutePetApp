import Nav from '@/components/navbar.jsx';
import { Input, Button, Form } from 'react-vant';
import { Arrow } from '@react-vant/icons'
import { useState } from 'react';
import '@/scss/login.scss';
import { Link } from 'react-router-dom';

const login = () => {
    const [form] = Form.useForm();
    const [sendDisabled, setSendDisabled] = useState(true);
    const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
    const [countdown, setCountdown] = useState(0);

    const onFinish = values => {
        console.log(values);
    };

    const changePhone = e => {
        if (e.length === 11 && /^1[3456789]\d{9}$/.test(e)) {
            setSendDisabled(false);
        } else {
            setSendDisabled(true);
        }
        updateLoginBtnDisabled();
    };

    const changeCode = () => {
        updateLoginBtnDisabled();
    };

    const updateLoginBtnDisabled = () => {
        const formValues = form.getFieldsValue();
        const phoneValid = formValues.userphone && formValues.userphone.length === 11 && /^1[3456789]\d{9}$/.test(formValues.userphone);
        const codeValid = formValues.code && formValues.code.length === 6 && /^[0-9]{6}$/.test(formValues.code);
        setLoginBtnDisabled(!(phoneValid && codeValid));
    };

    const startCountdown = () => {
        setCountdown(30);
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);
        setTimeout(() => {
            clearInterval(interval);
            setCountdown(0);
        }, 30000);
    };

    return (
        <>
            <div className="login">
                <Nav showLeftArrow = {true} clickLeft />
                <div className="login-body">
                    <div className="login-title">
                        <h2>手机号码登录</h2>
                    </div>
                    <div className="login-form">
                        <Form
                            form={form}
                            onFinish={onFinish}
                            footer={
                                <Button
                                    block
                                    round
                                    disabled={loginBtnDisabled}
                                    nativeType="submit"
                                    className="login-btn"
                                >
                                    登录
                                </Button>
                            }
                        >
                            <Form.Item
                                className='form-item'
                                name='userphone'
                            >
                                <Input
                                    onChange={changePhone}
                                    type='number'
                                    placeholder='请输入手机号'
                                    maxLength={11}
                                />
                            </Form.Item>
                            <Form.Item
                                className='form-item'
                                name='code'
                            >
                                <Input
                                    suffix={
                                        sendDisabled || countdown > 0
                                            ? <Button size="small" className='send-btn' disabled>
                                                {countdown > 0 ? `${countdown}s 后重新获取` : '获取验证码'}
                                            </Button>
                                            : <Button size="small" className='send-btn' disabled={sendDisabled} onClick={startCountdown}>
                                                获取验证码
                                            </Button>
                                    }
                                    onChange={changeCode}
                                    type='number'
                                    placeholder="请输入短信验证码"
                                    maxLength={6}
                                />
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <Link to={'/register'}><div className='go-register'><span>新用户注册</span><Arrow /></div></Link>
                <div className='other-login'>
                    <div className='other-login-title'>其他登录方式</div>
                    <div className='other-login-icon-box'>
                        <svg t="1726732978770" className="other-login-icon" viewBox="0 0 1027 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5264" width="200" height="200"><path d="M582.330848 511.939207a24.637074 24.637074 0 0 0-23.250572 24.210459 24.210458 24.210458 0 0 0 23.250572 21.3308c17.491256 0 30.076428-10.6654 30.076429-21.3308A26.983462 26.983462 0 0 0 582.864118 511.939207z m-76.684227-112.200009a27.73004 27.73004 0 0 0 29.969775-25.383653v-3.73289A27.410078 27.410078 0 0 0 510.339397 341.292805h-4.692776a31.356276 31.356276 0 0 0-34.022626 28.26331v0.959886a31.9962 31.9962 0 0 0 34.022626 29.223197zM514.818865 1.386502a511.299283 511.299283 0 1 0 511.299283 511.192629A511.299283 511.299283 0 0 0 514.818865 1.386502z m-96.628525 640.777241A274.420746 274.420746 0 0 1 335.746797 629.258609l-84.150007 42.6616 24.210458-71.564835A192.617127 192.617127 0 0 1 181.311803 441.227604c0-113.26655 106.654002-199.869599 236.558575-199.869599C533.270008 241.358005 635.657849 309.296604 655.602147 406.245092a114.439744 114.439744 0 0 0-22.503994-2.453042 193.470359 193.470359 0 0 0-200.722831 186.111232v1.279848a198.269789 198.269789 0 0 0 6.719202 50.020727 193.790321 193.790321 0 0 1-20.79753 0.853232z m347.372083 81.803619l16.638024 59.939549-63.245823-35.72909a369.662769 369.662769 0 0 1-71.564835 12.478518A186.644503 186.644503 0 0 1 447.946806 589.05005a186.644503 186.644503 0 0 1 199.442983-171.606288c105.694115 0 200.722831 76.684227 200.722831 171.606288a176.405718 176.405718 0 0 1-82.443543 134.917312zM341.292805 341.292805a32.956086 32.956086 0 0 0-35.835745 29.116542A33.489356 33.489356 0 0 0 341.292805 399.52589a28.583272 28.583272 0 0 0 29.969774-27.303425v-1.813118A28.156656 28.156656 0 0 0 343.852501 341.292805z m372.222465 170.646402a23.99715 23.99715 0 0 0-23.357226 24.210459A25.810268 25.810268 0 1 0 723.434092 511.939207a21.3308 21.3308 0 0 0-10.6654 0z" fill="#1AAB37" p-id="5265"></path></svg>
                        <svg t="1726733321263" className="other-login-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16885" width="200" height="200"><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m222.208 671.13c-2.458 1.638-17.818 2.048-35.02-38.093h-2.868a192.922 192.922 0 0 1-48.538 73.728 102.4 102.4 0 0 1 30.925 11.469c17.203 10.24 31.744 27.852 12.698 46.899-27.034 27.443-130.663 37.888-177.152-10.035h-6.144c-46.49 47.718-150.119 37.478-177.152 10.035-18.842-19.251-4.506-36.66 12.697-46.9a102.4 102.4 0 0 1 30.925-11.468 192.922 192.922 0 0 1-46.899-73.933h-2.253c-17.203 40.96-32.563 39.731-35.02 38.093-11.674-7.987-20.48-52.224-11.47-89.293a328.909 328.909 0 0 1 42.394-90.112 90.726 90.726 0 0 0 12.698-58.368 244.122 244.122 0 0 1 4.505-53.453 176.538 176.538 0 0 1 346.932 0 244.122 244.122 0 0 1 4.505 53.453 89.907 89.907 0 0 0 12.493 58.368 326.451 326.451 0 0 1 43.213 90.726c9.216 37.07 0 81.92-11.469 89.293z" fill="#4DAFEA" p-id="16886"></path></svg>                </div>
                </div>
            </div>
        </>
    );
};

export default login;