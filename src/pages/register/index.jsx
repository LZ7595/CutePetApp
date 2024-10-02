import Nav from '@/components/navbar.jsx';
import { Input, Button, Form } from 'react-vant';
import { Arrow } from '@react-vant/icons'
import { useState } from 'react';
import '@/scss/login.scss';
import { Link } from 'react-router-dom';

const register = () => {
    const [form] = Form.useForm();
    const [sendDisabled, setSendDisabled] = useState(true);
    const [registerBtnDisabled, setRegisterBtnDisabled] = useState(true);
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
        updateRegisterBtnDisabled();
    };

    const changeCode = () => {
        updateRegisterBtnDisabled();
    };

    const updateRegisterBtnDisabled = () => {
        const formValues = form.getFieldsValue();
        const userValid = formValues.username && /^[A-Za-z\d\u4e00-\u9fa5]{6,12}$/.test(formValues.username);
        const phoneValid = formValues.userphone && formValues.userphone.length === 11 && /^1[3456789]\d{9}$/.test(formValues.userphone);
        const codeValid = formValues.code && formValues.code.length === 6 && /^[0-9]{6}$/.test(formValues.code);
        setRegisterBtnDisabled(!(phoneValid && codeValid && userValid));
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
                        <h2>注册</h2>
                    </div>
                    <div className="login-form">
                        <Form
                            form={form}
                            onFinish={onFinish}
                            footer={
                                <Button
                                    block
                                    round
                                    disabled={registerBtnDisabled}
                                    nativeType="submit"
                                    className="login-btn"
                                >
                                    注册
                                </Button>
                            }
                        >
                            <Form.Item
                                className='form-item'
                                name='username'
                            >
                                <Input
                                    placeholder='请输入用户名'
                                    maxLength={16}
                                />
                            </Form.Item>
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
                <Link to={'/login'}><div className='go-register'><span>已注册，去登录</span><Arrow /></div></Link>
            </div>
        </>
    )
}
export default register;