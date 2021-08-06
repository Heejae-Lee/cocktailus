// 스타일 관련
import withRoot from "../../components/withRoot";
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import AppHeader from "../../layout/Header";
import AppFooter from "../../layout/Footer";
import Typography from "../../components/Typography";
import RecipeDetailIntro from "../../components/RecipeDetailIntro/";
import Comment from "../../components/Comment";
import CommentTextField from "../../components/CommentTextField/";

function RecipeDetail() {
  const classes = useStyles();
  const member = JSON.parse(window.localStorage.getItem("memberData"));

  const [state, setState] = React.useState({
    id: null,
    title: "",
    tag: "",
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
    const data = {
      id: 0,
      title: "보라색 포도주",
      tag: "보라|포도|단맛|무알콜",
      drink: "포도 주스|사이다|진|보드카",
      drink_ratio: "135ml|45ml|60ml|150ml",
      memberName: "난보라빛이좋아",
      content: `난 보랏빛이 좋아요.
      왜냐하면 보랏빛이 좋기때문인데 왜 보라색이 좋냐고 말씀하신다면 그건 그냥 보라색이 좋아서 좋다고 했을 뿐
      난 보라색을 믿었었던 만큼 내 색감도 믿었기에 난 아무런 부담없이 널 내 웹사이트에 적용 시켜줬고
      그런 적용이 있은후로부터 우리는 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것뿐인데
      그런 스타일이 어디부터 잘못됐었는지 난 알 수 없는 예감에 조금씩 빠져들고 있을때쯤
      넌 나보다 내 마진에게 관심을 더 보이며 컴포넌트를 밀어내던 그 어느날`,
      created: "2021-08-05",
    };

    const tag = data.tag.split("|").reduce((acc, cur) => {
      acc = acc + `#${cur} `;
      return acc;
    }, "");
    //console.log(tag);
    const drink = data.drink.split("|").map((li) => {
      return li;
    });
    const drink_ratio = data.drink_ratio.split("|").map((li) => {
      return Number(li.replace("ml", "")) / 15;
    });
    setState({
      id: data.id,
      title: data.title,
      tag: tag,
      drink: drink,
      drink_ratio: drink_ratio,
      memberName: data.memberName,
      content: data.content,
      created: data.created,
      like: false,
      likeImg: "no_like.png",
      likeValue: 0,
    });
  }, []);
  
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
              {state.title}
            </Typography>
            <Typography variant="body2" align="center">
              {state.tag}
            </Typography>
          </Container>
        </React.Fragment>
        <RecipeDetailIntro data={state} />
        {/* 코멘트 입력 컴포넌트, 로그인 정보가 저장되어있을 경우에만 보임 */}
        {member && <CommentTextField memberName={member.name} />}
        <Comment articleId={state.id} />
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
