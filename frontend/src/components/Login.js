import React from 'react';
import { Link, Router, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';
import styles from '../css/Login.module.css';

function Login() {
    //e.preventDefault();
    const[Id, setId] = React.useState("");
    const[Pw, setPw] = React.useState("");
    let navigate = useNavigate();

    const loginClicked = () => {
        if(Id === ""){
            alert("아이디를 입력하세요.");
        }else if(Pw === ""){
            alert("비밀번호를 입력하세요.");
        }else{
        axiosInstance.post('/ayj/authenticate', {
                userId: Id,
                userPw: Pw,
            })
            .then(res => {
                console.log('POST SUCCESS');
                const token = res.data.token;
                localStorage.setItem('access_token', token);
                axiosInstance.get('/ayj/user') // http 통신이라고 보면된다 restapi
                .then(res => {
                    console.log('GET SUCCESS');
                    console.log(res.data);
                    localStorage.setItem('userId', res.data.userId)
                    console.log(res.data.userId);
                    alert(res.data.userId+'님 어서오세요');
                    navigate('/'); 
                })
                
            })
            .catch(err => {
                console.error(err);
                console.log('fail');
                alert('로그인정보가 일치하지않습니다.');
            })
    };
}

    return (
    <>
        <div className={styles.main}>
            <h2><Link to="/"></Link></h2>
            <p className={styles.info}>
                로그인 후 이용하실수 있습니다.
            </p>
        <fieldset className={styles.fieldset_wrap}>   
           <input type='text' className={styles.idtxt} placeholder='아이디' onChange={(e) => {setId(e.target.value);}}></input>
           <input type='password' className={styles.pwtxt} placeholder='비밀번호'onChange={(e) => {setPw(e.target.value);}}></input>
           <p className={styles.login_btn}>
            <button type='button' className={styles.loginBtn} onClick={loginClicked}>로그인</button>
           </p>
        <div className={styles.login_setting}>
           <input type='checkbox' className={styles.cb_login_session}></input> 로그인 상태 유지
           &nbsp;
           <input type='checkbox' className={styles.cb_id_save}></input> 아이디 저장
        </div>

        <div className={styles.account_area}>
           <a href="/">아이디 찾기</a><span className={styles.bar}>|</span>
           <a href="/">비밀번호 찾기</a><span className={styles.bar}>|</span>
           <a href="Agreement">회원가입</a>
        </div>

        <div className={styles.signup_area}>
           <a href="/" className={styles.naver}><em></em>네이버로 로그인</a>
           <a href="/" className={styles.kakao}><em></em>카카오로 로그인</a>
           <a href="/" className={styles.apple}><em></em>Apple ID로 로그인</a>
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
    </>
    );
}

    


export default Login;