import React, {useState, useEffect} from 'react';

import {Link, useHistory, useParams, useNavigate, redirect} from 'react-router-dom';
import styles from '../css/MyPage_BoardContent.module.css';
import MyPage_Template from '../components/MyPage_Template';
import axiosInstance from '../axiosConfig';
import { useLocation } from "react-router-dom"

function MyPage_BoardContent() {
    const location = useLocation();
    const navigate = useNavigate();

    const {boardcd} = useParams();
    useEffect(()=>{
        console.log(boardcd);
            
        axiosInstance.get('/yjy/read/' + `${boardcd}`)
        .then(res => {
            navigate(location);
            console.log(res.data);
            localStorage.setItem("cateCd", res.data.cateCd);
            localStorage.setItem("boardTitle", res.data.boardTitle);
            localStorage.setItem("userCd", res.data.userCd);
            localStorage.setItem("boardDt", res.data.boardDt.substring(0,19).replace("T"," "));
            localStorage.setItem("boardView", res.data.boardView);
            localStorage.setItem("boardContent", res.data.boardContent);
            console.log(res.data.boardTitle);
        })
        .catch(err =>{
            if(err.response.status == 500){

            alert('없는 방송국이거나 주소가 잘못되었을 수 있습니다.');
            //console.log('fail');
            }
        })

    },[]);

    return (
    <>
        <MyPage_Template/>

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
                <article className={styles.boardcontent}>
                    <div className={styles.boardcontent1}>
                        <div className={styles.boardcontent2}>  
                            <section className={styles.boardcontent_header}>
                                <a className={styles.category}>test1{localStorage.getItem('cateCd')}</a>
                                <h2 className={styles.title}>{localStorage.getItem('boardTitle')}</h2>
                                <div className={styles.author}>
                                    <div className={styles.author_img}></div>
                                    <div className={styles.author_info}>
                                        <div className={styles.author_nick}>
                                            <p>{localStorage.getItem('userCd')}<em>(narak0605)</em></p>
                                        </div>
                                        <span>{localStorage.getItem('boardDt')}</span>
                                        <span><em>조회</em>{localStorage.getItem('boardView')}</span>
                                    </div>
                                </div>
                            </section>
                            <section className={styles.boardcontent_detail}>
                                <div className={styles.text_box}>
                                {localStorage.getItem('boardContent')}
                                </div>
                            </section>
                        </div>
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

export default MyPage_BoardContent;