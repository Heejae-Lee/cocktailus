// 스타일 관련
import { withStyles } from "@material-ui/core/styles";
import { purple, red, blue } from "@material-ui/core/colors";
import useStyles from "./styles";
import "./styles.css";
// 컴포넌트 관련
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Button, Divider, Paper, ButtonBase } from "@material-ui/core";
import Typography from "../../components/Typography";
import { recipeAPI } from "../../utils/recipeAPI";
import axios from "axios";
import AlertDialog from "../ModalAlert";
import { useHistory } from "react-router";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const PutButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: blue[600],
    "&:hover": {
      backgroundColor: blue[800],
    },
  },
}))(Button);

const DeleteButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[600],
    "&:hover": {
      backgroundColor: red[900],
    },
  },
}))(Button);

const Modal = ({ src, alt, onClose, caption }) => {
  return (
    <div className="modal">
      <img className="modal-content" src={src} alt={alt} onClick={onClose} />
      {caption.length > 0 && <div className="caption">{caption}</div>}
    </div>
  );
};

// 레시피의 디테일한 정보를 표시하는 컴포넌트
export default function RecipeDetailIntro(props) {
  const classes = useStyles();
  const history = useHistory();

  const member = JSON.parse(window.localStorage.getItem("memberData"));

  const [open, setOpen] = useState(false); // 삭제 모달
  const [imageOpen, setImageOpen] = useState(false); // 이미지 모달
  const [state, setState] = useState({
    drink: [],
    drink_ratio: [],
    memberName: "",
    content: "",
    created: "",
    liked: true,
    likeImg: props.likeImg,
    likeCount: 0,
    imageURL: "",
  });

  useEffect(() => {
    if (props.data.id !== null) {
      const drink = props.data.drink.filter((el) => el !== "");
      const drink_ratio = props.data.drink_ratio.filter((el) => el !== 0);

      setState({
        drink: drink,
        drink_ratio: drink_ratio,
        memberName: props.data.memberName,
        content: props.data.content,
        created: props.data.created,
        liked: props.data.liked,
        likeImg: props.data.likeImg,
        likeCount: props.data.likeCount,
        imageURL: props.data.imageURL,
      });
    }
  }, [props]);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const ShowRecipeDrinks = () => {
    const recipeData = [];
    for (let i = 0; i < state.drink.length; i++) {
      recipeData.push({
        drink: state.drink[i],
        drink_ratio: state.drink_ratio[i],
      });
    }
    return (
      <div className={classes.ratioWrapper}>
        {recipeData.map((data, index) => (
          <div
            style={{
              display: "flex",
              marginBottom: "6px",
              alignItems: "center",
            }}
            key={index}
          >
            <div style={{ marginRight: "20px" }}>
              <Typography variant="subtitle1">{data.drink}</Typography>
            </div>
            <div>
              <Typography
                variant="body2"
                style={{ fontWeight: "bold" }}
              >{`${data.drink_ratio} ml`}</Typography>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const clickLike = () => {
    recipeAPI.likeRequestInDetail(props.data.id, history);
    if (state.liked) {
      setState({
        ...state,
        liked: false,
        likeImg: "no_like.png",
        likeCount: state.likeCount - 1,
      });
    } else {
      setState({
        ...state,
        liked: true,
        likeImg: "like.png",
        likeCount: state.likeCount + 1,
      });
    }
  };

  const deleteRecipe = () => {
    axios
      .delete(`/recipe-articles/${props.data.id}`, {
        headers: { "Auth-Token": `${member.token}` },
      })
      .then(() => {
        console.log("delete success");
        history.push("/recipe");
      })
      .catch((err) => {
        console.log("delete fail");
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <AlertDialog
        open={open}
        delete={deleteRecipe}
        closeModal={closeModal}
        title="레시피 삭제"
        content="정말 삭제하시겠습니까?"
      />
      <Paper className={classes.paper}>
        <div className={classes.recipeInfoWrapper}>
          <ButtonBase className={classes.image}>
            <img
              className={classnames(classes.img, "detailScale")}
              alt="cocktailImg"
              src={state.imageURL}
              onClick={() => setImageOpen(true)}
            />
            {imageOpen && (
              <Modal
                src={state.imageURL}
                alt="cocktail-image"
                caption="이미지를 클릭하면 닫힙니다."
                onClose={() => setImageOpen(false)}
              />
            )}
            {/* 레시피 대표 이미지 */}
          </ButtonBase>
          <div className={classes.detailBody}>
            <div className={classes.detail}>
              <Typography
                className={classes.subTitle}
                gutterBottom
                variant="h6"
                marked="left"
              >
                제조법
              </Typography>
              {/* 제조법에 대한 정보(술의 정보 및 비율) */}
              <ShowRecipeDrinks />

              {/* 레시피 제작자 및 제작일, 좋아요 개수 표시 */}
              <div className={classes.info}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="subtitle2"
                    style={{ textDecoration: "overline" }}
                  >
                    {state.memberName}
                  </Typography>
                  <Typography variant="subtitle2">{state.created}</Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    className={classnames(classes.likeImg, "scaleLike")}
                    src={process.env.PUBLIC_URL + "/images/" + state.likeImg}
                    alt="좋아요 이미지"
                    onClick={clickLike}
                  />
                  <Typography className={classes.bottomInfo} variant="h6">
                    {state.likeCount}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider className={classes.divider} />

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
          <Typography variant="body1" gutterBottom className={classes.content}>
            {state.content}
          </Typography>
        </div>
        <div className={classes.right}>
          {/* 글 작성자면 보이도록 */}
          {member !== null && member.name === state.memberName && (
            <div>
              <DeleteButton className={classes.button} onClick={openModal}>
                삭제
              </DeleteButton>
              <PutButton
                className={classes.button}
                onClick={() => history.push(`/recipe/modify/${props.data.id}`)}
              >
                수정
              </PutButton>
            </div>
          )}
          <ColorButton
            className={classes.button}
            onClick={() => history.push("/recipe")}
          >
            뒤로가기
          </ColorButton>
        </div>
      </Paper>
    </div>
  );
}
