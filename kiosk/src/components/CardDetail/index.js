// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Typography from "../../components/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { PrettoSlider } from "../PrettoSlider";
import LottieModal from "../LottieModal";
import SimpleModal from "../SimpleModal";
import recipes from "../../asset/recipe/recipe";
// 기능 관련
import { recipeAPI, hardwareAPI } from "../../utils/axios";
import { useHistory } from "react-router-dom";

export default function CardDetail(props) {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    title: "",
    drink: [],
    image:
      "",
  });
  const [hose, setHose] = React.useState({
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
  });
  const [modalState, setModalState] = React.useState({
    isConfirmed: false,
    making: false,
    isComplete: false,
    isDuplicated: false,
    error: false
  });

  // props를 통하여 칵테일 데이터를 로컬에서 가져올지 서버에서 가져올지 결정함
  React.useEffect(() => {
    const flag = props.url.indexOf("bookmark") > -1 ? true : false;
    console.log(props.url.indexOf("bookmark"));
    console.log(flag)

    if ( flag ) {
      recipeAPI.getRecipeDetail(props.id).then((res)=>{
        console.log(res);
        setState(res);
      }).catch((err) => {
        // 정보 가져오기 실패 모달
        let newModalState = Object.assign({}, modalState, { error: true });
        setModalState(newModalState);
    });
      
    } else {
      const basic = recipes[props.id];
      const drinkList = basic.drink.split("|");
      const drinkRatioList = basic.ratio.split("|").splice("");
      const drink = drinkList.map((el, index) => {
        return {
          drink: el,
          ratio: Number(drinkRatioList[index].replace("ml", "")),
        };
      });

      setState({
        title: basic.title,
        drink: drink,
        image: process.env.PUBLIC_URL + "/images/" + basic.image,
      });
    }
  }, []);

  // 호스 선택박스의 값이 바뀔떄마다 호출되는 함수
  const handleChange = (e) => {
    // setHose(event.target.value);
    let newHose = Object.assign({}, hose);
    newHose = {
      ...newHose,
      [e.target.name]: e.target.value,
    };

    setHose(newHose);
  };

  // 음료 제조버튼을 누르면 호출되는 함수
  const makeDrink = () => {
    const drinkCount = state.drink.length;
    let flag = [false, false, false, false];
    let validate = true;

    // 각 호스의 중복 여부 확인
    if (drinkCount > 0) {
      if (flag[hose.first]) validate = false;
      else {
        flag[hose.first] = true;
      }
    }
    if (drinkCount > 1) {
      if (flag[hose.second]) validate = false;
      else {
        flag[hose.second] = true;
      }
    }
    if (drinkCount > 2) {
      if (flag[hose.third]) validate = false;
      else {
        flag[hose.third] = true;
      }
    }
    if (drinkCount > 3) {
      if (flag[hose.fourth]) validate = false;
      else {
        flag[hose.fourth] = true;
      }
    }

    // 중복이 없으면 칵테일 제작
    if (validate) {
      let newModalState = Object.assign({}, modalState, { isConfirmed: true });
      setModalState(newModalState);
    } else {
      let newModalState = Object.assign({}, modalState, { isDuplicated: true });
      setModalState(newModalState);
    }
  };

  /* 슬라이더를 위한 함수들 */
  // 슬라이더를 바꿀때마다 state에 저장된 값을 교체
  const changevalue0 = (e, value) => {
    let newState = Object.assign({}, state);
    newState.drink[0].ratio = value;
    setState(newState);
  };

  const changevalue1 = (e, value) => {
    let newState = Object.assign({}, state);
    newState.drink[1].ratio = value;
    setState(newState);
  };

  const changevalue2 = (e, value) => {
    let newState = Object.assign({}, state);
    newState.drink[2].ratio = value;
    setState(newState);
  };

  const changevalue3 = (e, value) => {
    let newState = Object.assign({}, state);
    newState.drink[3].ratio = value;
    setState(newState);
  };

  /* 모달을 위한 함수들 */

  const buttonMake = () => {
    let drink = Object.assign({}, state.drink);
    const drinkCount = state.drink.length;
    if (drinkCount > 0) {
      drink[0].order = hose.first;
    }
    if (drinkCount > 1) {
      drink[1].order = hose.second;
    }
    if (drinkCount > 2) {
      drink[2].order = hose.third;
    }
    if (drinkCount > 3) {
      drink[3].order = hose.fourth;
    }
    const payload = {
      drink: drink,
    };

    // 제조중 모달 출력
    let newModalState = Object.assign({}, modalState, {
      isConfirmed: false,
      making: true,
    });
    setModalState(newModalState);

    // 디바이스로 제조 신호 전송
    hardwareAPI.make(payload).then((res) => {
      // 500ms마다 api를 통해 디바이스 처리 종료 여부를 확인
      // 디바이스가 가용 상태이면 interval을 없애고 완료 모달 출력
      if (res.data.status === "make-done") {
        let interval = setInterval(() => {
          hardwareAPI.deviceAvailable().then((res) => {
            if (res.data.status === "available-done") {
              clearInterval(interval);
              // 제조 완료 모달을 출력한다.
              let newModalState = {
                isConfirmed: false,
                making: false,
                isComplete: true,
                isDuplicated: false,
              };
              setModalState(newModalState);
            }
          });
        }, 1000);
      }
    });
  };

  const buttonComplete = () => {
    history.push("/");
  };

  const buttonDuplicated = () => {
    let newModalState = Object.assign({}, modalState, { isDuplicated: false });
    setModalState(newModalState);
  }

  const handleConfirmedClose = () => {
    let newModalState = Object.assign({}, modalState, { isConfirmed: false });
    setModalState(newModalState);
  };

  const handleCompleteClose = () => {
    let newModalState = Object.assign({}, modalState, { isComplete: false });
    setModalState(newModalState);
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexBox}>
        <Typography
          className={classes.title}
          variant="h3"
          gutterBottom
          marked="center"
          align="center"
        >
          {state.title}
        </Typography>
        <div className={classes.detailBox}>
          <div className={classes.imgBox}>
            <img
              className={classes.CocktailImg}
              src={state.image}
              alt={"칵테일 대표이미지"}
            />
            <Button
              onClick={makeDrink}
              variant="contained"
              className={classes.button}
            >
              바로 제조하기
            </Button>
          </div>
          <div className={classes.detail}>
            {/* 각 재료별 양 조절 기능 */}
            {state.drink.length > 0 && (
              <div>
                <div className={classes.drinkInfo}>
                  <Typography variant="h5">{state.drink[0].drink}</Typography>
                  <Typography
                    variant="h6"
                    className={classes.drinkMargin}
                  >{`${state.drink[0].ratio}ml`}</Typography>

                  <FormControl className={classes.formControl}>
                    <InputLabel id="first-hose">호스 선택</InputLabel>
                    <Select
                      name="first"
                      value={hose.first}
                      onChange={handleChange}
                    >
                      <MenuItem value={0}>1번</MenuItem>
                      <MenuItem value={1}>2번</MenuItem>
                      <MenuItem value={2}>3번</MenuItem>
                      <MenuItem value={3}>4번</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <PrettoSlider
                  className={classes.slider}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={
                    state.drink[0].ratio ? Number(state.drink[0].ratio) : 0
                  }
                  onChange={changevalue0}
                  step={15}
                  min={0}
                  max={150}
                />
              </div>
            )}
            {state.drink.length > 1 && (
              <div className={classes.drink}>
                <div className={classes.drinkInfo}>
                  <Typography variant="h5">{state.drink[1].drink}</Typography>
                  <Typography
                    variant="h6"
                    className={classes.drinkMargin}
                  >{`${state.drink[1].ratio}ml`}</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="first-hose">호스 선택</InputLabel>
                    <Select
                      name="second"
                      value={hose.second}
                      onChange={handleChange}
                    >
                      <MenuItem value={0}>1번</MenuItem>
                      <MenuItem value={1}>2번</MenuItem>
                      <MenuItem value={2}>3번</MenuItem>
                      <MenuItem value={3}>4번</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <PrettoSlider
                  className={classes.slider}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={
                    state.drink[1].ratio ? Number(state.drink[1].ratio) : 0
                  }
                  onChange={changevalue1}
                  step={15}
                  min={0}
                  max={150}
                />
              </div>
            )}
            {state.drink.length > 2 && (
              <div className={classes.drink}>
                <div className={classes.drinkInfo}>
                  <Typography variant="h5">{state.drink[2].drink}</Typography>
                  <Typography
                    variant="h6"
                    className={classes.drinkMargin}
                  >{`${state.drink[2].ratio}ml`}</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="first-hose">호스 선택</InputLabel>
                    <Select
                      name="third"
                      value={hose.third}
                      onChange={handleChange}
                    >
                      <MenuItem value={0}>1번</MenuItem>
                      <MenuItem value={1}>2번</MenuItem>
                      <MenuItem value={2}>3번</MenuItem>
                      <MenuItem value={3}>4번</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <PrettoSlider
                  className={classes.slider}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={
                    state.drink[2].ratio ? Number(state.drink[2].ratio) : 0
                  }
                  onChange={changevalue2}
                  step={15}
                  min={0}
                  max={150}
                />
              </div>
            )}
            {state.drink.length > 3 && (
              <div className={classes.drink}>
                <div className={classes.drinkInfo}>
                  <Typography variant="h5">{state.drink[3].drink}</Typography>
                  <Typography
                    className={classes.drinkMargin}
                    variant="h6"
                  >{`${state.drink[3].ratio}ml`}</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="first-hose">호스 선택</InputLabel>
                    <Select
                      name="fourth"
                      value={hose.fourth}
                      onChange={handleChange}
                    >
                      <MenuItem value={0}>1번</MenuItem>
                      <MenuItem value={1}>2번</MenuItem>
                      <MenuItem value={2}>3번</MenuItem>
                      <MenuItem value={3}>4번</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <PrettoSlider
                  className={classes.slider}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={
                    state.drink[3].ratio ? Number(state.drink[3].ratio) : 0
                  }
                  onChange={changevalue3}
                  step={15}
                  min={0}
                  max={150}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 이하 모달 목록들 */}
            {/* 제조 완료를 알리는 모달 */}
            <SimpleModal
        open={modalState.error}
        text={"레시피 가져오기를 실패했어요!"}
        subText={"홈으로 돌아갈까요?"}
        type="canceled"
        buttonYes={buttonComplete}
        buttonText="홈으로!"
      />
      {/* 제조 전 확인을 위한 모달 */}
      <SimpleModal
        open={modalState.isConfirmed}
        text={"칵테일을 만들까요?"}
        subText={"(비율 및 호스 설정 확인하셨나요?)"}
        type="question"
        buttonType="yesNo"
        buttonYes={buttonMake}
        buttonNo={handleConfirmedClose}
      />
      {/* 제조 중을 알리는 모달 */}
      {/* 다른 조작을 할 수 없도록 함 */}
      <LottieModal
        open={modalState.making}
        title={state.title}
        text={"칵테일을 만드는 중이에요"}
        subText={"맛있게 만들어 드릴게요!"}
      />
      {/* 제조 완료를 알리는 모달 */}
      <SimpleModal
        open={modalState.isComplete}
        text={"맛있는 칵테일이 완성되었어요!"}
        subText={"홈으로 돌아갈까요?"}
        type="checked"
        buttonType="yesNo"
        buttonYes={buttonComplete}
        buttonNo={handleCompleteClose}
        buttonText="홈으로!"
      />
      {/* 호스가 중복이 되었을 경우 */}
      <SimpleModal
        open={modalState.isDuplicated}
        type="canceled"
        text={"설정을 다시 확인해주세요!"}
        subText={"중복된 호스가 있는것 같네요?"}
        buttonYes={buttonDuplicated}
      />
    </div>
  );
}
