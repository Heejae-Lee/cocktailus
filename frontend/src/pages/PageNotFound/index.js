// 스타일 관련
import withRoot from "../../components/withRoot";
import animationData from "../../lotties/404-not-found.json";
// 컴포넌트 관련
import React from "react";
import Container from "@material-ui/core/Container";
import AppFooter from "../../layout/Footer";
import AppHeader from "../../layout/Header";
// 기능 관련
import Lottie from "react-lottie";

function PageNotFound() {

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
      <Container style={{marginTop: "100px"}}>
      <Lottie options={defaultOptions}
              height={400}
              width={400}/>
              <h1 align="center">...404 Error...</h1>
              <h1 align="center">관리자에게 문의해주시길 바랍니다...😥</h1>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(PageNotFound);
