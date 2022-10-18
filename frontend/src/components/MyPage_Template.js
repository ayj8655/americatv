import React from 'react';
import { Link } from 'react-router-dom';
import { ReactElement, useState, useRef } from 'react';
import styles from '../css/MyPage_Template.module.css';

function MyPage_Template(){

    const [closeList, setCloseList] = useState(false); // 열고접는 스위치역할
    console.log(closeList);
    const listRef = useRef(null); 	      // useRef 로 특정 DOM 에 접근
    const listRef1 = useRef(null);

    // 클릭시 실행되는 함수
    const foldList = () => {
        if (!listRef || !listRef.current) {             // useRef 변수가 비었을 때
            return;		                   		        // 그냥 리턴하도록 예외처리
        }

        const style = listRef.current.style;  // 접근할 DOM 요소의 스타일 속성을 미리 선언

        if (closeList) {			  // closeAllList 상태변수가 true 일 때 
            style.maxHeight = '0'; 	  	  // maxHeight 는 0이 되고 접힘
        } else if (!closeList) {	  	  // closeAllList 상태변수가 false
            style.maxHeight =
                `${listRef.current.scrollHeight}px`; // maxHeight = scroll 길이가 되고 메뉴가 열림
        }
        setCloseList(!closeList);		  // 클릭할 때마다 상태를 반대로 바꿈
    }

     // 클릭시 실행되는 함수
     const foldList1 = () => {
        if (!listRef1 || !listRef1.current) {             // useRef 변수가 비었을 때
            return;		                   		        // 그냥 리턴하도록 예외처리
        }

        const style = listRef1.current.style;  // 접근할 DOM 요소의 스타일 속성을 미리 선언

        if (closeList) {			  // closeAllList 상태변수가 true 일 때 
            style.maxHeight = '0'; 	  	  // maxHeight 는 0이 되고 접힘
        } else if (!closeList) {	  	  // closeAllList 상태변수가 false
            style.maxHeight =
                `${listRef1.current.scrollHeight}px`; // maxHeight = scroll 길이가 되고 메뉴가 열림
        }
        setCloseList(!closeList);		  // 클릭할 때마다 상태를 반대로 바꿈
    }
    
    
    return (
        <div>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.inner_header}>
                    <h1>
                        <a href="/" className={styles.icon}></a>
                    </h1>
                    <div className={styles.search_box}>
                        <form>
                            <fieldset>
                                <div>
                                    <div className={styles.input_search_box}>
                                        <input type='text' placeholder='방송국 검색'></input>
                                    </div>
                                    <button type='submit' className={styles.btn_search_box}>
                                        <span>통합검색</span>
                                    </button>
                                </div>

                            </fieldset>

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
                                    <div className={styles.user_profile_image} />
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
                                    <button type='button' className={`${closeList ? 'close' : 'open'}`} onClick={foldList}>
                                        <span>VOD</span>
                                    </button>
                                </h3>
                                <ul className={styles.content} ref={listRef}>
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
                                    <button type='button' className={`${closeList ? 'close' : 'open'}`} onClick={foldList1}>
                                        <span>게시판</span>
                                    </button>
                                </h3>
                                <ul className={styles.content1} ref={listRef1}>
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