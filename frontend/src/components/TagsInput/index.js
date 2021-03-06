import React, { useEffect, useState } from "react";

import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

import PropTypes from "prop-types";
import Downshift from "downshift";
import useStyles from "./styles";

const StyleChip = withStyles((theme) => ({
  root: {
    backgroundColor: purple[300],
  },
}))(Chip);

export default function TagsInput({ ...props }) {
  const classes = useStyles();
  const { selectedTags, placeholder, modifyTags, setModifyTags, ...other } = props;
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  
  useEffect(() => {
    selectedTags(selectedItem);
  }, [selectedItem, selectedTags]);

  useEffect(() => {
    // 수정사항 없을때 에러 방지용
    if ((modifyTags !== undefined) && (modifyTags !== null)) {
      setSelectedItem(modifyTags);
      setModifyTags(null);
    }
  }, [modifyTags, setModifyTags])

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const newSelectedItem = [...selectedItem];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );

      if (duplicatedValues !== -1) {
        setInputValue("");
        return;
      }
      if (!event.target.value.replace(/\s/g, "").length) return;

      newSelectedItem.push(event.target.value.trim());
      if (newSelectedItem.length > 5) {
        alert('태그는 5개 이내로 입력해주세요');
        return;
      }
      setSelectedItem(newSelectedItem);
      setInputValue("");
    }
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === "Backspace"
    ) {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  }
  function handleChange(item) {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue("");
    setSelectedItem(newSelectedItem);
  }

  const handleDelete = item => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  function handleInputChange(event) {
    if (event.target.value.length > 10) {
      alert("태그는 10자 이내로 입력해주세요");
    } else {
      setInputValue(event.target.value);
    }
  }
  return (
    <React.Fragment>
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({ getInputProps }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder
          });
          return (
            <div>
              <TextField
                InputProps={{
                  className: classes.input,
                  onBlur,
                  onChange: event => {
                    handleInputChange(event);
                    onChange(event);
                  },
                  onFocus
                }}
                {...other}
                {...inputProps}
              />
              <div>
                {selectedItem.map(item => (
                  <StyleChip
                    key={item}
                    tabIndex={-1}
                    label={item}
                    className={classes.chip}
                    onDelete={handleDelete(item)}
                    color="secondary"
                  />
              ))}
              </div>
            </div>
          );
        }}
      </Downshift>
    </React.Fragment>
  );
}
TagsInput.defaultProps = {
  tags: []
};
TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};