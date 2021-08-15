// 스타일 관련
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
// 컴포넌트 관련
import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "../Typography/";
import Button from "../../components/Button";
import ImgMediaCard from "../../components/RecipePreview";
// 기능 관련
import PropTypes from "prop-types";
import { NavLink as RouterLink } from 'react-router-dom';

function CocktailusHotItems(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Box style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        {/* 높은 트렌드 칵테일 추천 타이틀 */}
        <Typography
          variant="h4"
          marked="left"
          className={classes.title}
        >
          트렌디한 칵테일
        </Typography>
        <Button
          component={RouterLink}
          color="secondary"
          size="large"
          className={classes.btn}
          variant="contained"
          to="/recipe/list/popular"
        >
            더 보러가기
          </Button>
        </Box>
        {/* 트렌디한 칵테일 리스트 */}
        <Grid className={classes.grid} container spacing={10} direction="row">
            <ImgMediaCard />
            <ImgMediaCard />
            <ImgMediaCard />
        </Grid>
      </Container>
    </section>
  );
}

CocktailusHotItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CocktailusHotItems);
