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
import Logo from "../public/exportLogo";
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
      display: "inline-block"
    },
    fontSize: "24px"
  },
  AppBar: {
    width: "100%",
    margin: "0px",
    padding: "0px",
    background: "black"
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
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
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
          <a style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button key="Главная">
              <ListItemIcon>
                <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText primary={"Главная"}></ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/cardConstructor">
          <a style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button key="Создать карточку">
              <ListItemIcon>
                <SettingsIcon></SettingsIcon>
              </ListItemIcon>
              <ListItemText primary={"Создать карточку"}></ListItemText>
            </ListItem>
          </a>
        </Link>
        <ListItem button key="Корзина">
          <ListItemIcon>
            <ShoppingBasketIcon></ShoppingBasketIcon>
          </ListItemIcon>
          <ListItemText primary={"Корзина"}></ListItemText>
        </ListItem>
        <ListItem button key="FAQ">
          <ListItemIcon>
            <LiveHelpIcon></LiveHelpIcon>
          </ListItemIcon>
          <ListItemText primary={"FAQ"}></ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="fixed">
        <Toolbar className={classes.toolbar}>
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

          <Logo></Logo>
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
