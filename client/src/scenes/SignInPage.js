import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useModal } from 'react-brave-modal';

import './SignInPage.css';

import { HOME } from '../constants/routes';

import SubmitButton from '../components/common/SubmitButton';
import TextInput from '../components/common/TextInput';

const SignInPage = ({ signIn }) => {
    const history = useHistory();
    const { showModal } = useModal();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const showErrorModal = (text) => {
        showModal({
            type: 'simple',
            title: 'Oops... Something went wrong!',
            text,
        });
    };

    const handleUserInfoChange = (e) => {
        const currentUserInfo = { ...userInfo };
        currentUserInfo[e.target.name] = e.target.value;
        setUserInfo(currentUserInfo);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        signIn(userInfo).then((signInStatus) => {
            if (signInStatus.success) {
                history.push(HOME);
            } else {
                showErrorModal(signInStatus.error);
            }
        });
    };

    return (
        <div className='sign-in-page'>
            <h1 className='sign-in-page__title'>Sign In</h1>
            <form className='sign-in-page__form' onSubmit={handleSignIn}>
                <TextInput
                    id='email'
                    label='E-mail'
                    value={userInfo.email}
                    placeholder='E-mail'
                    onChange={(e) => handleUserInfoChange(e)}
                />
                <TextInput
                    id='password'
                    label='Password'
                    value={userInfo.password}
                    placeholder='Password'
                    isSecret
                    onChange={(e) => handleUserInfoChange(e)}
                />
                <SubmitButton value='Sign In' />
            </form>
        </div>
    );
};

export default SignInPage;
