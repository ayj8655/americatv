
function solution(pin) {
    console.log("pin : " + pin);
    var result1 = pwSame(pin);
    var result2 = pwCountinue(pin);
   // console.log("pwSame : " + result1);
    //console.log("pwCountivue : " + result2);
    
    if(result1 == true && result2 == true){
        return true;
    }else{
        return false;
    }
  }

  function pwSame(a){ /// 3자리이상 동일한문자 (예:0000)
    //console.log("a : " + a);
    var tmp = "";
    var cnt = 0;

    for(i=0; i<a.length; i++){
        tmp = a.charAt(i);
        if(tmp == a.charAt(i+1) && tmp == a.charAt(i+2))
        {cnt = cnt + 1;}
    }

    if(cnt>0){
        return false;
    }else{
        return true;
    }
  }

  function pwCountinue(b){ // 3자리이상 연속된 문자 (예:1234)
    //console.log("b : " + b);
    var cnt2 = 0;
    var cnt3 = 0;
    var tmp2 = "";
    var tmp3 = "";
    var tmp4 = "";

    for(i=0;i<2;i++){
        tmp2 = b.charAt(i);
        tmp3 = b.charAt(i+1);
        tmp4 = b.charAt(i+2);
       // console.log("tmp2 : " + tmp2.charCodeAt());
        //console.log("tmp3 : " + tmp3.charCodeAt());
        //console.log("tmp3 : " + tmp4.charCodeAt());

        if(tmp2.charCodeAt(0) - tmp3.charCodeAt(0) == 1 && tmp3.charCodeAt(0) - tmp4.charCodeAt(0) == 1){
            cnt2 = cnt2 + 1;
        }
        if(tmp2.charCodeAt(0) - tmp3.charCodeAt(0) == -1 && tmp3.charCodeAt(0) - tmp4.charCodeAt(0) == -1){
            cnt3 = cnt3 + 1;
        }

        //console.log("cnt2 : " + cnt2);
        //console.log("cnt3 : " + cnt3);
    }
    if(cnt2 > 0 || cnt3 > 0){
        return false;
    }else{
        return true;
    }
  }
  console.log(solution("1234"));