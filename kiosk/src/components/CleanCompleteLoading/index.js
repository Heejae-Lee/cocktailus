// 스타일 관련
import useStyles from "./styles";
import animationData from "../../lotties/loading.json";
// 컴포넌트 관련
import React from "react";
import Typography from "@material-ui/core/Typography";
import SimpleModal from "../SimpleModal";
// 기능 관련
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import { hardwareAPI } from "../../utils/axios";

export default function CleanCompleteLoading() {
  const classes = useStyles();
  const [isWaited, setIsWaited] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const history = useHistory();

  // lottie를 위한 설정
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // 청소를 실행할 경우 수행
  const buttonYes = () => {
    setIsWaited(true);

    // 청소 진행
    hardwareAPI.cleanRequest().then((res) => {
      // 500ms마다 api를 통해 디바이스 처리 종료 여부를 확인
      // 디바이스가 가용 상태이면 interval을 없애고 완료 모달 출력
      if (res.data.status === "clean-done") {
        let interval = setInterval(() => {
          hardwareAPI.deviceAvailable().then((res) => {
            if (res.data.status === "available-done") {
              clearInterval(interval);
              setIsComplete(true);
            }
          });
        }, 1000);
      }
    });
  };

  // 청소를 실행하지 않을 경우 홈으로 돌아감
  const buttonNo = () => {
    history.push("/");
  };

  // 청소 완료 후 모달 창에서 버튼을 클릭하면 홈으로 돌아감
  const buttonComplete = () => {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      {/* isWait가 false면 Modal창을 isWait가 true면 청소 대기화면을 출력 */}
      {!isWaited && (
        <SimpleModal
          open={!isWaited}
          text={"호스 청소를 진행하시겠어요? (약 10초 소요)"}
          subText={"아니요를 누르면 홈으로 돌아가요!"}
          type="question"
          buttonType="yesNo"
          buttonYes={buttonYes}
          buttonNo={buttonNo}
        />
      )}
      {isWaited && (
        <div>
          <Lottie
            options={defaultOptions}
            height={450}
            width={450}
            isPaused={isWaited}
          />
          <Typography className={classes.font} variant="h2" align="center">
            호스 청소중...
          </Typography>
          <Typography className={classes.font} variant="h4" align="center">
            청소가 끝나면 자동으로 홈으로 이동돼요
          </Typography>
        </div>
      )}
      {/* 청소가 완료되면 완료되었다고 모달창을 출력한다. */}
      {isComplete && (
        <SimpleModal
          open={isComplete}
          text={"청소가 완료되었어요!"}
          subText={"버튼을 누르면 홈으로 돌아가요!"}
          type="checked"
          buttonYes={buttonComplete}
          buttonText="완료!"
        />
      )}
    </div>
  );
}
