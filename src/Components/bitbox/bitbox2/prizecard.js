import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 750,
    borderRadius: 20,
  },
  media: {
    height: 200,
  },
  list: {
    marginTop: 10,
  },
  rootD: {
    maxWidth: 345,
    height: 750,
    borderRadius: 20,
    color: "#fff",
    background: "#000",
  },
});

export default function Prizecard({ image, head, desc, isDark }) {
  const classes = useStyles();

  return (
    <Card className={isDark ? classes.rootD : classes.root}>
      <CardMedia
        className={classes.media}
        image={require(`../../../images/bitbox/prizes/${image}.jpg`)}
        title="Contemplative Reptile"
      />
      <div className="prizediv">
        <img src={require("../../../images/bitbox/prizes/cup.svg")} alt="cup" />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {head}
        </Typography>
        <Typography
          variant="body2"
          color={isDark ? "white" : "textSecondary"}
          component="p"
        >
          <ul>
            {desc.map((val) => (
              <li className={classes.list}>{val}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
