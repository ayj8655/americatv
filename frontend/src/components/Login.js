import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import styles from '../css/Login.module.css';

function Login() {


    const loginClicked = () => {

        axios.post('/ayj/authenticate', {
                userId: "admin",
                userPw: "admin"
            })
            .then(res => {
                if (!res.data) {
                this.$fire({
                    text: "정보가 일치하지 않습니다",
                    type: "error",
                })
                }
                else {
                    console.log(res);
                }
            })
            .catch(err => {
                console.error(err);
            })
    };

    return (
    <body>
        <div className={styles.main}>
            <h2><Link to="/"></Link></h2>
            <p className={styles.info}>
                로그인 후 이용하실수 있습니다.
            </p>
        <fieldset className={styles.fieldset_wrap}>   
           <input type='text' className={styles.idtxt} placeholder='아이디'></input>
           <input type='text' className={styles.pwtxt} placeholder='비밀번호'></input>
           <p className={styles.login_btn}>
            <button type='button' className={styles.loginBtn} onClick={loginClicked}>로그인</button>
           </p>
        <div className={styles.login_setting}>
           <input type='checkbox' className={styles.cb_login_session}></input> 로그인 상태 유지
           &nbsp;
           <input type='checkbox' className={styles.cb_id_save}></input> 아이디 저장
        </div>

        <div className={styles.account_area}>
           <a href="#">아이디 찾기</a><sapn className={styles.bar}>|</sapn>
           <a href="#">비밀번호 찾기</a><sapn class={styles.bar}>|</sapn>
           <a href="Agreement">회원가입</a>
        </div>

        <div className={styles.signup_area}>
           <a href="#" className={styles.naver}><em></em>네이버로 로그인</a>
           <a href="#" className={styles.kakao}><em></em>카카오로 로그인</a>
           <a href="#" className={styles.apple}><em></em>Apple ID로 로그인</a>
        </div>
        </fieldset>
        </div>
        <footer className={styles.footer}>
            <ul>
                <li>회사소개</li>
                <li>서비스소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>운영정책</li>
                <li>고객센터</li>
                <li>주요서비스</li>
            </ul>
            <div className={styles.copyright}>ⓒ AmericaTV Corp.</div>
        </footer>
    </body>
    );
}

    


export default Login;