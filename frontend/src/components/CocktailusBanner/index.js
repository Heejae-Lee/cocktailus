// 스타일 관련
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
// 컴포넌트 관련
import React from 'react';
import Typography from '../Typography';
import CocktailusBannerLayout from './CocktailusBannerLayout/';

// 기능 관련
import PropTypes from 'prop-types';

// 배너의 이미지는 unsplash에서 url을 통하여 가져옴
const backgroundImage =
  'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1400&q=80';

function CocktailusBanner(props) {
  const { classes } = props;

  return (
    <CocktailusBannerLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      {/* main title */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        COCKTAIL.US
      </Typography>
      {/* sub title */}
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        오늘 칵테일러스와 칵테일 한잔🍹 어떠세요?
      </Typography>
      {/* 세부 소개 메시지 */}
      <Typography variant="body2" color="inherit" className={classes.more}>
      ✨A cup of wonderful experience for you that Cocktailus offers✨
      </Typography>
    </CocktailusBannerLayout>
  );
}

CocktailusBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CocktailusBanner);
