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
// 기능 관련
import { NavLink as RouterLink } from "react-router-dom";

export default function MyCocktails() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    index: 0,
    lastIndex: -1,
    list: [],
  });

  React.useEffect(() => {
    // axios에서 레시피 가져오기
    console.log();
  }, []);

  const clickPrev = () => {
    if (state.index > 0) {
      const newIndex = (state.index - 1) * 6;
      setState({
        index: newIndex,
        lastIndex: state.lastIndex,
        list: [],
      });
    }
  };

  const clickNext = () => {
    if (state.index < state.lastIndex) {
      const newIndex = (state.index + 1) * 6;
      setState({
        index: newIndex,
        lastIndex: state.lastIndex,
        list: [],
      });
    }
  };

  return (
    <div className={classes.root}>
      <Header prev={true} />
      <div className={classes.listWrapper}>
        {state.lastIndex > 0 && (
          <Button className={classes.btnLayout} onClick={clickPrev}>
            <ArrowBackIosIcon className={classes.nextIcon} />
          </Button>
        )}
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
                <RecipeCard data={el} />
              </Link>
            );
          })}
        </div>
        {state.lastIndex > 0 && (
          <Button className={classes.btnLayout} onClick={clickNext}>
            <ArrowForwardIosIcon className={classes.nextIcon} />
          </Button>
        )}
      </div>
    </div>
  );
}
