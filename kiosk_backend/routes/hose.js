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

let available;
let available1;
let available2;
let available3;
let available4;

// 호스 정보 입력 받아 데이터 출력
router.post("/", async(req,res)=>{
    try{
        
        //호스 작동중 확인
        available = 0;
        available1 = 0;
        available2 = 0;
        available3 = 0;
        available4 = 0;
        
        console.log(available);
        

        //POST 불러오기
        // 호스별 수량 변수 선언
        let oneratio
        let tworatio
        let threeratio
        let fourratio

        //POST에서 각 호스별 수량 데이터 넣기
		for (i=0; i<4; i++){
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
        //1번호스 15ml 3초
        //2번호스 15ml 4.5초
        //3번호스 15ml 2초
        //4번호스 15ml 5초
        let onetime = (oneratio/15)*3000;
        let twotime = (tworatio/15)*4500;
        let threetime = (threeratio/15)*2000;
        let fourtime = (fourratio/15)*5000;


        
        
        //밸브 꺼지는 시간 함수
        setTimeout(function() {
            first.digitalWrite(off);
            available1 = 1;
            if(available1==1 && available2==1 && available3==1 && available4==1){
                available=1;
            }
            console.log(available);
         }, onetime);

        setTimeout(function() {
            second.digitalWrite(off);
            available2 = 1;
            if(available1==1 && available2==1 && available3==1 && available4==1){
                available=1;
            }
            console.log(available);
         }, twotime);

        setTimeout(function() {
            third.digitalWrite(off);
            available3 = 1;
            if(available1==1 && available2==1 && available3==1 && available4==1){
                available=1;
            }
            console.log(available);
         }, threetime);
        
        setTimeout(function() {
           fourth.digitalWrite(off);
           available4 = 1;
           if(available1==1 && available2==1 && available3==1 && available4==1){
            available=1;
            }
            console.log(available);
        }, fourtime);  

        //각호스별 작동확인
        
        return res.json({status:"ok"});
    } catch(error) {
        console.log(error);
        return res.json({status:"fail"});
    }
})

///////////////////////확인완료



router.get("/clean", async(req,res)=>{
    try{
        available = 0;
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
            available = 1;
         }, 5000);


        return res.json({status:"cleanok"});
    } catch(error) {
        console.log(error);
        return res.json({status:"cleanfail"});
    }
})


router.get("/available", async(req,res)=>{
    try{
        if(available == 1){
            return res.json({status:"finish"});
        }

    } catch(error) {
        console.log(error);
        return res.json({status:"fail2"});
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
