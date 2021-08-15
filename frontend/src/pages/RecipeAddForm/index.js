import withRoot from '../../components/withRoot';
import { withStyles } from '@material-ui/core/styles';

import React, { useState } from 'react';

import { 
  Button, 
  Container,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

// custom
import classnames from 'classnames';
import useStyles from './styles';
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import AppForm from '../../components/AppForm';
import Typography from '../../components/Typography';
import InputImageForm from '../../components/InputImageForm'

// axios
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


function RecipeAddForm() {
  const classes = useStyles();
  const history = useHistory();

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
  const member = JSON.parse(window.localStorage.getItem("memberData"))

  function handleSelecetedTags(items) {
    setTages(items.map(item => item).join("|"));
    console.log(tags);
  }

  function handleUploadClick(event) { // upload 클릭시 uploaded 상태
    var file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
      var url = reader.result
      setSelectedFile(url)
    };
    reader.readAsDataURL(file);
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
    member_name: member.name,
  };

  // 레시피 저장 서버에 요청 보내기
  const onSubmitRecipe = (e) => {
    e.preventDefault();
    recipeAPI.saveRecipe(data, member.token, history);
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
        <AppForm>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            레시피 작성
          </Typography>
          <Typography variant="h6" align="center" className={classes.subTitle}>
            여러분만의 레시피를 칵테일러와 공유해주세요!
          </Typography>
        </AppForm>
        <Container className={classes.mainContainer}>
          <Container className={classnames(classes.flexRow, classes.topContainer)}>
            <InputImageForm 
              imageUploaded={imageUploaded}
              imageResetHandler={imageResetHandler}
              handleUploadClick={handleUploadClick}
              selectedFile={selectedFile}
              mainState={mainState}
            />
            <form className={classes.recipeForm}>
              <div className={classes.inputText}>
                <TextField
                  id="standard-full-width"
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
                  style={{ margin: 8 }}
                  id="tags"
                  name="tags"
                  label="태그 입력"
                  selectedTags={handleSelecetedTags}
                />
              <div className={classes.drinkForm}>
                <TextField
                  id="drink1"
                  label="1번 음료 입력"
                  style={{ margin: 8 }}
                  onChange={drinkChange1}
                  fullWidth
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="select-drink1">DRINK1</InputLabel>
                      <Select
                        labelId="select-drink1"
                        id="open-drink1"
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
              <div className={classes.drinkForm}>
                <TextField
                  id="drink2"
                  label="2번 음료 입력"
                  style={{ margin: 8 }}
                  onChange={drinkChange2}
                  fullWidth
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="select-drink2">DRINK2</InputLabel>
                      <Select
                        labelId="select-drink2"
                        id="open-drink2"
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
              <div  className={classes.drinkForm}>
                <TextField
                  id="drink3"
                  label="3번 음료 입력"
                  style={{ margin: 8 }}
                  placeholder="DRINK3"
                  onChange={drinkChange3}
                  fullWidth
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="select-drink3">DRINK3</InputLabel>
                      <Select
                        labelId="select-drink3"
                        id="open-drink3"
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
              <div  className={classes.drinkForm}>
                <TextField
                  id="drink4"
                  label="4번 음료 입력"
                  style={{ margin: 8 }}
                  placeholder="DRINK4"
                  onChange={drinkChange4}
                  fullWidth
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="select-drink4">DRINK4</InputLabel>
                      <Select
                        labelId="select-drink4"
                        id="open-drink4"
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
          rows="20" 
          cols="150" 
          placeholder="나만의 칵테일에 대해 소개해주세요!"
          onChange={contentChange}
        />
        <ColorButton 
          className={classes.writeButton}
          onClick={onSubmitRecipe}
        >작성완료
        </ColorButton>
      </Container>
    <Footer />
  </React.Fragment>
  );
}

export default withRoot(RecipeAddForm);
