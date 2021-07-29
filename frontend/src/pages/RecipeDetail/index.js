import withRoot from "../../components/withRoot";
import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import AppHeader from "../../layout/Header";
import AppFooter from "../../layout/Footer";
import Typography from "../../components/Typography";
import RecipeDetailIntro from "../../components/RecipeDetailIntro/";
import Comment from "../../components/Comment";
import CommentTextField from "../../components/CommentTextField/";
import useStyles from "./styles";
import { Divider } from "@material-ui/core";

function RecipeDetail() {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <AppHeader />
        <React.Fragment>
          <Container className={classes.title}>
            <Typography
              variant="h3"
              gutterBottom
              marked="center"
              align="center"
            >
              CockTail Recipe
            </Typography>
            <Typography variant="body2" align="center">
              {"보라보라 빔을 받아라! 보랏빛 술!"}
            </Typography>
          </Container>
        </React.Fragment>
        <RecipeDetailIntro />
        <CommentTextField />
        <Comment />
        <div style={{ width: "100%", height: "50px" }} />
        <Divider variant="inset" />
        <div style={{ width: "100%", height: "50px" }} />
        <Typography variant="h4" gutterBottom marked="center" align="center">
          {"보고계신 음료와 비슷한 레시피"}
        </Typography>
      </Container>
      <AppFooter />
    </Box>
  );
}

export default withRoot(RecipeDetail);
