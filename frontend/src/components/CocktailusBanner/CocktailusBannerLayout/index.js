// 스타일 관련
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import styles from './styles';
// 컴포넌트 관련
import React from 'react';
import Container from '@material-ui/core/Container';
// 기능 관련
import PropTypes from 'prop-types';

// 유튜브 영상
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

function CocktailusBannerLayout(props) {
  const { backgroundClassName, children, classes } = props;

  const isPc = useMediaQuery({
    query: "(min-width:1020px)",
  });
  const isMobile = useMediaQuery({
    maxWidth: 1020, minWidth:600,
  });

  const isVerySmall = useMediaQuery({
    query: "(max-width:600px)",
  });

  const optsPC = {
    height: "548",
    width: "972",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      // mute: 1,
    }
  };
  const optsMobile = {
    height: "360",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  };
  const optsSmall = {
    height: "216",
    width: "384",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      // mute: 1,
    }
  };
  
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* 배너 이미지 */}
        <img
          src={process.env.PUBLIC_URL + "images/productHeroWonder.png"}
          alt="wonder"
          width="147"
          height="80"
        />
        {children}
        {isPc &&
          <YouTube
            className={classes.video}
            videoId={"T6K2UBvN3Ao"}
            opts={optsPC}
            onReady={(event) => {
              event.target.setVolume(15);
            }}
            onEnd={(event) => {
              event.target.playVideo();
            }}
          />}
        {isMobile &&
          <YouTube
            className={classes.video}
            videoId={"T6K2UBvN3Ao"}
            opts={optsMobile}
            onReady={(event) => {
              event.target.setVolume(15);
            }}
            onEnd={(event) => {
              event.target.playVideo();
            }}
          />}
        {isVerySmall &&
        <YouTube
          className={classes.video}
          videoId={"T6K2UBvN3Ao"}
          opts={optsSmall}
          onReady={(event) => {
            event.target.setVolume(15);
          }}
          onEnd={(event) => {
            event.target.playVideo();
          }}
        />}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
        {/* 배너 이미지 내부 하단 아래쪽 방향 화살표 */}
        <img
          className={classes.arrowDown}
          src={process.env.PUBLIC_URL + "images/productHeroArrowDown.png"}
          height="16"
          width="12"
          alt="arrow down"
        />
      </Container>
    </section>
  );
}

CocktailusBannerLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CocktailusBannerLayout);
