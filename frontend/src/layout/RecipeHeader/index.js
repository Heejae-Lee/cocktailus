import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "@material-ui/core";
import { NavLink as RouterLink } from 'react-router-dom';

// @material-ui/icons
import Search from "@material-ui/icons/Search";

// core components
import Header from "./RecipeHeaderComponents/Header";
import CustomInput from "../../components/CustomInput";
import Button from "./RecipeHeaderComponents/Button";
import navbarsStyle from "./styles";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(navbarsStyle);

export default function RecipeHeader(props) {
  const classes = useStyles();
  return (
    <Header
      color="rose"
      leftLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Chip
            color="white"
            label="최신순"
            clickable variant="outlined"
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <Chip
              color="white"
              label="인기순"
              clickable variant="outlined"
            />
          </ListItem>
        </List>
      }
      rightLinks={
        <div>
          <CustomInput
            white
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{
              className: classes.formControl,
            }}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search",
                className: classes.searchInput,
              },
            }}
          />
          <Button justIcon round color="white">
            <Search className={classes.searchIcon} />
          </Button>
        </div>
      }
    />
  );
}