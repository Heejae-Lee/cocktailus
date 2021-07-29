import React from 'react'
import useStyles from './styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

export default function DetailAddForm() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Cocktail's Name"
          style={{ margin: 8 }}
          placeholder="칵테일 이름을 입력해주세요."
          fullWidth
          margin="normal"
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
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-full-width"
        label="DRINK1"
        style={{ margin: 8 }}
        placeholder="DRINK를 입력해주세요."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-full-width"
        label="DRINK2"
        style={{ margin: 8 }}
        placeholder="DRINK를 입력해주세요."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-full-width"
        label="DRINK3"
        style={{ margin: 8 }}
        placeholder="DRINK를 입력해주세요."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-full-width"
        label="DRINK4"
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
  )

}