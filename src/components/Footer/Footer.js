import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import Popover from "@material-ui/core/Popover";
import React from "react";

function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.toolbar}>
        <Typography className={classes.contact}>Kontakt:</Typography>

        <PhoneIcon className={classes.iconContainer2}></PhoneIcon>
        <Typography className={classes.number}>099 432 6601</Typography>

        <FacebookIcon
          color="primary"
          onClick={() =>
            window.open(
              "https://www.facebook.com/ngnjuske/about/?ref=page_internal"
            )
          }
          className={classes.iconContainer}
        />
        <MailOutlineIcon
          aria-describedby={id}
          variant="contained"
          color="secondary"
          onClick={handleClick}
          className={classes.iconContainer}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.bubble}>
            novogradiske.njuske@gmail.com
          </Typography>
        </Popover>
      </div>
    </AppBar>
  );
}

export default Navbar;
