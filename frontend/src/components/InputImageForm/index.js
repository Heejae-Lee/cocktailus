// imports the React Javascript Library
import React, {useState} from "react";
//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

//Tabs
import useStyles from './styles';

export default function InputImageForm() {
  const classes = useStyles();

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

  function RenderInitialState() { // 초기상태
    const classes = useStyles();

    return (
      <React.Fragment>
        <CardContent>
          <Grid container justifyContent="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
            <label htmlFor="contained-button-file" className={classes.center}>
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </React.Fragment>
    );
  }


  function RenderUploadedState() {
    const classes = useStyles();

    return (
      <React.Fragment>
        <CardActionArea onClick={imageResetHandler}>
          <img
            width="100%"
            height="350px"
            alt = "cocktail_image"
            className={classes.media}
            src={selectedFile}
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  function imageResetHandler() { // 이미지 제거, 초기상태로 변경
    console.log("Click!");
    setMainState("initial");
    setSelectedFile(null);
    setImageUploaded(0);
  };

  return (
    <div className={classes.root}>
      <Card>
        {(mainState === "initial" && RenderInitialState()) ||
          (mainState === "uploaded" && RenderUploadedState())}
          {/* 이미지 초기상태 / 업로드 상태 변경*/}
      </Card>
    </div>
  );
}