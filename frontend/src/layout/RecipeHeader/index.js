import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Search from "@material-ui/icons/Search";

// core components
import Header from "./RecipeHeaderComponents/Header";
import CustomInput from "../../components/CustomInput";
import Button from "./RecipeHeaderComponents/Button";
import navbarsStyle from "./styles";

const useStyles = makeStyles(navbarsStyle);

export default function RecipeHeader(props) {
  const classes = useStyles();
  return (
    <Header
      fixed
      color="rose"
      leftLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
            round
            variant="outlined" color={props.state===0 ? "github" : "facebook"}
            size="sm"
            onClick={props.orderByOption1}
            >
              {props.button1}
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              round
              variant="outlined" color={props.state===1 ? "github" : "facebook"}
              size="sm"
              onClick={props.orderByOption2}
              >
                {props.button2}
            </Button>
          </ListItem>
        </List>
      }
      rightLinks={
        <div>
          <CustomInput
            white
            id="search"
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{
              className: classes.formControl,
            }}
            inputProps={{
              onChange: props.updateSearchedValue,
              onKeyPress: (e) => {
                if (e.key === "Enter") {
                  props.searchRecipes();
                  document.getElementById("search").value='';
                }
              },
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search",
                className: classes.searchInput,
              },
            }}
          />
          <Button
            onClick={props.searchRecipes}
            justIcon round color="white"
            >
            <Search className={classes.searchIcon} />
          </Button>
        </div>
      }
    />
  );
}