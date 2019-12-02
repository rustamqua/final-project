import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BackgroundPreview from "./BackgroundPreview";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "50px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"
  }
}));
const BackgroundChooser = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Выбрать карточку</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <BackgroundPreview
            image="../static/BLACK.png"
            chooseBack={props.backBLACK}
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backBPL_POTM}
            image="../static/BPL_POTM.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backChampions}
            image="../static/Champions.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backCL}
            image="../static/CL.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backFUTMAS}
            image="../static/FUTMAS.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backGOLD}
            image="../static/GOLD.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backHeadliner}
            image="../static/Headliner.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backHERO}
            image="../static/HERO.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backICON}
            image="../static/ICON.png"
          ></BackgroundPreview>

          <BackgroundPreview
            chooseBack={props.backLive}
            image="../static/Live.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backMOTM}
            image="../static/MOTM.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backOTW}
            image="../static/OTW.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backPP}
            image="../static/PP.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backRB}
            image="../static/RB.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backSBC}
            image="../static/SBC.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backTOTS}
            image="../static/TOTS.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backTOTW}
            image="../static/TOTW.png"
          ></BackgroundPreview>
          <BackgroundPreview
            chooseBack={props.backTOTY}
            image="../static/TOTY.png"
          ></BackgroundPreview>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
export default BackgroundChooser;
