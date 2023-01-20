// import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import styles from './Signup.module.scss';
// import { Menu } from '../../conponents/Menu';
import emailValidator from 'email-validator';

import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

const Signup = ({ server_host }) => {
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });
    const [user, setUser] = React.useState({ email: '', password: '' });
    const [secondPassword, setSecondPassword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    const router = useRouter('/');

    function changeUser(name, value) {
        setUser({
            ...user,
            [name]: value
        });
    }

    async function signUp() {
        setDisabled(true);
        setMessage('');
        if (!user.email || !user.password || !secondPassword) {
            setMessage('Заполните все поля');
            setDisabled(false);
            return;
        }
        if (secondPassword !== user.password) {
            setMessage('Пароли не совпадают');
            setDisabled(false);
            return;
        }
        if (!emailValidator.validate(user.email)) {
            setMessage('Email не корректный');
            setDisabled(false);
            return;
        }

        const res = await fetch(server_host + '/users/signup', {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        if (data.ok) {
            setMessage('Регистрация прошла успешно. перенаправление в личный кабинет');
            router.push('/');
        } else {
            setDisabled(false);
            setMessage('Ошибка попробуйте другие данные');
        }
    }

    return (
        <>
            <Head>
                <title>signup</title>
            </Head>
            <div className={containerClassName}>
                <div className="flex flex-column align-items-center justify-content-center">
                    <img src={`${contextPath}/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
                    <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                        <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                            <div className="text-center mb-5">
                                <img src={`${contextPath}/demo/images/login/avatar.png`} alt="Image" height="50" className="mb-3" />
                                <div>{message}</div>
                                <div className="text-900 text-3xl font-medium mb-3">Регистрация</div>
                                <span className="text-600 font-medium">Sign in to continue</span>
                            </div>

                            <div>
                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText inputid="email1" type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} onChange={(e) => changeUser('email', e.target.value)} value={user.email} />
                                <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                    Введите пароль
                                </label>
                                <Password inputid="password1" onChange={(e) => changeUser('password', e.target.value)} value={user.password} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>
                                <label htmlFor="password2" className="block text-900 font-medium text-xl mb-2">
                                    Введите пароль
                                </label>
                                <Password inputid="password2" onChange={(e) => setSecondPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                    <div className="flex align-items-center">
                                        <Checkbox inputid="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked)} className="mr-2"></Checkbox>
                                        <label htmlFor="rememberme1">Запомните меня</label>
                                    </div>
                                    <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                        Забыли пароль?
                                    </a>
                                </div>
                                <Button label="Зарегистрироватся" className="w-full p-3 text-xl" onClick={signUp} disabled={disabled}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Signup.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig simple />
        </React.Fragment>
    );
};
export default Signup;
