import { Gpio } from "pigpio";

// 테스트용 led 켜기 함수
export const LedOn = () => {
  //12번핀을 OUTPUT모드로 설정
  const LED = new Gpio(12, {
    mode: Gpio.OUTPUT,
  });

  LED.digitalWrite(true);
  console.log("LED가 켜짐");
};

// 테스트용 led 끄기 함수
export const LedOff = () => {

  //12번핀을 OUTPUT모드로 설정
  const LED = new Gpio(12, {
    mode: Gpio.OUTPUT,
  });

  LED.digitalWrite(false);
  console.log("LED가 꺼짐");
};