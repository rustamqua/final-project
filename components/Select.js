import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <FormControl className={classes.formControl}>
      <Select
        value={"WhatsApp"}
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
  );
}
