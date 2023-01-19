import React, {useState, useEffect} from 'react';
import styles from '../css/MyPage_InfoSetting.module.css';
import MyPage_Template from '../components/MyPage_Template';

function MyPage_InfoSetting() {


    
    return (
    <>
        <MyPage_Template/>

        <div className={styles.container}>
            <div className={styles.contents}>
                <article className={styles.contents_main}>
                    <div className={styles.title}>
                        <h2>방송국 기본 정보 관리</h2>
                    </div>
                    <dl className={styles.tbl_grid}>
                        <dt>방송국 주소</dt>
                        <dd>
                            <div className={styles.col_grid}>
                                <div className={styles.grid_start}>
                                    <input type='text' className={styles.url}/>
                                </div>
                                <div className={styles.grid_end}>
                                    <button type='button' className={styles.btn_basic}>
                                        <span>복사</span>
                                    </button>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <form>
                        <dl className={styles.tbl_grid}>
                            <dt>방송국 이름</dt>
                            <dd>
                                <div className={styles.col_grid}>
                                    <div className={styles.grid_start}>
                                        <input type='text' className={styles.station_name} defaultValue={localStorage.getItem('userNick')}/>
                                    </div>
                                    <div className={styles.grid_end}>
                                        <button type='button' className={styles.btn_basic_blue}>
                                            <span>중복 확인</span>
                                        </button>
                                        <button type='submit' className={styles.btn_basic_blue2}>
                                            <span>저장</span>
                                        </button>
                                    </div>
                                </div>
                                <p className={styles.text}>
                                    방송국 메인에 표시되는 방송국 이름 입니다. 설정하지 않으면 BJ 닉네임이 표시 됩니다.
                                </p>
                            </dd>
                        </dl>
                    </form>
                    <form>
                        <dl className={styles.tbl_grid}>
                            <dt>프로필 이미지</dt>
                            <dd>
                                <div className={styles.profile_upload}>
                                    <div className={styles.profile_img}></div>
                                    <p>BJ와 방송국을 대표하는 프로필 이미지를 설정할 수 있습니다.</p>
                                    <ul>
                                        <li>크기</li>
                                        <li> : jpg, png, gif</li>
                                    </ul>
                                </div>
                                <div className={styles.profile_upload_btn}>
                                    <div className={styles.profile_grid_start}>
                                        <button type='button' className={styles.btn_basic}>
                                            <span>초기화</span>
                                        </button>
                                    </div>
                                    <div className={styles.profile_grid_end}>
                                        <label>이미지 찾기</label>
                                        <button type='submit' className={styles.btn_basic_save}>
                                            <span>저장</span>
                                        </button>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </form>
                    <dl className={styles.tbl_grid}>
                        <form>
                            <dt>프로필 메시지</dt>
                            <dd>
                                <div className={styles.textarea}>
                                    <textarea className={styles.profile_text} placeholder='방문 유저에게 전하고 싶은 이야기를 작성해 보세요.' defaultValue={localStorage.getItem('broadcastMyMessage')} maxLength='150'></textarea>
                                    <input type='text' className={styles.byte} defaultValue='0 / 150'></input>
                                </div>
                            </dd>
                            <div className={styles.profile_upload_btn}>
                                <div className={styles.profile_grid_end}>
                                    <button type='submit' className={styles.btn_basic_save}>
                                        <span>저장</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </dl>

                </article>
            </div>
            <div className={styles.footer}>
                ⓒ AmericaTV Corp.
            </div>
        </div>
    </>
    );
}

export default MyPage_InfoSetting;