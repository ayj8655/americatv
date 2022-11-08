import React, {useState, useEffect} from 'react';
import styles from '../css/MyPage_BoardWrite.module.css';
import MyPage_Template from '../components/MyPage_Template';

const MyPage_BoardWrite = () => {


    
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
                <article className={styles.MainArea}>
                    <div>
                        <form>
                            <input name='_token' type='hidden'/>
                            <input name='_method' type='hidden'/>
                            <input name='mode' type='hidden'/>
                            <input name='title_no' type='hidden'/>
                            <input name='temporary' type='hidden'/>
                            <input name='content' label='내용' type='hidden'/>
                            <div className={styles.select_board}>
                                <div>
                                    <input name='bbs_no' value='-1' type='hidden'/>
                                    <div className={styles.select_box}>
                                        <button type='button' className={styles.selected}>
                                            <span>게시판을 선택해주세요</span>
                                        </button>
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
                                    <textarea className={styles.subject_name} placeholder='제목을 입력해 주세요' rows='1' maxlenght='100'/>
                                </div>
                                <div className={styles.editor_text}>
                                    <section className={styles.editor_header}>
                                    </section>
                                    <textarea className={styles.editor_body}>
                                    </textarea>
                                </div>
                            </div>
                            <div className={styles.confirm_btn_area}>
                                <button className={styles.confirm_btn}>
                                    <span>확인</span>
                                </button>
                            </div>
                        </form>
                    </div>

                </article>
            </div>
        </div>

    </>
    );
}

export default MyPage_BoardWrite;