// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Link from "@material-ui/core/Link";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import Header from "../../layout/Header";
import RecipeCard from "../../components/RecipeCard";
import SimpleModal from "../../components/SimpleModal";
// 기능 관련
import { useHistory, NavLink as RouterLink } from "react-router-dom";
import { recipeAPI } from "../../utils/axios";

export default function MyCocktails() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    index: 0,
    lastIndex: -1,
    list: [],
  });
  const [modalState, setModalState] = React.useState({
    open: false,
    type: "",
    text: "",
    subText: "",
  });
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    // axios에서 레시피 가져오기
    const memberData = JSON.parse(window.localStorage.getItem("memberData"));
    if (memberData !== null) {
      recipeAPI
        .getRecipes(memberData)
        .then((res) => {
          //console.log(res);
          if (res.data) {
            // 받아온 레시피를 recipes state에 저장
            // 현재 data 는 내가 업로드한 레시피 + 좋아요 한 레시피
            // 중복이 있을 수 있음
            const data = res.data["uploaded-recipe-articles"].concat(
              res.data["liked-recipe-articles"]
            );

            // 중복 제거
            const myRecipes = data.reduce((acc, cur) => {
              if (acc.findIndex(({ id }) => id === cur.id) === -1) {
                acc.push(cur);
              }
              return acc;
            }, []);

            setRecipes(myRecipes);

            // 받아온 레시피 토대로 state 갱신
            const newLastIndex = myRecipes.length - 6;
            const newList = myRecipes.slice(0, 6);
            let newState = Object.assign({}, state, {
              lastIndex: newLastIndex,
              list: newList,
            });

            setState(newState);
          } else {
            // 데이터를 가져올 수 없음
            const newModalState = {
              open: true,
              type: "canceled",
              text: "서버가 불안정한것 같아요.",
              subText: "관리자에게 문의해주세요",
            };
            setModalState(newModalState);
          }
        })
        .catch((err) => {
          //console.log(err);

          // 실패 모달 출력
          const newModalState = {
            open: true,
            type: "canceled",
            text: "시스템에 문제가 있는것 같아요.",
            subText: "관리자에게 문의해주세요",
          };
          setModalState(newModalState);
        });
    } else {
      const newModalState = {
        open: true,
        type: "warning",
        text: "로그인이 필요한 서비스입니다!",
        subText: "로그인을 부탁드려요",
      };
      setModalState(newModalState);
    }
  }, []);

  // 문제 발생시 모달 버튼, 클릭하면 홈으로 이동
  const buttonOK = () => {
    history.push("/");
  };

  const clickPrev = () => {
    if (state.index > 5) {
      const newIndex = state.index - 6;
      const newList = recipes.slice(newIndex, newIndex + 6);
      let newState = Object.assign({}, state, {
        index: newIndex,
        list: newList,
      });
      setState(newState);
    }
  };

  const clickNext = () => {
    if (state.index < state.lastIndex) {
      const newIndex = state.index + 6;
      const newList = recipes.slice(newIndex, newIndex + 6);
      let newState = Object.assign({}, state, {
        index: newIndex,
        list: newList,
      });
      setState(newState);
    }
  };

  return (
    <div className={classes.root}>
      <Header prev={true} to="/" />
      <div className={classes.listWrapper}>
        <Button className={classes.btnLayout} onClick={clickPrev}>
          {state.lastIndex > 0 && (
            <ArrowBackIosIcon className={classes.nextIcon} />
          )}
        </Button>
        <div className={classes.cards}>
          {state.list.map((el, index) => {
            return (
              <Link
                key={index}
                component={RouterLink}
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.Link}
                to={`/bookmark-detail/${el.id}`}
              >
                <RecipeCard data={el} img={el.imageURL} />
              </Link>
            );
          })}
        </div>
        <Button className={classes.btnLayout} onClick={clickNext}>
          {state.lastIndex > 0 && (
            <ArrowForwardIosIcon className={classes.nextIcon} />
          )}
        </Button>
      </div>

      <SimpleModal
        open={modalState.open}
        type={modalState.type}
        text={modalState.text}
        subText={modalState.subText}
        buttonYes={buttonOK}
      />
    </div>
  );
}
