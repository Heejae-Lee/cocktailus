import withRoot from '../../components/withRoot';
import { withStyles } from '@material-ui/core/styles';

import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

// select
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// custom
import './index.css';
import clsx from 'clsx';
import useStyles from './styles';
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import AppForm from '../../components/AppForm';
import RecipeHeader from '../../layout/RecipeHeader';
import Typography from '../../components/Typography';
import InputImageForm from '../../components/InputImageForm'

// axios
import axios from 'axios'
import { recipeAPI } from "../../utils/recipeAPI";
// Tag
import TagsInput from '../../components/TagsInput';

import { useHistory } from "react-router";



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);


function RecipeModifyForm(match) {
  const classes = useStyles();
  const history = useHistory();
  const recipeId = match.match.params.recipeId;

  // 저장할 정보
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTages] = useState('');
  const [drink1, setDrink1] = useState('');
  const [drink2, setDrink2] = useState('');
  const [drink3, setDrink3] = useState('');
  const [drink4, setDrink4] = useState('');
  const [drinkRatio1, setDrinkRatio1] = useState('');
  const [drinkRatio2, setDrinkRatio2] = useState('');
  const [drinkRatio3, setDrinkRatio3] = useState('');
  const [drinkRatio4, setDrinkRatio4] = useState('');
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  // 이미지 파일 관리용
  const [mainState, setMainState] = useState("initial");
  const [imageUploaded, setImageUploaded] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  // 유저 정보
  const token = JSON.parse(window.localStorage.getItem("memberData")).token
  const userName = JSON.parse(window.localStorage.getItem("memberData")).name

  useEffect(() => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    const getModifyRecipeDetail = () => {
      axios.get(`/recipe-articles/${recipeId}`, {headers: {'Auth-Token': `${member.token}`}})
        .then((res) => {
          if (res.data["recipe-article"].member_name !== member.name) {
            history.push("/error");
            return
          }
          
          console.log("getNotice success");
          const modifyData = res.data["recipe-article"];
          const drinks = modifyData.drink.split('|');
          const drinkRatios = modifyData.drinkRatio.split('|');

          setTitle(modifyData.title);
          setContent(modifyData.content);
          document.getElementById("modify-title").value=modifyData.title;
          document.getElementById("modify-content").value=modifyData.content;

          for (let i=0; i<4; i++) {
            document.getElementById(`modify-drink${i+1}`).value=drinks[i];
          };

          setDrink1(drinks[0]);
          setDrink2(drinks[1]);
          setDrink3(drinks[2]);
          setDrink4(drinks[3]);
          setDrinkRatio1(drinkRatios[0]);
          setDrinkRatio2(drinkRatios[1]);
          setDrinkRatio3(drinkRatios[2]);
          setDrinkRatio4(drinkRatios[3]);
          setSelectedFile(modifyData.imageURL);
          setMainState("uploaded");
          const modifyTag = modifyData.tag.split('|');
          setTages(modifyTag);
        })
        .catch((err) => {
          console.log("getNotice fail");
          console.log(err);
          history.push('/recipe');
        })
      };
    getModifyRecipeDetail();
  }, [recipeId, history])

  function handleSelecetedTags(items) {
    // console.log(111, items);
    setTages(items.map(item => item).join("|"));
    console.log(tags);
  }


  function handleUploadClick(event) { // upload 클릭시 uploaded 상태
    var file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
      var url = reader.result
      console.log("loading");
      setSelectedFile(url)
    };
    reader.readAsDataURL(file);
    console.log("uploaded");
    setMainState("uploaded");
    setImageUploaded(1);
  };

  function imageResetHandler() { // 이미지 제거, 초기상태로 변경
    setMainState("initial");
    setSelectedFile(null);
    setImageUploaded(0);
  };

  const data = {
    title: title,
    content: content,
    drink: drink1+'|'+drink2+'|'+drink3+'|'+drink4,
    drinkRatio: drinkRatio1+'|'+drinkRatio2+'|'+drinkRatio3+'|'+drinkRatio4,
    imageURL: selectedFile,
    tag: tags,
    member_name: userName,
  };

  const onSubmitRecipe = (e) => {
    e.preventDefault();
    recipeAPI.modifyRecipe(data, token, history, recipeId);
  }

  // title 변경
  const titleChange = (e) => {
    setTitle(e.target.value);
  }

  // content 변경
  const contentChange = (e) => {
    setContent(e.target.value);
  }
  // DRINK CHANGE
  const drinkChange1 = (e) => {
    setDrink1(e.target.value);
  }
  const drinkChange2 = (e) => {
    setDrink2(e.target.value);
  }
  const drinkChange3 = (e) => {
    setDrink3(e.target.value);
  }
  const drinkChange4 = (e) => {
    setDrink4(e.target.value);
  }
  // DRINK RATIO CHANGE
  const drinkRatioChange1 = (e) => {
    setDrinkRatio1(e.target.value);
  };
  const drinkRatioChange2 = (e) => {
    setDrinkRatio2(e.target.value);
  };
  const drinkRatioChange3 = (e) => {
    setDrinkRatio3(e.target.value);
  };
  const drinkRatioChange4 = (e) => {
    setDrinkRatio4(e.target.value);
  };
  // Select 닫기
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  // Select 열기
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleOpen4 = () => {
    setOpen4(true);
  };

  return (
    <React.Fragment>
      <Header />
      <RecipeHeader />
        <AppForm>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            레시피 작성
          </Typography>
          <Typography variant="h6" align="center" className={classes.subTitle}>
            여러분만의 레시피를 칵테일러와 공유해주세요!
          </Typography>
        </AppForm>
        <Container className={classes.mainContainer}>
          <Container className={clsx(classes.flexRow, classes.topContainer)}>
            <InputImageForm 
              imageUploaded={imageUploaded}
              imageResetHandler={imageResetHandler}
              handleUploadClick={handleUploadClick}
              selectedFile={selectedFile}
              mainState={mainState}
            />
            <form className={classes.form}>
              <div className={classes.inputText}>
                <TextField
                  id="modify-title"
                  label="Title"
                  style={{ margin: 8}}
                  placeholder="칵테일 이름을 입력해주세요"
                  fullWidth
                  autoFocus
                  onChange={titleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TagsInput
                  style={{ margin: 8}}
                  fullWidth
                  id="modify-tags"
                  name="tags"
                  placeholder="태그 입력 후 엔터키를 눌러주세요"
                  label="Tags"
                  selectedTags={handleSelecetedTags}
                />
                <div>
                  <TextField
                    id="modify-drink1"
                    label="DRINK1"
                    style={{ margin: 8 }}
                    placeholder="DRINK1"
                    onChange={drinkChange1}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                    <FormControl className={classes.formControl}>
                      <InputLabel id="drink-ratio1">DRINK1</InputLabel>
                        <Select
                          labelId="drink-ratio1"
                          id="modify-drink-ratio-1"
                          open={open1}
                          onClose={handleClose1}
                          onOpen={handleOpen1}
                          value={drinkRatio1}
                          onChange={drinkRatioChange1}
                        >
                          <MenuItem value={0}>0ml</MenuItem>
                          <MenuItem value={15}>15ml</MenuItem>
                          <MenuItem value={30}>30ml</MenuItem>
                          <MenuItem value={45}>45ml</MenuItem>
                          <MenuItem value={60}>60ml</MenuItem>
                          <MenuItem value={75}>75ml</MenuItem>
                          <MenuItem value={90}>90ml</MenuItem>
                          <MenuItem value={105}>105ml</MenuItem>
                          <MenuItem value={120}>120ml</MenuItem>
                          <MenuItem value={135}>135ml</MenuItem>
                          <MenuItem value={150}>150ml</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                  <TextField
                    id="modify-drink2"
                    label="DRINK2"
                    style={{ margin: 8 }}
                    placeholder="DRINK2"
                    onChange={drinkChange2}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                    <FormControl className={classes.formControl}>
                      <InputLabel id="drink-ratio2">DRINK2</InputLabel>
                        <Select
                          labelId="drink-ratio2"
                          id="modify-drink-ratio-2"
                          open={open2}
                          onClose={handleClose2}
                          onOpen={handleOpen2}
                          value={drinkRatio2}
                          onChange={drinkRatioChange2}
                        >
                        <MenuItem value={0}>0ml</MenuItem>
                        <MenuItem value={15}>15ml</MenuItem>
                        <MenuItem value={30}>30ml</MenuItem>
                        <MenuItem value={45}>45ml</MenuItem>
                        <MenuItem value={60}>60ml</MenuItem>
                        <MenuItem value={75}>75ml</MenuItem>
                        <MenuItem value={90}>90ml</MenuItem>
                        <MenuItem value={105}>105ml</MenuItem>
                        <MenuItem value={120}>120ml</MenuItem>
                        <MenuItem value={135}>135ml</MenuItem>
                        <MenuItem value={150}>150ml</MenuItem>
                      </Select>
                    </FormControl>
                </div>
                <div>
                  <TextField
                    id="modify-drink3"
                    label="DRINK3"
                    style={{ margin: 8 }}
                    placeholder="DRINK3"
                    onChange={drinkChange3}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                    <FormControl className={classes.formControl}>
                      <InputLabel id="drink-ratio3">DRINK3</InputLabel>
                        <Select
                          labelId="drink-ratio3"
                          id="modify-drink-ratio-3"
                          open={open3}
                          onClose={handleClose3}
                          onOpen={handleOpen3}
                          value={drinkRatio3}
                          onChange={drinkRatioChange3}
                        >
                        <MenuItem value={0}>0ml</MenuItem>
                        <MenuItem value={15}>15ml</MenuItem>
                        <MenuItem value={30}>30ml</MenuItem>
                        <MenuItem value={45}>45ml</MenuItem>
                        <MenuItem value={60}>60ml</MenuItem>
                        <MenuItem value={75}>75ml</MenuItem>
                        <MenuItem value={90}>90ml</MenuItem>
                        <MenuItem value={105}>105ml</MenuItem>
                        <MenuItem value={120}>120ml</MenuItem>
                        <MenuItem value={135}>135ml</MenuItem>
                        <MenuItem value={150}>150ml</MenuItem>
                      </Select>
                    </FormControl>
                </div>
                <div>
                  <TextField
                    id="modify-drink4"
                    label="DRINK4"
                    style={{ margin: 8 }}
                    placeholder="DRINK4"
                    onChange={drinkChange4}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                    <FormControl className={classes.formControl}>
                      <InputLabel id="drink-ratio4">DRINK4</InputLabel>
                        <Select
                          labelId="drink-ratio4"
                          id="modify-drink-ratio-4"
                          open={open4}
                          onClose={handleClose4}
                          onOpen={handleOpen4}
                          value={drinkRatio4}
                          onChange={drinkRatioChange4}
                        >
                        <MenuItem value={0}>0ml</MenuItem>
                        <MenuItem value={15}>15ml</MenuItem>
                        <MenuItem value={30}>30ml</MenuItem>
                        <MenuItem value={45}>45ml</MenuItem>
                        <MenuItem value={60}>60ml</MenuItem>
                        <MenuItem value={75}>75ml</MenuItem>
                        <MenuItem value={90}>90ml</MenuItem>
                        <MenuItem value={105}>105ml</MenuItem>
                        <MenuItem value={120}>120ml</MenuItem>
                        <MenuItem value={135}>135ml</MenuItem>
                        <MenuItem value={150}>150ml</MenuItem>
                      </Select>
                    </FormControl>
                </div>
              </div>
            </form>
          </Container>
            <textarea 
              id="modify-content"
              rows="20" 
              cols="150" 
              placeholder="나만의 칵테일에 대해 소개해주세요!"
              onChange={contentChange}
            ></textarea>
            <ColorButton 
              className={classes.writeButton}
              onClick={onSubmitRecipe}
            >수정완료
            </ColorButton>
          </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(RecipeModifyForm);
