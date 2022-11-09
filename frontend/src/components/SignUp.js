import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Signup.module.css';
import axiosInstance from '../axiosConfig';
import axios from 'axios'


function Join() {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userNick, setUserNick] = useState("");
    const [userBirth, setUserBirth] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    const [userIdError, setUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [userNickError, setUserNickError] = useState(false);
    const [userBirthError, setUserBirthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setphoneNumberError] = useState(false);
    const [userIdConfirm, setuserIdConfirm] = useState(false);

    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
        else setUserIdError(true);
        setUserId(e.target.value);
    };
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value)
    };

    const onChangeUserBirth = (e) => {
        const BirthRegex = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        if (!e.target.value || BirthRegex.test(e.target.value)) setUserBirthError(false);
        else setUserBirthError(true);
        setUserBirth(e.target.value);
    }

    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const onChangePhoneNumber = (e) => {
        const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (!e.target.value || regPhone.test(e.target.value)) setphoneNumberError(false);
        else setphoneNumberError(true);
        setphoneNumber(e.target.value);
    }

    const validation = () => {
        if (!userId) setUserIdError(true);
        if (!password) setPasswordError(true);
        if (!confirmPassword) setConfirmPasswordError(true);
        if (!userName) setUserNameError(true);
        if (!userBirth) setUserBirthError(true);
        if (!email) setEmailError(true);
        if (!phoneNumber) setphoneNumberError(true);
        if (!userIdConfirm) setuserIdConfirm(true);

        if (userId && password && confirmPassword && userName && email && phoneNumber && userIdConfirm) {
            console.log("true");
            return true;
        }
        else {
            console.log("false");
            return false;
        }
    }

    const idConfirm = () =>{
        axios.get('/ayj/pass/confirmId/'+`${userId}`)
        .then(res => {
            
        })
        .catch(err => {

        })
    }

    const onSubmit = () => {
        if (validation()) { // true 일 때 ,
        console.log(userId);
        console.log(password);
        console.log(userName);
        console.log(userBirth);
        console.log(email);
        console.log(phoneNumber);
       axios.post('/ayj/signup', {
            userId:userId,
            userPw:password,
            userNick:"moCoCo",
            userNm:userName,
            userBirth:userBirth,
            userEmail:email,
            userPhone:phoneNumber
        })
        .then(res => {
            console.log("POST SUCCESS");
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })
    // API Call
        }
        else{
            console.log("validation() is not true");
        }
    }

    return (
        
           <>
                <div className='SignupLogo'>
                    <h2><Link to="/" className="signup_link_main">America TV</Link></h2>
                </div>
                <div>
                    <Container className="panel">
                        <Form>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={20} placeholder="아이디" value={userId} onChange={onChangeUserId} />
                                    {userIdError && <div className="invalid-input">최고 5글자 이상 영문자와 숫자로만 이루어지게 해주세요.</div>}
                                </Col>
                                <input type='button' value="중복확인" onClick={idConfirm}></input>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={20} type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
                                    {passwordError && <div className="invalid-input">문자, 숫자를 조합하여 8자 이상으로 입력해주세요. </div>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={20} type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onChangeConfirmPassword} />
                                    {confirmPasswordError && <div className="invalid-input">비밀번호가 맞지 않습니다.</div>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={20} placeholder="이름" value={userName} onChange={onChangeUserName} />
                                    {userNameError && <div class="invalid-input">Required.</div>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={50} type="input" placeholder="생년월일" value={userBirth} onChange={onChangeUserBirth} />
                                    {userBirthError && <div class="invalid-input">생년월일 형태가 아닙니다.</div>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={50} type="input" placeholder="이메일" value={email} onChange={onChangeEmail} />
                                    {emailError && <div className="invalid-input">올바른 이메일 형태가 아닙니다.</div>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={50} type="input" placeholder="휴대폰" value={phoneNumber} onChange={onChangePhoneNumber} />
                                    {phoneNumberError && <div className="invalid-input">잘못된 형식의 번호입니다.</div>}
                                </Col>
                            </Form.Group>
                            <br />
                            <div className="d-grid gap-1">
                                <Button variant="secondary" onClick={onSubmit}>
                                    회원가입
                                </Button>
                            </div>
                        </Form>
                        <br />
                        <span className="text">기존 계정이 존재하나요? <Link to="/login" className="link">Sign In</Link></span>
                    </Container>
                </div>
                </>
    );
}

export default Join