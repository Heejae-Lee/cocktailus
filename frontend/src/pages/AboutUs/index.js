import withRoot from '../../components/withRoot';
import animationData from "../../lotties/character-walk.json";
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '../../components/Typography';
import AppHeader from '../../layout/Header';
import AppFooter from '../../layout/Footer';
import useStyles from './styles'
import Lottie from "react-lottie";

function AboutUs() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
      <AppHeader />
      <Container className={classes.root}>
        <Box mt={7}>
          <Typography variant="h2" gutterBottom marked="center" align="center">
            About Us
          </Typography>
          
      <Lottie options={defaultOptions}
              height={300}
              width={500}/>
              <Typography variant="h6" align="center" style={{ textDecoration: "overline", marginTop: 10}}>
                {"안녕하세요 Cocktail.Us 입니다. "}
              </Typography>
          <Typography variant="body1" align="center">
            {"저희와 칵테일 한잔 하시겠어요?"}
          </Typography>
          
            <Typography variant="h6" align="center" style={{marginTop: 40}}>이희재(FE)</Typography>
            <Typography variant="subtitle1" align="center">
              여기 칵테일 한잔 주세요! 참 알콜은 빼고요!
            </Typography>
            <Typography variant="subtitle2" align="center">gmlwo1340@naver.com</Typography>
            <Typography variant="h6" align="center">.</Typography>
            <Typography variant="h6" align="center">방지환(FE)</Typography>
            <Typography variant="subtitle1" align="center">
              모히또에서 몰디브 한잔 어떠세요?
            </Typography>
            <Typography variant="subtitle2" align="center">qkdwlghks00@gmail.com</Typography>
            <Typography variant="h6" align="center">.</Typography>
            <Typography variant="h6" align="center">임규태(BE)</Typography>
            <Typography variant="subtitle1" align="center">
              무슨말을 해야할까!
            </Typography>
            <Typography variant="subtitle2" align="center">lktgt15@gmail.com</Typography>
            <Typography variant="h6" align="center">.</Typography>
            <Typography variant="h6" align="center">신기호(EM)</Typography>
            <Typography variant="subtitle1" align="center">
              무슨말을 해야할까!
            <Typography variant="subtitle2" align="center">rlgh944@naver.com</Typography>
            </Typography>
            <Typography variant="h6" align="center">.</Typography>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(AboutUs);