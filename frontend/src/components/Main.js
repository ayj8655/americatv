import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Main.module.css';
import TemplateMain from './TemplateMain';
//import Slider from './exSlider';
import bnr1 from '../images/bnr1.png';
import bnr2 from '../images/bnr2.png';
import brn3 from '../images/bnr3.png';
import logo from '../images/example.jpg';
import ex2 from '../images/example2.jpg';
import ex3 from '../images/example3.jpg';
import ex4 from '../images/example4.jpg';
import ex5 from '../images/example5.jpg';
import ex6 from '../images/example6.jpg';
import profile from '../images/profile.jpg';


function Main(){

    const TOTAL_SLIDES = 6;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const NextSlide = () =>{
        if(currentSlide >= TOTAL_SLIDES){
            setCurrentSlide(0);
        }
        else{
            setCurrentSlide(currentSlide + 1);
        }
    }

    const PrevSlide = () =>{
        if(currentSlide === 0){
            setCurrentSlide(TOTAL_SLIDES);
        }else{
            setCurrentSlide(currentSlide - 1);
        }
    }


    return(
        <>
        <TemplateMain>
        </TemplateMain>
        <section className={styles.list_container}>
            <div className={styles.mainBanners}>
                <a href="#" className={styles.btnPrev}>
                </a>
                <div className={styles.swiperContainer}>
                    <ul className={styles.swiperWrapper}>
                        <li className={styles.swiperSlide}>
                            <a href="#" className={styles.bnrConts}>
                                <span className={styles.bnrImg}>
                                    <img src={bnr1} className={styles.bnrLogo} alt='Reat' />
                                </span>
                                <div className={styles.bnrText}>
                                    <span className={styles.date}>9/4(일) 밤7시</span>
                                    <strong>2022-2023 대싸움</strong>
                                    <p>
                                        테일즈런너
                                        <br></br>
                                        지금 당장 참여하기!
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li className={styles.swiperSlide}>
                            <a href="#" className={styles.bnrConts}>
                                <span className={styles.bnrImg}>
                                    <img src={bnr2} className={styles.bnrLogo} alt='Reat' />
                                </span>
                                <div className={styles.bnrText}>
                                    <span className={styles.date}>9/4(일) 밤10시</span>
                                    <strong>2022-2023 리그 1</strong>
                                    <p>
                                        브레스트vs스타라스부르
                                        <br></br>
                                        리그 1도 아메리카TV!
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li className={styles.swiperSlide}>
                            <a href="#" className={styles.bnrConts}>
                                <span className={styles.bnrImg}>
                                    <img src={brn3} className={styles.bnrLogo} alt='Reat' />
                                </span>
                                <div className={styles.bnrText}>
                                    <span className={styles.date}>9/4(일)~9/11(일)</span>
                                    <strong>추석특급 '한가WEEK'</strong>
                                    <p>
                                        한 주간 펼쳐지는
                                        <br></br>
                                        릴레이 콘텐츠 보러가기!
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#" className={styles.btnNext}>
                </a>
            </div>
            {/* Braodcast List */}
            <article className={styles.list_section}>
                <div className={styles.hotIssueLive}>
                    <h2>실시간 핫이슈</h2>
                    <div className={styles.hotIssueLiveSwiper}>
                        
                       <ul className={styles.swiperWrapper} ref={slideRef}>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        <img src={ex2} alt="Reat"></img>
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        <img src={ex3} alt="Reat"></img>
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        <img src={ex4} alt="Reat"></img>
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        <img src={ex5} alt="Reat"></img>
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        <img src={ex5} alt="Reat"></img>
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        <img src={ex5} alt="Reat"></img>
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                            <li className={styles.swiperSlide}>
                                <div className={styles.thumbBox}>
                                    <Link to="#">
                                        
                                    </Link>
                                    <span className={styles.allow}>
                                        탐방허용
                                    </span>
                                </div>
                                <div className={styles.thumb_info}>
                                   
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button type='button' className={styles.issuSliderArrowPrev} onClick={PrevSlide}></button>
                    <button type='button' className={styles.issuSliderArrowNext} onClick={NextSlide}></button>
                    <button type='button' className={`${styles.moving} ${styles.stop}`} ></button>
                </div>

                <div className={styles.titleWrap}>
                    <h2>전체</h2>
                    <div className={styles.rtGroup}>
                        <button type='button' className={styles.reload}></button>
                    </div>
                </div>

                <div className={styles.broad_listArea}>
                    <ul>
                        <li>
                            <div className={styles.thumbsBox}>
                                <Link to='#'>
                                    <img src={logo} alt='Reat'></img>
                                </Link>
                                <span className={styles.allow}>탐방허용</span>
                                <span className={styles.time}>09-09 16:10 방송시작</span>
                                <button type='button' className={styles.btnLater}>
                                    <span>나중에보기</span>
                                </button>
                            </div>
                            <div className={styles.cBoxInfo}>
                                <Link to ="#" target="_blank" className={styles.thumb}>
                                    <img src={profile} alt="Reat"></img>
                                </Link>
                                <h3>
                                    <Link to="#" className={styles.title} target="_blank">킴성태xDG98x이제이vs성장x피오x싸패 GKL첫출전 20000개 배틀그라운드</Link>
                                </h3>
                                <div className={styles.details}>
                                    <Link to="#" user_id="aaa" className={styles.nick}>
                                        <span>항상#킴성태</span>
                                    </Link>
                                    <span className={styles.views}>
                                        <em>
                                            10,105
                                        </em>
                                    </span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className={styles.thumbsBox}>
                                <Link to='#'>
                                    <img src={ex6} alt='Reat'></img>
                                </Link>
                                <span className={styles.allow}>탐방허용</span>
                                <span className={styles.time}>09-09 16:10 방송시작</span>
                                <button type='button' className={styles.btnLater}>
                                    <span>나중에보기</span>
                                </button>
                            </div>
                            <div className={styles.cBoxInfo}>
                                <Link to ="#" target="_blank" className={styles.thumb}>
                                    <img src={profile} alt="Reat"></img>
                                </Link>
                                <h3>
                                    <Link to="#" className={styles.title} target="_blank">킴성태xDG98x이제이vs성장x피오x싸패 GKL첫출전 20000개 배틀그라운드</Link>
                                </h3>
                                <div className={styles.details}>
                                    <Link to="#" user_id="aaa" className={styles.nick}>
                                        <span>항상#킴성태</span>
                                    </Link>
                                    <span className={styles.views}>
                                        <em>
                                            10,105
                                        </em>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.thumbsBox}>
                                <Link to='#'>
                                    <img src={logo} alt='Reat'></img>
                                </Link>
                                <span className={styles.allow}>탐방허용</span>
                                <span className={styles.time}>09-09 16:10 방송시작</span>
                                <button type='button' className={styles.btnLater}>
                                    <span>나중에보기</span>
                                </button>
                            </div>
                            <div className={styles.cBoxInfo}>
                                <Link to ="#" target="_blank" className={styles.thumb}>
                                    <img src={profile} alt="Reat"></img>
                                </Link>
                                <h3>
                                    <Link to="#" className={styles.title} target="_blank">킴성태xDG98x이제이vs성장x피오x싸패 GKL첫출전 20000개 배틀그라운드</Link>
                                </h3>
                                <div className={styles.details}>
                                    <Link to="#" user_id="aaa" className={styles.nick}>
                                        <span>항상#킴성태</span>
                                    </Link>
                                    <span className={styles.views}>
                                        <em>
                                            10,105
                                        </em>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.thumbsBox}>
                                <Link to='#'>
                                    <img src={logo} alt='Reat'></img>
                                </Link>
                                <span className={styles.allow}>탐방허용</span>
                                <span className={styles.time}>09-09 16:10 방송시작</span>
                                <button type='button' className={styles.btnLater}>
                                    <span>나중에보기</span>
                                </button>
                            </div>
                            <div className={styles.cBoxInfo}>
                                <Link to ="#" target="_blank" className={styles.thumb}>
                                    <img src={profile} alt="Reat"></img>
                                </Link>
                                <h3>
                                    <Link to="#" className={styles.title} target="_blank">킴성태xDG98x이제이vs성장x피오x싸패 GKL첫출전 20000개 배틀그라운드</Link>
                                </h3>
                                <div className={styles.details}>
                                    <Link to="#" user_id="aaa" className={styles.nick}>
                                        <span>항상#킴성태</span>
                                    </Link>
                                    <span className={styles.views}>
                                        <em>
                                            10,105
                                        </em>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.thumbsBox}>
                                <Link to='#'>
                                    <img src={logo} alt='Reat'></img>
                                </Link>
                                <span className={styles.allow}>탐방허용</span>
                                <span className={styles.time}>09-09 16:10 방송시작</span>
                                <button type='button' className={styles.btnLater}>
                                    <span>나중에보기</span>
                                </button>
                            </div>
                            <div className={styles.cBoxInfo}>
                                <Link to ="#" target="_blank" className={styles.thumb}>
                                    <img src={profile} alt="Reat"></img>
                                </Link>
                                <h3>
                                    <Link to="#" className={styles.title} target="_blank">킴성태xDG98x이제이vs성장x피오x싸패 GKL첫출전 20000개 배틀그라운드</Link>
                                </h3>
                                <div className={styles.details}>
                                    <Link to="#" user_id="aaa" className={styles.nick}>
                                        <span>항상#킴성태</span>
                                    </Link>
                                    <span className={styles.views}>
                                        <em>
                                            10,105
                                        </em>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.thumbsBox}>
                                <Link to='#'>
                                    <img src={logo} alt='Reat'></img>
                                </Link>
                                <span className={styles.allow}>탐방허용</span>
                                <span className={styles.time}>09-09 16:10 방송시작</span>
                                <button type='button' className={styles.btnLater}>
                                    <span>나중에보기</span>
                                </button>
                            </div>
                            <div className={styles.cBoxInfo}>
                                <Link to ="#" target="_blank" className={styles.thumb}>
                                    <img src={profile} alt="Reat"></img>
                                </Link>
                                <h3>
                                    <Link to="#" className={styles.title} target="_blank">킴성태xDG98x이제이vs성장x피오x싸패 GKL첫출전 20000개 배틀그라운드</Link>
                                </h3>
                                <div className={styles.details}>
                                    <Link to="#" user_id="aaa" className={styles.nick}>
                                        <span>항상#킴성태</span>
                                    </Link>
                                    <span className={styles.views}>
                                        <em>
                                            10,105
                                        </em>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.thumbsBox}>
                                <Link to='#'>
                                    <img src={logo} alt='Reat'></img>
                                </Link>
                                <span className={styles.allow}>탐방허용</span>
                                <span className={styles.time}>09-09 16:10 방송시작</span>
                                <button type='button' className={styles.btnLater}>
                                    <span>나중에보기</span>
                                </button>
                            </div>
                            <div className={styles.cBoxInfo}>
                                <Link to ="#" target="_blank" className={styles.thumb}>
                                    <img src={profile} alt="Reat"></img>
                                </Link>
                                <h3>
                                    <Link to="#" className={styles.title} target="_blank">킴성태xDG98x이제이vs성장x피오x싸패 GKL첫출전 20000개 배틀그라운드</Link>
                                </h3>
                                <div className={styles.details}>
                                    <Link to="#" user_id="aaa" className={styles.nick}>
                                        <span>항상#킴성태</span>
                                    </Link>
                                    <span className={styles.views}>
                                        <em>
                                            10,105
                                        </em>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.thumbsBox}>
                                <Link to='#'>
                                    <img src={logo} alt='Reat'></img>
                                </Link>
                                <span className={styles.allow}>탐방허용</span>
                                <span className={styles.time}>09-09 16:10 방송시작</span>
                                <button type='button' className={styles.btnLater}>
                                    <span>나중에보기</span>
                                </button>
                            </div>
                            <div className={styles.cBoxInfo}>
                                <Link to ="#" target="_blank" className={styles.thumb}>
                                    <img src={profile} alt="Reat"></img>
                                </Link>
                                <h3>
                                    <Link to="#" className={styles.title} target="_blank">킴성태xDG98x이제이vs성장x피오x싸패 GKL첫출전 20000개 배틀그라운드</Link>
                                </h3>
                                <div className={styles.details}>
                                    <Link to="#" user_id="aaa" className={styles.nick}>
                                        <span>항상#킴성태</span>
                                    </Link>
                                    <span className={styles.views}>
                                        <em>
                                            10,105
                                        </em>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.btnMore}>
                <button type='button'>
                    <span>더보기</span>
                </button>
            </div>
            </article>
        </section>
        <div className={styles.footer}>
            <div className={styles.footerInner}>
                <ul className={styles.f_list}>
                    <li>
                        회사소개
                    </li>
                    <li>
                        서비스소개
                    </li>
                    <li>
                        이용약관
                    </li>
                    <li>
                        개인정보처리방침
                    </li>
                    <li>
                        운영정책
                    </li>
                    <li>
                        Developers
                    </li>
                    <li>
                        주요서비스
                    </li>
                </ul>
                <div className={styles.adr}>
                    ㈜아메리카TV
                    <span>대표이사 : 안영진</span>
                    <span>호스팅 제공자 : ㈜아메리카TV</span>
                    <span>사업자 번호 : 12-34-56789</span><br></br>
                    <address>
                        주소 : 서울특별시 구로구 디지털로 26길 38 1층 AYJ studio(안영진방)
                    </address>
                    <span>FAX : 02-123-4567</span>
                    <span>americaTV@americaTV.com (02-2022-0911)</span>
                </div>
                <p className={styles.copyright}>ⓒ AmericaTV Corp.</p>
            </div>
        </div>
        </>
    );
}

export default Main;