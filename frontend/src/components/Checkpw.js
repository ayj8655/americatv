import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../css/checkPW.module.css';
import TemplateMain from './TemplateMain';
import axiosInstance from '../axiosConfig';

function CheckPW(){
    const Id = localStorage.getItem('userId');
    const [Pw, setPw] = useState("");

    let nav = useNavigate();
    const ckPW = () => {
        console.log(Id);
        console.log(Pw);
        axiosInstance.post('/ayj/authenticate', {
            userId: localStorage.getItem('userId'),
            userPw: Pw,
        }).then(res => {
            console.log('POST SUCCESS');
            console.log(res.data);
            localStorage.setItem('flag', true);
            window.location.replace('/userInfo');
        })
        .catch(err => {
            console.error(err);
            console.log('fail');
            alert('비밀번호가 일치하지않습니다.');
        })
    }    

    return(
        <>
        <div className={styles.checkpw_wrap}>
            <h3>비밀번호 재확인</h3>
                <p>
                보안을 위해서 회원님의 비밀번호를 다시한번 입력해주세요.
                개인정보 변경에서는 비밀번호 변경, 주소/전화번호/메일수신여부 등의 정보를 확인, 수정하실 수 있습니다.
                </p>
            <input type='text' className={styles.id} defaultValue={localStorage.getItem('userId')} disabled>
            </input>
            <input type='password' onChange={(e) => setPw(e.target.value)}></input>
            <input type='button' value="확인" onClick={ckPW}></input>
        </div>
        </>
    )
}

export default CheckPW;

