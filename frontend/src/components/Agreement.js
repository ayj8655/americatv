import React, { useState, useEffect } from 'react';
import styles from '../css/Agreement.module.css';
import { Link } from "react-router-dom";

function Agreement() {
    const [allCheck, setAllCheck] = useState(false);
    const [ageCheck, setAgeCheck] = useState(false);
    const [useCheck, setUseCheck] = useState(false);
    const [marketingCheck, setMarketingCheck] = useState(false);

    const allBtnEvent = () => {
        if (allCheck === false) {
            setAllCheck(true);
            setAgeCheck(true);
            setUseCheck(true);
            setMarketingCheck(true);
        } else {
            setAllCheck(false);
            setAgeCheck(false);
            setUseCheck(false);
            setMarketingCheck(false);
        }
    };

    const ageBtnEvent = () => {
        if (ageCheck === false) {
            setAgeCheck(true)
        } else {
            setAgeCheck(false)
        }
    };

    const useBtnEvent = () => {
        if (useCheck === false) {
            setUseCheck(true)
        } else {
            setUseCheck(false)
        }
    };

    const marketingBtnEvent = () => {
        if (marketingCheck === false) {
            setMarketingCheck(true)
        } else {
            setMarketingCheck(false)
        }
    };

    useEffect(() => {
        if (ageCheck === true && useCheck === true && marketingCheck === true) {
            setAllCheck(true)
        } else {
            setAllCheck(false)
        }
    }, [ageCheck, useCheck, marketingCheck])


    return (
        <body>
            <body>
                <div className={styles.membership}>
                    <h1 className={styles.Agreementlogo}><Link to="/main">AmericaTV</Link></h1>
                    <div className={styles.terms_wrap}>
                        <div className={styles.total_agree}>
                            <input type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent} />
                            <label for="all-check">
                                <em>
                                    <i></i>
                                </em>
                                <span>모두 동의합니다.</span>
                            </label>
                            <p>이용약관, 개인정보 수집 및 이용, 처리 위탁에 모두 동의합니다.</p>
                        </div>
                        <ul>
                            <li>
                                <input type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent} />
                                <label for="check1">
                                    <em>
                                        <i></i>
                                    </em>
                                    <span>이용약관 동의</span>
                                    <i>필수</i>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="check2" checked={useCheck} onChange={useBtnEvent} />
                                <label for="check2">
                                    <em>
                                        <i></i>
                                    </em>
                                    <span>개인정보 수집 및 이용 동의</span>
                                    <i>필수</i>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="check3" checked={marketingCheck} onChange={marketingBtnEvent} />
                                <label for="check3">
                                    <em>
                                        <i></i>
                                    </em>
                                    <span>개인정보 처리 위탁 동의</span>
                                    <i>필수</i>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <button><Link to = "/signup">회원가입</Link> </button>
                </div>
            </body>
        </body>
    )
}

export default Agreement