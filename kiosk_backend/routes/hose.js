const express = require('express');
const GPIO = require('pigpio').Gpio;
const router = express.Router();


const first = new GPIO(13, {
    //13번핀 OUTPUT 모드로 설정
    mode: GPIO.OUTPUT
});

const second = new GPIO(19, {
    //19번핀 OUTPUT 모드로 설정
    mode: GPIO.OUTPUT
});

const third = new GPIO(6, {
    //6번핀 OUTPUT 모드로 설정
    mode: GPIO.OUTPUT
});


const fourth = new GPIO(5, {
    //5번핀 OUTPUT 모드로 설정
    mode: GPIO.OUTPUT
});

//LED 핀 21번(접지)
const led = new GPIO(21, {mode: GPIO.INPUT});

//LED 세팅
let on = 1;
led.digitalWrite(on); 

//LED 파랑빛 설정
let ledblue = new GPIO(20, {mode: GPIO.OUTPUT});
let ledred = new GPIO(16, {mode: GPIO.INPUT});

let available = 0;


// 호스 정보 입력 받아 데이터 출력
router.post("/", async(req,res)=>{
    try{
        if(available == 0){
            available = 1; // 기계 작동중일떄
            //POST 불러오기
            // 호스별 작동시간 변수 선언
            let onetime = 0;
            let twotime = 0;
            let threetime = 0;
            let fourtime = 0;

            // 호스별 수량 변수 선언
            let oneratio = 0;
            let tworatio = 0;
            let threeratio = 0;
            let fourratio = 0;


            //LED 빨강빛 설정
            ledblue = new GPIO(20, {mode: GPIO.INPUT});
            ledred = new GPIO(16, {mode: GPIO.OUTPUT});
            
            //술 종류 갯수 확인
            const length = Object.keys(req.body).length;

            //POST에서 각 호스별 수량 데이터 넣기
	    	for (i=0; i<length; i++){
                if(req.body[i].order == 0){
                    oneratio =  req.body[i].ratio;
                }
                else if(req.body[i].order == 1){
                    tworatio =  req.body[i].ratio;
                }
                else if(req.body[i].order == 2){
                    threeratio =  req.body[i].ratio;
                }
                else{
                    fourratio =  req.body[i].ratio;
                }
            }

            // LED ON/OFF 여부 on (1), off (0)
            let on = 1;
            let off = 0;
        
            //밸브 전부 open
	        first.digitalWrite(on);
            second.digitalWrite(on);
            third.digitalWrite(on);
            fourth.digitalWrite(on);
        
            // 시간함수
            //1번호스 15ml 3초  30-
            //2번호스 15ml 9초  30-
            //3번호스 15ml 2초   30-
            //4번호스 15ml 2.5초  30-
            onetime = (oneratio/15)*2000;  
            twotime = (tworatio/15)*4500;   
            threetime = (threeratio/15)*3000;
            fourtime = (fourratio/15)*1800;


        
        
            //밸브 꺼지는 시간 함수
            setTimeout(function() {
                first.digitalWrite(off);
                console.log("1")
            }, onetime);

            setTimeout(function() {
                second.digitalWrite(off);
                console.log("2")
             }, twotime);

            setTimeout(function() {
                third.digitalWrite(off);
                console.log("3")
            }, threetime);
        
            setTimeout(function() {
               fourth.digitalWrite(off);
               console.log("4")
            }, fourtime);  

            //제일 늦게 완료되는 호스 시간
            let maxtime = Math.max(onetime,twotime,threetime,fourtime);

            //LED 제조 완료시 빨강 -> 파랑
            setTimeout(function() {
                ledblue = new GPIO(20, {mode: GPIO.OUTPUT});
                ledred = new GPIO(16, {mode: GPIO.INPUT});  
                available = 0; //기계 작동끝일떄
             }, maxtime);  

        
            return res.json({status:"make-done"});
        }
        else {
            return res.json({status:"make-working"});
        }
    } catch(error) {
        console.log(error);
        return res.json({status:"make-fail"});
    }
})

///////////////////////확인완료



router.get("/clean", async(req,res)=>{
    try{
        if(available == 0){
           available = 1; //기계 작동중일떄

           //LED 빨강빛 설정
           ledblue = new GPIO(20, {mode: GPIO.INPUT});
           ledred = new GPIO(16, {mode: GPIO.OUTPUT});

           // LED ON/OFF 여부 on (1), off (0)
           let on = 1;
           let off = 0;
            
           //밸브 전부 open
	       first.digitalWrite(on);
           second.digitalWrite(on);
           third.digitalWrite(on);
           fourth.digitalWrite(on);

           //밸브 꺼지는 시간 함수(5초간 청소)
           setTimeout(function() {
               first.digitalWrite(off);
               second.digitalWrite(off);
               third.digitalWrite(off);
               fourth.digitalWrite(off);
               ledblue = new GPIO(20, {mode: GPIO.OUTPUT});
               ledred = new GPIO(16, {mode: GPIO.INPUT});
               available = 0; //기계 작동끝일떄
               console.log("clean-finish")
            }, 5000);


           return res.json({status:"clean-done"});
           }
        else{
            return res.json({status:"clean-working"});
        }
    } catch(error) {
        console.log(error);
        return res.json({status:"clean-fail"});
    }
})


router.get("/available", async(req,res)=>{
    try{
        if(available === 1){ //기계가 작동중일때는 available = 1;
            return res.json({status:"available-working"});
        }
        else{
            return res.json({status:"available-done"});
        }
         
    } catch(error) {
        console.log(error);
        return res.json({status:"available-fail"});
    }
})




/*
// api/user POST
// 회원가입 post
router.post("/", async(req,res)=>{
    try{
        console.log(req.body);
        const {name, email, password, type} = req.body;
        const hashedPassword = await hashPassword(password);
        console.log(hashedPassword);
        const result = await db["user"].create({
            name: name,
            email,
            password:hashedPassword,
            type,
        })
        // name email password type
        return res.json({status:"OK"});
    } catch(error) {
        console.log(error);
        return res.json({hello:"Error"});
    }
})
*/
module.exports = router;
