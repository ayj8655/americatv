import React, { useState } from 'react';
import styled from 'styled-components';
import TemplateMain from './TemplateMain';
import Checkpw from './Checkpw';
import axiosInstance from '../axiosConfig';

const UserInfo_wrap = styled.div`
    text-align : center;
    margin-top : 80px;
`;

const ConfirmBtn = styled.button``;


function UserInfo(){
    
    let [nick, setNick] = useState(localStorage.getItem('userNick')); 
    const [currentPw, setPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [confirmNewPw, setConfirmNewPw] = useState("");
    let [email, setEmail] = useState(localStorage.getItem('userEmail'));


    const [userNickError, setUserNickError] = useState(false);
    const [currentPwError, setCurrentPwError] = useState(false);
    const [newPwError, setNewPwError] = useState(false);
    const [confirmNewPwError, setConfirmNewPwError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    let userid = localStorage.getItem('userId');
    let flag = localStorage.getItem('flag');
    console.log(flag);

    


    const onChangeUserNick = (e) => {
        const userNickRegex = /^[a-z|0-9|가-힣]{2,}$/;
        if ((!e.target.value || (userNickRegex.test(e.target.value)))) setUserNickError(false);
        else setUserNickError(true);
        setNick(e.target.value);
    };

    const onChangeNewPw = (e) =>{
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setNewPwError(false);
        else setNewPwError(true);

        if (!confirmNewPw || e.target.value === confirmNewPw) setConfirmNewPwError(false);
        else setConfirmNewPwError(true);
        setNewPw(e.target.value);
    }

    const onChangeConfirmNewPw = (e) => {
        if (newPw === e.target.value) setConfirmNewPwError(false);
        else setConfirmNewPwError(true);
        setConfirmNewPw(e.target.value);
    };



    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };



    const validation = () =>{
        if (!nick) setUserNickError(true);
        if (!newPw) setNewPwError(true);
        if (!confirmNewPw) setConfirmNewPwError(true);
        if (!email) setEmail(true);

        if(nick && newPw && confirmNewPw && email){
            axiosInstance.post('/ayj/confirmPw',{
                userId : userid,
                userPW : newPw
            })
            .then(res => {
                console.log("confirmCurrentPW SUCCESS");
                console.log(res.data);
                return true;
            }).catch(err => {
                console.log("confirmCurrentPW FALSE");
                return false;
            })
        }else{
            return false;
        }
    }
    
    const uptMyInfo = () => {
       if(validation()){
        
        axiosInstance.put('/ayj/',{
            userId :  localStorage.getItem('userId'),
            userPw : newPw,
            userNick : nick,
            userEmail : email,
            
        }) 
        .then(res =>{
            console.log("PUT SUCCESS");
            alert("회원정보가 수정되었습니다.");
        })
        .catch(err =>{
            console.log(err);
            
        })
    }else{
       console.log("validation() is not true");
    }
}

    return(
    <>
        <TemplateMain/>
        {flag ? <UserInfo_wrap>
            닉네임 <input type='text' defaultValue={nick} onChange={onChangeUserNick}></input>
            {userNickError && <div className="invalid-input">최소 2글자 이상 문자와 숫자로만 이루어지게 해주세요.</div>}
            <br></br>
            현재 비밀번호 <input type='password'></input><br></br>
            새 비밀번호   <input type='password' value={newPw} onChange={onChangeNewPw}></input>
            {newPwError && <div className="invalid-input">문자, 숫자를 조합하여 8자 이상으로 입력해주세요. </div>}
            <br></br>
            새 비밀번호 확인 <input type='password' value={confirmNewPw} onChange={onChangeConfirmNewPw}></input>
            {confirmNewPwError && <div className="invalid-input">비밀번호가 맞지 않습니다.</div>}
            <br></br>
            이메일 변경<input type='text' defaultValue={email} onChange={onChangeEmail}></input>
            {emailError && <div className="invalid-input">올바른 이메일 형태가 아닙니다.</div>}
            <br></br>
            <ConfirmBtn onClick={uptMyInfo}>변경하기</ConfirmBtn>
        </UserInfo_wrap> : <Checkpw/>} 

    </>
    )
}



export default UserInfo;

