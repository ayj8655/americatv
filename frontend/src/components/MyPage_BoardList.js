import React, {useState, useEffect} from 'react';

import {Link, useHistory, useParams, useLocation, useNavigate} from 'react-router-dom';
import styles from '../css/MyPage_BoardList.module.css';
import MyPage_Template from '../components/MyPage_Template';
import axiosInstance from '../axiosConfig.js'


function MyPage_BoardList() {

    
    
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
                <div className={styles.BoardList_Main}>
                    <h2>게시판</h2>
                </div>

            </div>




            <div className={styles.footer}>
                ⓒ AmericaTV Corp.
            </div>
        </div>
        
    </>
    );
}

export default MyPage_BoardList;