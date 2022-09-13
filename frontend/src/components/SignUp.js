import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import '../css/Signup.module.css';

function Join() {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userBirth, setUserBirth] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    const [userIdError, setUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [userBirthError, setUserBirthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setphoneNumberError] = useState(false);

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
        const BirthRegex = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
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

        if (userId && password && confirmPassword && userName && email) return true;
        else return false;
    }

    const onSubmit = (e) => {
        if (validation()) return;

        // API Call
    }

    return (
        <body>
            <form>
                <div className='SignupLogo'>
                    <h2><Link to="/main" className="signup_link_main">America TV</Link></h2>
                </div>
                <div>
                    <Container className="panel">
                        <Form>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={20} placeholder="아이디" value={userId} onChange={onChangeUserId} />
                                    {userIdError && <div class="invalid-input">최고 5글자 이상 영문자와 숫자로만 이루어지게 해주세요.</div>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={20} type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
                                    {passwordError && <div class="invalid-input">문자, 숫자를 조합하여 8자 이상으로 입력해주세요. </div>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={20} type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onChangeConfirmPassword} />
                                    {confirmPasswordError && <div class="invalid-input">비밀번호가 맞지 않습니다.</div>}
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
                                    {emailError && <div class="invalid-input">이메일 형식이 올바르지 않습니다. 다시 확인해주세요.</div>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm>
                                    <Form.Control maxLength={50} type="input" placeholder="휴대폰" value={phoneNumber} onChange={onChangePhoneNumber} />
                                    {phoneNumberError && <div class="invalid-input">잘못된 형식의 번호입니다.</div>}
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
            </form>
        </body>
    );
}

export default Join