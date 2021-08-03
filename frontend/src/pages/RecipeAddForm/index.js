import withRoot from '../../components/withRoot';
import { withStyles } from '@material-ui/core/styles';
// --- Post bootstrap -----
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

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
import TextField from '@material-ui/core/TextField';

// router
import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import axios from 'axios';

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
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTages] = useState('');


  const [mainState, setMainState] = useState("initial");
  const [imageUploaded, setImageUploaded] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  function handleUploadClick(event) { // upload 클릭시 uploaded 상태
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      setSelectedFile([reader.result])
    };
    console.log(url);

    setMainState("uploaded");
    setSelectedFile(event.target.files[0]);
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
    // drink: drink,
    // drinkRatio: drinkRatio,
    image: selectedFile,
    // tag: tag,
    // memberName: memberName, redux에서 가져오기
    // token: token,
  };

  // 레시피 저장 서버에 요청 보내기
  const saveRecipe = () => {
    console.log(data)
    axios({
      // url: baseURL + "/recipe-articles",
      method: 'post',
      data: data,
      }
    )
    .then(() => {
      console.log("Upload Recipe Success");
    })
    .catch((err) => {
      console.log("Upload failed");
      console.log(err);
    })
  }

  // title 변경
  const titleChange = (e) => {
    setTitle(e.target.value);
  }

  // content 변경
  const contentChange = (e) => {
    setContent(e.target.value);
  }


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
              <div>
                <TextField
                  id="standard-full-width"
                  label="Title"
                  style={{ margin: 8}}
                  placeholder="칵테일 이름을 입력해주세요"
                  fullWidth
                  margin="normal"
                  autoFocus
                  onChange={titleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              <TextField
                id="standard-full-width"
                label="Tag"
                style={{ margin: 8 }}
                placeholder="태그를 입력해주세요."
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="standard-full-width"
                label="DRINK"
                style={{ margin: 8 }}
                placeholder="DRINK를 입력해주세요."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </div>
            </form>
          </Container>
            <textarea 
              rows="20" 
              cols="150" 
              placeholder="나만의 칵테일에 대해 소개해주세요!"
              onChange={contentChange}
            ></textarea>
            <Link>
              <ColorButton 
                component={RouterLink}
                variant="contained"
                color="purple"
                // onClick={} 저장하기
                to="/recipe/detail"
                className={classes.writeButton}
                onClick={saveRecipe}
              >작성완료
              </ColorButton>
            </Link>
          </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(RecipeAddForm);
