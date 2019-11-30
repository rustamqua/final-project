import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CreateIcon from "@material-ui/icons/Create";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    display: "inline-block"
  },
  card: {
    maxWidth: 345
  },
  media: {
    width: 300
  },
  aArea: {
    maxWidth: 345,
    height: 400
  },
  cType: {
    padding: 15,
    width: 250
  },
  createBtn: {
    backgroundImage: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)",
    color: "white",
    margin: "auto",
    fontSize: 18
  }
});
const seasonNikfut = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Link href="/cards/cardConstructor">
          <CardActionArea className={classes.aArea}>
            <CardMedia className={classes.media} title="cardType">
              <img src="../seasonBlack.png" className={classes.cType}></img>
            </CardMedia>
          </CardActionArea>
        </Link>
        <Divider></Divider>
        <CardActions>
          <Link href="/cards/cardConstructor">
            <Button
              size="large"
              variant="contained"
              className={classes.createBtn}
            >
              Создать
              <CreateIcon></CreateIcon>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default seasonNikfut;
