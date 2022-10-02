import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/TemplateMain.module.css'; //styles 쓰면 전부 style로 해야하는듯
import AFprofile from '../images/AFprofile.gif';


function TemplateMain(props){
    const isLogin = props.isLogin;
    console.log("TemplateMain : " + isLogin);

    return(
            <>
            <header className={styles.header}>
                <h1 className={styles.logo}><Link to='/'>AmericaTV</Link></h1>
                <div className={styles.util}>
                    <button className={styles.btnBroadcast}>
                    
                    </button>
                    <div className={styles['notice-Area']}>
                        <button type='button' className={styles['btn-notice']}>
                            <span>알림</span>
                        </button>
                    </div>
                   {isLogin ? 
                   
                   <div className={styles.profileWrap}>
                    <div className={styles.userInfo}>
                        <div className={styles.thumb}>
                            <img src={AFprofile} alt='React'/>
                        </div>
                        <button type='button' className={styles.btn_login}>
                            {localStorage.getItem('userNick')}
                        </button>
                    </div>
                   </div>
                   
                   :
                   <Link to='login'>
                        <button type='button' className={styles.loginBtn}>
                        로그인
                        </button>
                    </Link>
                    
                    }
                   
                    <button type='button' className={styles['btn-settings']}>
                        설정
                    </button>
                    <div className={styles.serviceMenu}>
                        <button type='button' className={styles['btn-allMenu']}>
                            모든메뉴
                        </button>
                    </div>
                </div>
                <div className={styles.searchArea}>
                    <form>
                        <div className={styles['search_window']}>
                            <input type='text' className={styles['txt-search']}/>
                            
                            <button type='button' className={styles['btn-search']}>
                                검색
                            </button>
                        </div>
                    </form>
                </div>
            </header>
            <div className={styles.nav}>
            <div className={styles.mb_content}>
                <ul className={styles.navService}>
                    <li>
                        <h3>
                        <Link to="/" className={styles.btnHome}>
                                홈
                        </Link>
                        </h3>
                        <ul className={styles.subMenu}>
                            <li>
                                <Link to="/" className={styles.all}>전체</Link>
                            </li>
                            <li>
                                <Link to="/">게임</Link>
                            </li>
                            <li>
                                <Link to="/">보이는라디오</Link>
                            </li>
                            <li>
                                <Link to="/">스포츠</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>
                            <Link to="/" className={styles.btnEsport}>
                                e스포츠
                            </Link>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <Link to="/" className={styles.btnVOD}>
                                VOD
                            </Link>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <Link to="/" className={styles.btnBookmark}>
                                MY
                            </Link>
                        </h3>
                    </li>
                </ul>
                <ul className={styles.otherService}>
                    <li>샵메리카</li>
                    <li>랭킹</li>
                    <li>소통센터</li>
                    <li>고객센터</li>
                    <li>이벤트</li>
                </ul>
                </div>
            </div>
           
            </>
    );
}

export default TemplateMain;