import React from 'react';
import '../css/Login.css';
import logo from'../images/logo192.png';

function Login(){
    return (
    <body>
        <div className='main'>
            <h2>America TV</h2>
            <p className='info'>
                로그인 후 이용하실수 있습니다.
            </p>
        <fieldset>   
           <input type='text' placeholder='아이디'></input>
           <input type='text' placeholder='비밀번호'></input>
           <p className='login_btn'>
            <button type='button' className='loginBtn'>로그인</button>
           </p>
        <div className='login_setting'>
           <input type='checkbox'></input> 로그인 상태 유지
           &nbsp;
           <input type='checkbox'></input> 아이디 저장
        </div>

        <div className='account_area'>
           <a href="#">아이디 찾기</a><sapn class='bar'>|</sapn>
           <a href="#">비밀번호 찾기</a><sapn class='bar'>|</sapn>
           <a href="#">회원가입</a>
        </div>

        <div className='signup_area'>
           <a href="#" className='naver'><em></em>네이버로 로그인</a>
           <a href="#" className='kakao'><em></em>카카오로 로그인</a>
           <a href="#" className='apple'><em></em>Apple ID로 로그인</a>
        </div>
        </fieldset>
        </div>
        <footer>
            <ul>
                <li>회사소개</li>
                <li>서비스소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>운영정책</li>
                <li>고객센터</li>
                <li>주요서비스</li>
            </ul>
            <div class="copyright">ⓒ AmericaTV Corp.</div>
        </footer>
    </body>
    );
}

export default Login;