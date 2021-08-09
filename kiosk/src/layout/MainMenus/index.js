// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// 기능 관련
import { NavLink as RouterLink } from "react-router-dom";

export default function MainMenus() {
  const classes = useStyles();
  const menus = [
    {
      menuName: "기본 칵테일",
      menuImg: "/images/cocktail.png",
      route: "/basic-cocktails",
    },
    {
      menuName: "나의 북마크",
      menuImg: "/images/cocktails.png",
      route: "/my-cocktails",
    },
    {
      menuName: "청소",
      menuImg: "/images/water.png",
      route: "/basic-cocktails",
    },
  ];

  return (
    <Grid className={classes.root} item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
        {menus.map((value, index) => (
          <Grid key={index} item>
            <Button className={classes.menuButton}>
              <Link
                component={RouterLink}
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
                to={value.route}
              >
                <Paper className={classes.paper}>
                  <img
                    className={classes.menuImg}
                    src={process.env.PUBLIC_URL + value.menuImg}
                    alt={value.menuName}
                  />
                  <span className={classes.menuName}>{value.menuName}</span>
                </Paper>
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
