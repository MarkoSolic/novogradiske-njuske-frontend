import React, { useEffect, useState } from "react";
import {
  AppBar,
  Typography,
  ThemeProvider,
  createTheme,
  Toolbar,
  Avatar,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import Logo from "../../images/Logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");

    setUser(null);
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodeToken = decode(token);

      if (decodeToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "2.5rem",
    "@media (max-width:375px)": {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.4rem",
    },
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <img
        className={classes.image}
        component={Link}
        to="/"
        src={Logo}
        alt="Logo"
        height="100"
      ></img>
      <Typography className={classes.heading} variant="h2"></Typography>
      <ThemeProvider theme={theme}>
        <Typography
          className={classes.heading}
          theme={theme}
          align="center"
          variant="h3"
        >
          Novogradiške Njuške
        </Typography>
      </ThemeProvider>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div classes={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={(classes.buttonEdit, classes.logout)}
              color="secondary"
              onClick={logout}
            >
              Odjavi se
            </Button>
          </div>
        ) : (
          <Button
            className={classes.buttonEdit}
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Prijavi se
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
