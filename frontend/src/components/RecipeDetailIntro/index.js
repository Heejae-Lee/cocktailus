// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "../../components/Typography";

// 레시피의 디테일한 정보를 표시하는 컴포넌트
export default function RecipeDetailIntro(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    drink: [],
    drink_ratio: [],
    memberName: "",
    content: "",
    created: "",
    like: true,
    likeImg: "no_like.png",
    likeValue: 0,
  });

  React.useEffect(() => {
    // 더미 데이터 적용
    // 실제 BE로부터 데이터 받아오는 것으로 교체 예정
    const dummyData = {
      title: "보라색 포도주",
      tag: "보라|포도|단맛|무알콜",
      drink: "포도 주스|사이다|진|보드카",
      drink_ratio: "30ml|45ml|60ml|150ml",
      memberName: "난보라빛이좋아",
      content: `난 보랏빛이 좋아요.
      왜냐하면 보랏빛이 좋기때문인데 왜 보라색이 좋냐고 말씀하신다면 그건 그냥 보라색이 좋아서 좋다고 했을 뿐
      난 보라색을 믿었었던 만큼 내 색감도 믿었기에 난 아무런 부담없이 널 내 웹사이트에 적용 시켜줬고
      그런 적용이 있은후로부터 우리는 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것뿐인데
      그런 스타일이 어디부터 잘못됐었는지 난 알 수 없는 예감에 조금씩 빠져들고 있을때쯤
      넌 나보다 내 마진에게 관심을 더 보이며 컴포넌트를 밀어내던 그 어느날`,
      created: "2021-08-05",
    };

    const tag = dummyData.tag.split("|").reduce((acc, cur) => {
      acc = acc + `#${cur} `;
      return acc;
    }, "");
    const drink = dummyData.drink.split("|").map((li) => {
      return li;
    });
    const drink_ratio = dummyData.drink_ratio.split("|").map((li) => {
      return Number(li.replace("ml", "")) / 15;
    });
    //console.log(tag);
    //console.log(drink);
    //console.log(drink_ratio)
    setState({
      drink: drink,
      drink_ratio: drink_ratio,
      memberName: dummyData.memberName,
      content: dummyData.content,
      created: dummyData.created,
      like: false,
      likeImg: "no_like.png",
      likeValue: 0,
    });
    //console.log(state);
  }, []);

  const ShowRecipeDrinks = () => {
    const recipeData = [];
    for (let i = 0; i < state.drink.length; i++) {
      recipeData.push({
        drink: state.drink[i],
        drink_ratio: state.drink_ratio[i],
      });
    }

    const IterRatio = (props) => {
      const iterImg = [];
      for (let i = 0; i < props.num; i++) {
        iterImg.push(
          <img
            key={i}
            src={process.env.PUBLIC_URL + "/images/tequila.png"}
            style={{ width: 40, height: 40 }}
            alt="비율"
          />
        );
      }
      return iterImg;
    };

    return (
      <div style={{ height: 230 }}>
        {recipeData.map((data) => (
          <Grid item container direction="row" spacing={2}>
            <Grid xs={3} item>
              <Typography variant="subtitle1">{data.drink}</Typography>
            </Grid>
            <Grid xs={9} item>
              <IterRatio num={data.drink_ratio} />
            </Grid>
          </Grid>
        ))}
      </div>
    );
  };

  const clickLike = () => {
    setState({ ...state, like: !state.like });
    if (state.like) {
      setState({
        ...state,
        like: false,
        likeImg: "no_like.png",
        likeValue: state.likeValue - 1,
      });
    } else {
      setState({
        ...state,
        like: true,
        likeImg: "like.png",
        likeValue: state.likeValue + 1,
      });
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={4}>
            <ButtonBase className={classes.image}>
              {/* 레시피 대표 이미지 */}
              <img
                className={classes.img}
                alt="cocktailImg"
                src={process.env.PUBLIC_URL + "/images/cocktail.png"}
              />
            </ButtonBase>
          </Grid>
          <Grid className={classes.detailBody} item sm container>
            <Grid item container direction="column" xs={12} >
              <Typography className={classes.subTitle} gutterBottom variant="h6" marked="left">
                제조법
              </Typography>
              {/* 제조법에 대한 정보(술의 정보 및 비율) */}
              <ShowRecipeDrinks />

              {/* 레시피 제작자 및 제작일, 좋아요 개수 표시 */}
              <div className={classes.info}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="subtitle2">{state.memberName}</Typography>
                <Typography variant="subtitle2">{state.created}</Typography>
                </div>
                <div style={{display: 'flex', alignItems:'center'}}>
                <img
                  className={classes.likeImg}
                  src={process.env.PUBLIC_URL + "/images/" + state.likeImg}
                  alt="좋아요 이미지"
                  onClick={clickLike}
                />
                <Typography className={classes.bottomInfo} variant="h6">
                  {state.likeValue}
                </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider}/>

        <div className={classes.discription}>
        
        {/* 레시피의 디테일한 소개를 작성하는 칸 */}
        <Typography
          className={classes.subTitle}
          gutterBottom
          variant="h6"
          marked="left"
        >
          레시피 소개
        </Typography>
        <Typography variant="body1" gutterBottom>
          {state.content}
        </Typography>
        </div>
      </Paper>
    </div>
  );
}
