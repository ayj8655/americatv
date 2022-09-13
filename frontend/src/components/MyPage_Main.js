import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MyPage_Main.module.css';
import MyPage_Template from '../components/MyPage_Template';

function MyPage_Main(){
    return (
    <>
        <MyPage_Template/>

        <div className={styles.container}>
            <div className={styles.contents}>
                <article className={styles.contents_header}>
                    <section className={styles.wallpapers}></section>
                    <section>
                        <div className={styles.info}>
                            <div className={styles.info_title}>
                                <div className={styles.title_area}>
                                    <h2>
                                        <a href='#'>BJ개고수년</a>
                                    </h2>
                                    <div className={styles.info_broadcast}>
                                        <button type='button' tip='방송국 정보'>
                                            <span>방송국 정보</span>
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.explanation}>
                                    <p>
                                        <span>BJ개고수년님의 방송국 입니다.자기소개를 입력해주세요.</span>
                                    </p>
                                    <button type='button' className={styles.modify}>
                                        <span>수정</span>
                                    </button>
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
                </article>
                <article className={styles.contents_main}>
                    <div>
                        <div>
                            <section className={styles.home}>
                                <div>
                                    <h3 className={styles.icon_vod}>
                                        <a href='#'>
                                            VOD
                                        </a>
                                    </h3>
                                    <section className={styles.vod_area}>
                                        <div className={styles.vod_box_bigger}>
                                            <a href='#' target="_blank" rel="noopener">
                                                <span className={styles.vod_img}>
                                                    <img></img>
                                                    <span className={styles.vod_time}>
                                                        7:02:08
                                                    </span>
                                                </span>
                                                <div className={styles.vod_info}>
                                                    <p className={styles.vod_title}>
                                                        깨박이X종욱X히댕X상윤VS사장X전하X수찬X탱탱 10만개빵 리얼 실화냐 배틀그라운드
                                                    </p>
                                                    <div className={styles.info}>
                                                        <span className={styles.views}>
                                                            <em></em>9,183
                                                        </span>
                                                        <span className={styles.date}>
                                                            2022.08.15
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className={styles.vod_box}>
                                            <a href='#' target="_blank" rel="noopener">
                                                <span className={styles.vod_img}>
                                                    <img></img>
                                                    <span className={styles.vod_time}>
                                                        7:13:52
                                                    </span>
                                                </span>
                                                <div className={styles.vod_info}>
                                                    <p className={styles.vod_title}>
                                                        깨박이 훔.....
                                                    </p>
                                                    <div className={styles.info}>
                                                        <span className={styles.views}>
                                                            <em></em>2,765
                                                        </span>
                                                        <span className={styles.date}>
                                                            2022.09.11
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className={styles.vod_box}>
                                            <a href='#' target="_blank" rel="noopener">
                                                <span className={styles.vod_img}>
                                                    <img></img>
                                                    <span className={styles.vod_time}>
                                                        1:17:02
                                                    </span>
                                                </span>
                                                <div className={styles.vod_info}>
                                                    <p className={styles.vod_title}>
                                                        깨박이 상호 집 놀러갑니다 배틀그라운드
                                                    </p>
                                                    <div className={styles.info}>
                                                        <span className={styles.views}>
                                                            <em></em>2,042
                                                        </span>
                                                        <span className={styles.date}>
                                                            2022.09.10
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </section>
                                </div>
                                <div>
                                    <h3 className={styles.icon_board}>
                                        <a href='#'>
                                            게시글
                                        </a>
                                    </h3>
                                    <div className={styles.board_area}>
                                        <div className={styles.board_box}>
                                            <div className={styles.text_box}>
                                                <div className={styles.author_box}>
                                                    <div className={styles.author_img}></div>
                                                    <button type='button' className={styles.nick}>
                                                        <span>개고수년</span>
                                                    </button>
                                                    <div className={styles.write_info}>
                                                        2022-09-10
                                                        <em>
                                                            조회
                                                            5,976
                                                        </em>
                                                    </div>
                                                </div>
                                                <div className={styles.desc}>
                                                    <a href='#'>
                                                        <strong>토요일</strong>
                                                        <p>추석 차례 지내고 5시에 올게용~~!</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.board_list}>
                                            <ul>
                                                <li className={styles.notice}>
                                                    
                                                </li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        
    </>
    );
}

export default MyPage_Main;