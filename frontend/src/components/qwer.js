import React, { useEffect, useRef, useState } from "react";

function Chat(){
  const connect = () => {
    let socket = new WebSocket("ws://localhost:8080/websocket");

        socket.onopen = function (e) {
            console.log('open server!')
        };

        socket.onerror = function (e){
            console.log(e);
        }
        
        socket.onmessage = function (e) {
            console.log(e.data);
            let msgArea = document.querySelector('.msgArea');
            let newMsg = document.createElement('div');
            newMsg.innerText=e.data;
            msgArea.append(newMsg);
        }

        const sendMsg = () => {
            let content=document.querySelector('.content').value;
            socket.send(content);
        }

  };

  
    
  useEffect(() => {
    connect();

  }, []);

  return (
    <div>
        <input type="text" placeholder="보낼 메세지를 입력하세요." class="content"></input>
        <button type="button" value="전송" class="sendBtn" onClick={connect.sendMsg}>전송</button>
        <div>
            <span>메세지</span>
            <div class="msgArea"></div>
        </div>
    </div>
  );
};

export default Chat;