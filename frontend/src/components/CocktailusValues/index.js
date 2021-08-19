import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from './styles';
import Typography from '../Typography';

function CocktailusValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={process.env.PUBLIC_URL + '/images/appCurvyLines.png'}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + "images/cuba-libre.png"}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                당신을 위한 레시피
              </Typography>
              <span style={{fontSize: 16, textAlign: 'center'}}>
                {`칵테일 만드는 법을 모르세요?`}<br/>
                {'😎걱정할 필요가 없어요!'}<br/>
                {'칵테일러스가 당신이 좋아할만한'}<br/>
                {'칵테일을 추천할게요👍'}
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + "images/coffee-machine.png"}
                alt="machine"
              />
              <Typography variant="h6" className={classes.title}>
                새로운 칵테일 제조방식
              </Typography>
              <span style={{fontSize: 16, textAlign: 'center'}}>
                {`오늘 하루 많이 힘드셨나요?`}<br/>
                {'😥그런 당신을 위해서'}<br/>
                {'칵테일러스가 당신이 쉬는동안'}<br/>
                {'칵테일을 만들어드려요✌'}
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + "images/community.png"}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                모두와 함께하는 레시피
              </Typography>
              <span style={{fontSize: 16, textAlign: 'center'}}>
                {`당신의 칵테일을 나누고 싶진 않나요?`}<br/>
                {'👏칵테일러스와 함께'}<br/>
                {'칵테일을 좋아하는 ✨US✨와'}<br/>
                {'레시피를 공유해봐요👨‍👨‍👧‍👦'}
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

CocktailusValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CocktailusValues);
