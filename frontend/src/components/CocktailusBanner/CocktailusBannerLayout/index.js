// 스타일 관련
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import styles from './styles';
// 컴포넌트 관련
import React from 'react';
import Container from '@material-ui/core/Container';
// 기능 관련
import PropTypes from 'prop-types';

function CocktailusBannerLayout(props) {
  const { backgroundClassName, children, classes } = props;

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
