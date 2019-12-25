import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import emailjs from "emailjs-com";
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  div: {
    display: "flex",
    flexDirection: "column"
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("WhatsApp");

  const handleChange = event => {
    setAge(event.target.value);
    console.log(event.target.value);
  };
  const Submit = () => {
    const template = {
      cards: props.cards,
      ultimate: props.ultimate,
      design: props.design,
      name: props.name,
      number: props.number,
      method: age
    };
    emailjs
      .send("gmail", "cardstemplate", template, "user_V40rPObUReDEbGm9pj6D0")
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div className={classes.div}>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={"WhatsApp"}>WhatsApp</MenuItem>
          <MenuItem value={"Telegram"}>Telegram</MenuItem>
          <MenuItem value={"Звонок"}>Звонок</MenuItem>
        </Select>
        <FormHelperText>Способ Связи</FormHelperText>
      </FormControl>
      <Button
        style={{
          maxWidth: "200px",
          textAlign: "center"
        }}
        variant="contained"
        color="secondary"
        onClick={Submit}
      >
        Отправить дизайнеру
      </Button>
    </div>
  );
}
