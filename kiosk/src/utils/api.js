

// 테스트용 led 켜기 함수
export const LedOn = () => {
    //pigpio의 GPIO 클래스 불러오기
    const GPIO = require("pigpio").Gpio;
  //12번핀을 OUTPUT모드로 설정
  const LED = new GPIO(12, {
    mode: GPIO.OUTPUT,
  });

  LED.digitalWrite(true);
  console.log("LED가 켜짐");
};

// 테스트용 led 끄기 함수
export const LedOff = () => {

    //pigpio의 GPIO 클래스 불러오기
    const GPIO = require("pigpio").Gpio;
  //12번핀을 OUTPUT모드로 설정
  const LED = new GPIO(12, {
    mode: GPIO.OUTPUT,
  });

  LED.digitalWrite(false);
  console.log("LED가 꺼짐");
};