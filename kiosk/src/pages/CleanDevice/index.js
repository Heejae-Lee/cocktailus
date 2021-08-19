// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Header from "../../layout/Header";
import CleanCompleteLoading from "../../components/CleanCompleteLoading";

export default function CleanDevice() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header simple={true}/>
      <CleanCompleteLoading/>
    </div>
  );
}
