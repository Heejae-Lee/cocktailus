// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default function MainMenus() {
  const classes = useStyles();
  const menus = [
    {
      menuName: "기본 칵테일",
      menuImg: "/images/cocktail.png",
    },
    {
      menuName: "나의 북마크",
      menuImg: "/images/cocktails.png",
    },
    {
      menuName: "청소",
      menuImg: "/images/water.png",
    },
  ];

  return (
    <Grid className={classes.root} item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
        {menus.map((value, index) => (
          <Grid key={index} item>
            <Button className={classes.menuButton}>
              <Paper className={classes.paper}>
                <img
                  className={classes.menuImg}
                  src={process.env.PUBLIC_URL + value.menuImg}
                  alt={'value.menuName'}
                />
                <span>{value.menuName}</span>
              </Paper>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
