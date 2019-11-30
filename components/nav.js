import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import Link from "next/link";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: "0px",
    padding: "0px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    fontSize: "24px"
  },
  AppBar: {
    width: "100%",
    margin: "0px",
    padding: "0px",
    background: "#204764"
  },
  Shop: {
    fontSize: "30px"
  },
  Menu: {
    fontSize: "30px"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link href="/">
          <ListItem button key="Главная">
            <a style={{ textDecoration: "none" }}>
              <ListItemIcon>
                <HomeIcon></HomeIcon>
                <ListItemText primary={"Главная"}></ListItemText>
              </ListItemIcon>
            </a>
          </ListItem>
        </Link>
        <Link href="/cards">
          <ListItem button key="Создать карточку">
            <a style={{ textDecoration: "none" }}>
              <ListItemIcon>
                <SettingsIcon></SettingsIcon>
                <ListItemText primary={"Создать карточку"}></ListItemText>
              </ListItemIcon>
            </a>
          </ListItem>
        </Link>
        <ListItem button key="Корзина">
          <ListItemIcon>
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <ListItemText primary={"Корзина"}></ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button key="FAQ">
          <ListItemIcon>
            <LiveHelpIcon></LiveHelpIcon>
            <ListItemText primary={"FAQ"}></ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon className={classes.Menu} />
          </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
          <Typography className={classes.title} variant="h6" noWrap>
            FootGift
          </Typography>
          <IconButton className={classes.menuButton} color={"inherit"}>
            <div className={classes.searchIcon}>
              <ShoppingBasketIcon className={classes.Shop}></ShoppingBasketIcon>
            </div>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Nav;
