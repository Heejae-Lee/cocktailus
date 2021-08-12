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
import recipes from "../../asset/recipe/recipe";
// 기능 관련
import { NavLink as RouterLink } from "react-router-dom";

export default function BasicCocktails() {
  const classes = useStyles();
  const lastIndex = recipes.length / 6 - 1;
  const [state, setState] = React.useState({
    index: 0,
    list: recipes.slice(0, 6),
  });

  const clickPrev = () => {
    if (state.index > 0) {
      const newIndex = (state.index - 1) * 6;
      setState({
        index: state.index - 1,
        list: recipes.slice(newIndex, newIndex + 6),
      });
    }
    console.log(state);
  };

  const clickNext = () => {
    if (state.index < lastIndex) {
      const newIndex = (state.index + 1) * 6;
      setState({
        index: state.index + 1,
        list: recipes.slice(newIndex, newIndex + 6),
      });
    }
  };

  return (
    <div className={classes.root}>
      <Header prev={true} to="/"/>
      <div className={classes.listWrapper}>
        <Button className={classes.btnLayout} onClick={clickPrev}>
          <ArrowBackIosIcon className={classes.nextIcon} />
        </Button>
        <div className={classes.cards}>
          {state.list.map((el, index) => {
            return (
              <Link
                component={RouterLink}
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.Link}
                to={`/basic-detail/${el.id}`}
              >
                <RecipeCard data={el} key={index} />
              </Link>
            );
          })}
        </div>
        <Button className={classes.btnLayout} onClick={clickNext}>
          <ArrowForwardIosIcon className={classes.nextIcon} />
        </Button>
      </div>
    </div>
  );
}
