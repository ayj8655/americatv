import React, {useState, useEffect} from 'react';

import {Link, useHistory, useParams, useLocation, useNavigate} from 'react-router-dom';
import styles from '../css/MyPage_BoardContent.module.css';
import MyPage_Template from '../components/MyPage_Template';


function MyPage_BoardContent() {

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
                                <a className={styles.category}>자유 게시판</a>
                                <h2 className={styles.title}>권혁락의 게시글</h2>
                                <div className={styles.author}>
                                    <div className={styles.author_img}></div>
                                    <div className={styles.author_info}>
                                        <div className={styles.author_nick}>
                                            <p>리오넬혁시<em>(narak0605)</em></p>
                                        </div>
                                        <span>2022-12-22 22:11:00</span>
                                        <span><em>조회</em>69</span>
                                    </div>
                                </div>
                            </section>
                            <section className={styles.boardcontent_detail}>
                                <div className={styles.text_box}>
                                    안녕하세요. 과대 권혁락입니다.
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