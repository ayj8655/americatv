import React, {useState, useEffect} from 'react';

import {Link, useHistory, useParams, useLocation, useNavigate} from 'react-router-dom';
import styles from '../css/MyPage_BoardList.module.css';
import MyPage_Template from '../components/MyPage_Template';
import axiosInstance from '../axiosConfig.js'


function MyPage_BoardList() {

    const [boardTitle, setboardTitle] = useState([]);
    const [boardDt, setboardDt] = useState([]);
    const [boardRecommend, setboardRecommend] = useState([]);
    const [boardView, setboardView] = useState([]);

    const [boarLength, setboarLength] = useState([]);

    const [boardList, setboardList] = useState([]);
    

    useEffect(()=>{
        
        axiosInstance.get('/yjy/1/200')
        .then(res => {

            console.log(res.data);
            setboardList(res.data);

            console.log(res.data.length);

            setboarLength(res.data.length);

            for(let i=0; i<res.data.length; i++){
                setboardTitle(res.data[i].boardTitle);
                setboardDt(res.data[i].boardDt.substring(0,10));
                setboardRecommend(res.data[i].boardRecommend);
                setboardView(res.data[i].boardView);
            }
        })
        .catch(err =>{
            if(err.response.status == 500){
                alert('없는 방송국이거나 주소가 잘못되었을 수 있습니다.');
            }
        })

    },[]);
    
    function repeatList(boardList) {
        let arr = [];
        for(let i=0; i<boarLength; i++){
            arr.push(
                <tr>
                    <td className={styles.subject}>
                        <div className={styles.categoty}>
                            <span>공지사항</span>
                        </div>
                        <div className={styles.title}>
                            {/* <Link to={`/broadcast/${localStorage.getItem('userId')}/MyPage_BoardContent/${boardList[i].boardCd}`}> */}
                                <a href={`/broadcast/${localStorage.getItem('userId')}/MyPage_BoardContent/${boardList[i].boardCd}`}>{boardList[i].boardTitle}</a>
                            {/* </Link> */}
                        </div>
                    </td>
                    <td className={styles.nick}></td>
                    <td>{boardList[i].boardDt.substring(0,10)}</td>
                    <td>{boardList[i].boardRecommend}</td>
                    <td>{boardList[i].boardView}</td>
                </tr>
            )
        }
        console.log(arr[boardTitle]);
        return arr;
    }


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
                    <h2>전체 게시글</h2>
                    <section className={styles.BoardList_Cnt}>
                        <span><em>11,190</em>개의 글</span>
                    </section>
                    <section className={styles.boardlist}>
                        <table>
                            <colgroup>
                                <col/>
                                <col className={styles.col1}/>
                                <col className={styles.col2}/>
                                <col className={styles.col3}/>
                                <col className={styles.col4}/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope='col'>제목</th>
                                    <th scope='col' className={styles.nick}>작성자</th>
                                    <th scope='col'>작성일</th>
                                    <th scope='col'>UP</th>
                                    <th scope='col'>조회</th>
                                </tr>
                            </thead>
                            <tbody>
                                {repeatList(boardList)}
                            </tbody>
                        </table>
                    </section>

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