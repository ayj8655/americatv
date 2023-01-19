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
    const [newPwError, setNewPwError] = useState(false);
    const [confirmNewPwError, setConfirmNewPwError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const userId = localStorage.getItem('userId');
    let flag = localStorage.getItem('flag');
    //console.log(flag);

    


    const onChangeUserNick = (e) => {
        const userNickRegex = /^[a-z|0-9|가-힣]{2,}$/;
        if ((!e.target.value || (userNickRegex.test(e.target.value)))) setUserNickError(false);
        else setUserNickError(true);
        setNick(e.target.value);
    };

    const onChangeNewPw = (e) =>{
        console.log(e.target.value);
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


    // 1. 코드가 길어져서 좀 귀찮았따, 하나하나 확인해야함

    // 2. if로 분기 다나누고 함수도 비밀번호 공백으로 보내는 함수, 비밀번호 변경해서 보내는 함수 따로 만들기
    const uptMyInfo = () => {
        if(userNickError == false && emailError == false && nick && email){
            if(currentPw.length > 0){ // 현재 비밀번호 값이 있으면 실행
                if(newPw.length == 0){
                    alert("새 비밀번호를 입력하세요.");
                }else if(confirmNewPw.length == 0){
                    alert("새 비밀번호 확인란을 입력하세요.")
                }else{
                        //console.log(currentPw);
                        axiosInstance.post('/ayj/PwComfirm',{
                        userId : userId,
                        userPw : currentPw
                    })
                    .then(res => {
                        //console.log(res.data);
                        if(res.data == 'success'){
                                updtPw();
                        }else{
                            alert("현재 비밀번호가 맞지않습니다.");
                        }
                    }).catch(err => {
                        console.log(err);
                        alert("현재 비밀번호가 맞지않습니다.");
                    })
                }
            }else{ // 비밀번호 수정 안함
                notupdtPw();
            }
        }else{
            alert("닉네임 또는 이메일이 형식에 맞지 않습니다.");
        }

    }
    const updtPw = () =>  {
        if(newPwError == false && confirmNewPwError == false){
            axiosInstance.put('/ayj/',{
                userId :  userId,
                userPw : newPw,
                userNick : nick,
                userEmail : email,
            }) 
            .then(res =>{
                console.log(res.data);
                alert("회원정보가 수정되었습니다.");
                window.location.replace('/');
            })
            .catch(err =>{
                console.log(err);
            })
        }else{
            alert("새 비밀번호와 새 비밀번호 확인이 같지않습니다.");
        }
    }

      const notupdtPw = () =>  {
        if(currentPw.length == 0 && newPw.length == 0 && confirmNewPw.length == 0){
        axiosInstance.put('/ayj/',{
            userId :  userId,
            userPw : "",
            userNick : nick,
            userEmail : email,
        }) 
        .then(res =>{
            console.log(res.data);
            alert("회원정보가 수정되었습니다.");
            window.location.replace('/');
        })
        .catch(err =>{
            console.log(err);
        })
        }else{
            alert("비밀번호 변경을 원하시면 나머지를 입력해주세요.");
        }
    }


    return(
    <>
        <TemplateMain/>
        {flag ? <UserInfo_wrap>
            닉네임 <input type='text' defaultValue={nick} onChange={onChangeUserNick}></input>
            {userNickError && <div className="invalid-input">최소 2글자 이상 문자와 숫자로만 이루어지게 해주세요.</div>}
            <br></br>
            현재 비밀번호 <input type='password' onChange={(e) => setPw(e.target.value)}></input><br></br>
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

