import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MyPage_Template.module.css';

const MyPage_Template = () => {

    return (
        <div>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.inner_header}>
                    <h1>
                        <a href="#" className={styles.icon}></a>
                    </h1>
                    <div className={styles.search_box}>
                        <form>
                            <feildset>
                                <div>
                                    <div className={styles.input_search_box}>
                                        <input type='text' placeholder='방송국 검색'></input>
                                    </div>
                                    <button type='submit' className={styles.btn_search_box}>
                                        <span>통합검색</span>
                                    </button>
                                </div>

                            </feildset>

                        </form>
                    </div>
                    <div className={styles.util}>
                        <button type='button' className={styles.favor}>
                            <span></span>
                        </button>
                        <button type='button' className={styles.on_air}>
                            <span></span>
                        </button>
                        <div className={styles.log_area}>
                            <div className={styles.alarm_area}>
                                <button type='button' className={styles.alarm}>
                                    <span></span>
                                </button>
                            </div>
                            <a href='#' className={styles.nickname}>
                                개고수년<em></em>
                            </a>
                            <div>
                                <span></span>
                                <div></div>
                                <ul></ul>
                                <ul></ul>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </header>
            {/* SideBar */}
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.sidebar_contents}>
                        {/* profile-box article */}
                        <article>
                            <section className={styles.user_box}>
                                <a href='#'>
                                    <div className={styles.user_profile_image}/>
                                </a>
                                <div className={styles.user_info}>
                                    <div className={styles.user_nick}>
                                        <h2>개고수년</h2>
                                    </div>
                                    <span className={styles.user_id}>
                                        @jsm960108
                                    </span>
                                </div>
                            </section>
                            <button type='button' className={styles.write_board}>
                                <span>글쓰기</span>
                            </button>
                            <div className={styles.adm_broadcast}>
                                <a href='#' className={styles.adm_broadcast1}>
                                    <span>방송국관리</span>
                                </a>
                            </div>
                        </article>

                        {/* side_smenu */}
                        <article className={styles.side_menu}>
                            <div className={styles.menu_list}>
                                <h3>
                                    <button type='button'>
                                        <span>VOD</span>
                                    </button>
                                </h3>
                                <ul>
                                    <li>
                                        <a href='#'>
                                            <strong>전체 VOD</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>다시보기</a>
                                    </li>
                                    <li>
                                        <a href='#'>하이라이트</a>
                                    </li>
                                    <li>
                                        <a href='#'>업로드 VOD</a>
                                    </li>
                                    <li>
                                        <a href='#'>업로드 클립</a>
                                    </li>
                                    <li>
                                        <a href='#'>유저 VOD</a>
                                    </li>
                                    <li>
                                        <a href='#'>유저 클립</a>
                                    </li>
                                    <li>
                                        <a href='#'>별풍선 클립</a>
                                    </li>
                                    <li>
                                        <a href='#'>재생목록</a>
                                    </li>
                                    <li>
                                        <a href='#'>Catch</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.menu_list}>
                                <h3>
                                    <button type='button'>
                                        <span>게시판</span>
                                    </button>
                                </h3>
                                <ul>
                                    <li>
                                        <a href='#'>
                                            <strong>전체 게시글</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>일반게시판</a>
                                    </li>
                                    <li>
                                        <a href='#'>방명록</a>
                                    </li>
                                </ul>
                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </div>
    
    );
}

export default MyPage_Template;