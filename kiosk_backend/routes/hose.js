const express = require('express');
const GPIO = require('pigpio').Gpio;
const router = express.Router();

// 호스 정보 입력 받아 데이터 출력
router.get("/", async(req,res)=>{
    try{
        /* 현재 임시 코드 : LED 켜고 끔 */

		// GPIO 12의 OUTPUT 모드인 LED를 GPIO 인스턴스로 생성
		const LED = new GPIO(12, {
    	//OUTPUT 모드로 설정
    		mode: GPIO.OUTPUT
		});

		// LED ON/OFF 여부 true (1): HIGH, false (0): LOW
		let Digit = LED.digitalRead();

    	// LED 디지털 신호 보내기 Digit이 true 일 때 -> false, Digit이 false 일 때 -> true
    	LED.digitalWrite(!Digit);

        return res.json({status:"ok"});
    } catch(error) {
        console.log(error);
        return res.json({status:"fail"});
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
