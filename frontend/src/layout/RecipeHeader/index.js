import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "@material-ui/core";
// @material-ui/icons
import Search from "@material-ui/icons/Search";

// core components
import Header from "./RecipeHeaderComponents/Header";
import CustomInput from "../../components/CustomInput";
import Button from "./RecipeHeaderComponents/Button";
import styles from "./styles";


const useStyles = makeStyles(styles);

export default function RecipeHeader() {
  const classes = useStyles();
  return (
    <Header
      brand="Brand"
      color="rose"
      leftLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>

          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
            >
              Link
            </Link>
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