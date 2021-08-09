// imports the React Javascript Library
import React from "react";
//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Fab from "@material-ui/core/Fab";

import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

//Tabs
import useStyles from './styles';

export default function InputImageForm(props) {
  const classes = useStyles();
  
  function RenderInitialState() { // 초기상태
    const classes = useStyles();

    return (
      <React.Fragment>
        <CardContent container justifyContent="center" alignItems="center" className={classes.boxSize}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              type="file"
              onChange={props.handleUploadClick}
            />
            <label htmlFor="contained-button-file" className={classes.center}>
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
        </CardContent>
      </React.Fragment>
    );
  }


  function RenderUploadedState() {
    const classes = useStyles();

    return (
      <React.Fragment>
        <CardActionArea onClick={props.imageResetHandler}>
          <img
            width =  "100%"
            height = "380px"
            alt = "cocktail_image"
            className={classes.media}
            src={props.selectedFile}
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Card>
        {/* 이미지 초기상태 / 업로드 상태 변경*/}
        {(props.mainState === "initial" && RenderInitialState()) ||
          (props.mainState === "uploaded" && RenderUploadedState())}
      </Card>
    </div>
  );
}