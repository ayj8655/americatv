import React, { useRef, useState, useEffect } from 'react';
import styles from '../css/MyPage_BoardWrite.module.css';
import MyPage_Template from '../components/MyPage_Template';
import axiosInstance from '../axiosConfig.js';
import Dropdown from './DropDown';
import axios from 'axios';

function MyPage_BoardWrite(props) {
    const [Title, setTitle] = React.useState("");
    const [Content, setContent] = React.useState("");
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const [CateCd, setCateCD] = React.useState("");

    const ConfirmClicked = () => {
        if (CateCd.length == 0) {
            alert("카테고리를 선택해주세요.");
        } else if (Title.length == 0) {
            alert("제목을 입력해주세요.")
        } else {
            axiosInstance.post('/yjy/post', {
                userCd: localStorage.getItem('userCd'),
                cateCd: CateCd,
                boardTitle: Title,
                boardContent: Content,
            })
                .then(res => {
                    alert("글이 작성되었습니다.")
                })
        }
    };

    const BoardCheck = () => {
        var checkGeneral = document.getElementsByClassName("generalBoard")[0].value;
        // console.log(checkGeneral);
        setCateCD(checkGeneral);
        if (checkGeneral) {
            // console.log(CateCd);
            // alert("일반게시판");
            // console.log(checkGeneral);
            document.getElementsByClassName("generalSpan")[0].style.color = '#4169E1';
            document.getElementsByClassName("GuestSpan")[0].style.color = '#A9A9A9';
        }
    }

    const BoardCheck2 = () => {
        var checkGuestBook = document.getElementsByClassName("GuestBook")[0].value;
        // console.log(checkGuestBook);
        setCateCD(checkGuestBook);
        if (checkGuestBook) {
            // console.log(CateCd);
            // alert("방명록");
            // console.log(checkGuestBook);
            document.getElementsByClassName("GuestSpan")[0].style.color = '#4169E1';
            document.getElementsByClassName("generalSpan")[0].style.color = '#A9A9A9';
        }
    }

    return (

        <>
            <MyPage_Template />

            <div className={styles.container}>
                <div className={styles.contents}>
                    <section>
                        <div className={styles.info}>
                            <div className={styles.info_title}>
                                <div className={styles.title_area}>
                                    <h2>
                                        <a href='/broadcast/:userId'>{localStorage.getItem('broadcastNm')}</a>
                                    </h2>
                                    <div className={styles.info_broadcast}>
                                        <button type='button' tip='방송국 정보'>
                                            <span>방송국 정보</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.btns}>
                                    <button type='button' className={styles.favor}>
                                        <em>즐겨찾기</em>
                                        <span>1</span>
                                    </button>
                                    <button type='button' className={styles.subscribe}>
                                        <em>구독</em>
                                        <span>0</span>
                                    </button>
                                    <button type='button' className={styles.sticker}>
                                        <em>스티커</em>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <article className={styles.MainArea}>
                        <div>
                            <form>
                                <input name='_token' type='hidden' />
                                <input name='_method' type='hidden' />
                                <input name='mode' type='hidden' />
                                <input name='title_no' type='hidden' />
                                <input name='temporary' type='hidden' />
                                <input name='content' label='내용' type='hidden' />
                                <div className={styles.select_board}>
                                    <div>
                                        <input name='bbs_no' value='-1' type='hidden' />
                                        <div className={styles.select_box}>

                                            <button type="button" className={styles.CategoryButton} onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                                                {
                                                    dropdownVisibility
                                                        ? '카테고리를 선택해주세요.'
                                                        : '카테고리를 선택해주세요.'
                                                }
                                            </button>
                                            <Dropdown visibility={dropdownVisibility}>
                                                <ul>
                                                    <li>
                                                        <button type='button' className='generalBoard' onClick={BoardCheck} value='100'>
                                                            <span className='generalSpan'>· 일반게시판</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type='button' className='GuestBook' onClick={BoardCheck2} value='200'>
                                                            <span className='GuestSpan'>· 방명록</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </Dropdown>
                                            <ul>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className={styles.btn_basic}>
                                        <span>임시저장 글</span>
                                    </button>
                                </div>
                                <div className={styles.write_area}>
                                    <div className={styles.subject}>
                                        <textarea className={styles.subject_name} onChange={(e) => { setTitle(e.target.value); }} placeholder='제목을 입력해 주세요' rows='1' maxlenght='100' />
                                    </div>
                                    <div className={styles.editor_text}>
                                        <section className={styles.editor_header}>
                                        </section>
                                        <textarea className={styles.editor_body} onChange={(e) => { setContent(e.target.value); }}>
                                        </textarea>
                                    </div>
                                </div>
                                <div className={styles.confirm_btn_area}>
                                    <div className={styles.confirm_btn} onClick={ConfirmClicked}>
                                        <span>확인</span>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </article>
                </div>
                <div className={styles.footer}>
                    ⓒ AmericaTV Corp.
                </div>
            </div>

        </>
    );
}

export default MyPage_BoardWrite;