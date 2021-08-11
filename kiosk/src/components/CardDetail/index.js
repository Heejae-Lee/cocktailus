// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Typography from "../../components/Typography";
import Button from "@material-ui/core/Button";
import { PrettoSlider } from "../PrettoSlider";
import recipes from "../../asset/recipe/recipe";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
// 기능 관련
import { hardwareAPI } from '../../utils/axios';

export default function CardDetail(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    title: "",
    drink: [],
    image: "https://post-phinf.pstatic.net/MjAxOTAxMTBfMjk2/MDAxNTQ3MDk5NTI0NTcw.nRDPstqlbUkdrc7hisU0ykCk1HyW5QGbEfukf2_pu3Eg.0lqUH00w3zpjp222n3aKc1QrtXYwQMWQk48Q5osx26cg.JPEG/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg?type=w1200"
  });
  const [hose, setHose] = React.useState({
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
  });

  // props를 통하여 칵테일 데이터를 로컬에서 가져올지 서버에서 가져올지 결정함
  React.useEffect(() => {
    if (props.variant !== "basic") {
      const recipeData = props.data;
      const drinkList = recipeData.drink.split("|");
      const drinkRatioList = recipeData.drinkRatio.split("|").splice("");
      const drink = drinkList.map((el, index) => {
        return {
          drink: el,
          ratio: Number(drinkRatioList[index].replace("ml", "")),
        };
      });

      setState({
        title: recipeData.title,
        drink: drink,
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
        image: process.env.PUBLIC_URL + "/images/" + basic.image
      });
    }
  }, [props]);

  // 호스 선택박스의 값이 바뀔떄마다 호출됨
  const handleChange = (e) => {
    // setHose(event.target.value);
    let newHose = Object.assign({}, hose);
    newHose = {
      ...newHose,
      [e.target.name] : e.target.value
    }
    
    setHose(newHose);
  };

  // 음료 제조버튼을 누르면 호출되는 함수
  const makeDrink = () => {
    const drinkCount = state.drink.length;
    let flag = [false, false, false, false];
    let validate = true;
    let drink = Object.assign({}, state.drink);

    // 각 호스의 중복 여부 확인
    if ( drinkCount > 0 ){
      if (flag[hose.first])    validate = false;
      else {
        drink[0].order = hose.first;
        flag[hose.first] = true;
      }
    } 
    if ( drinkCount > 1 ){
      if (flag[hose.second])    validate = false;
      else {
        drink[1].order = hose.second;    
        flag[hose.second] = true;
      }
    } 
    if ( drinkCount > 2 ){
      if (flag[hose.third])    validate = false;
      else {
        drink[2].order = hose.third;    
        flag[hose.third] = true;
      }
    } 
    if ( drinkCount > 3 ){
      if (flag[hose.fourth])    validate = false;
      else {
        drink[3].order = hose.fourth;        
        flag[hose.fourth] = true;
      }
    }

    // 중복이 없으면 칵테일 제작
    if (validate){
      const payload = {
        drink: drink
      };
      hardwareAPI.make(payload);
    } else {
      alert('선택된 호스의 중복을 확인해주세요');
    }
  };

  // 슬라이더를 바꿀때마다 호출되는 함수
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
              src={
                state.image
              }
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
                <div className={classes.drinkName}>
                  <Typography variant="h5">{state.drink[0].drink}</Typography>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "20px" }}
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
                <div className={classes.drinkName}>
                  <Typography variant="h5">{state.drink[1].drink}</Typography>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "20px" }}
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
                <div className={classes.drinkName}>
                  <Typography variant="h5">{state.drink[2].drink}</Typography>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "20px" }}
                  >{`${state.drink[2].ratio}ml`}</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="first-hose">호스 선택</InputLabel>
                    <Select
                      name="first"
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
                <div className={classes.drinkName}>
                  <Typography variant="h5">{state.drink[3].drink}</Typography>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "20px" }}
                  >{`${state.drink[3].ratio}ml`}</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="first-hose">호스 선택</InputLabel>
                    <Select
                      name="first"
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
    </div>
  );
}
