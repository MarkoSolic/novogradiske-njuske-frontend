import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,

    bottom: "0",
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },

  toolbar: {
    /* marginLeft: "auto", */
    display: "flex",
    alignItems: "center",
  },

  number: {
    fontSize: "20px",
    fontWeight: "800",
    fontFamily: "Karla",
  },
  contact: {
    padding: "15px",
    fontWeight: "bold",
    fontSize: "25px",
    fontFamily: "Karla",
  },
  bubble: {
    padding: "15px",
    fontWeight: "bold",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  iconContainer: {
    fontSize: "40px",
    margin: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  iconContainer2: {
    fontSize: "40px",
    margin: "20px",
  },

  "@media (max-width:485px)": {
    contact: {
      padding: "5px",
      fontSize: "20px",
      marginLeft: "-20px",
    },
    iconContainer: {
      fontSize: "30px",
      margin: "0px",
      "&:hover": {
        cursor: "pointer",
      },
    },

    iconContainer2: {
      fontSize: "30px",
      margin: "0px",
    },
    number: {
      fontSize: "20px",
      display: "flex",
      padding: "0px",
    },
  },
}));
