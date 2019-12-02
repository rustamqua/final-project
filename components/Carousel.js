import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { height } from "@material-ui/system";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: "none"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */ const tileData = [
  {
    img: "https://i.ebayimg.com/images/g/bQgAAOSw0KdcfoZ9/s-l300.png",
    title: "Наши клиенты",
    author: "Instagram"
  },
  {
    img: "https://i.ebayimg.com/images/g/3t8AAOSw9PZcpJGY/s-l300.png",
    title: "Наши клиенты",
    author: "Instagram"
  },
  {
    img: "https://i.ebayimg.com/images/g/69oAAOSwsrBcrG2w/s-l1600.jpg",
    title: "Наши клиенты",
    author: "Instagram"
  }
];
function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5} cellHeight={350}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img
              src={tile.img}
              alt={tile.title}
              style={{ objectFit: "cover" }}
            />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default TitlebarGridList;
