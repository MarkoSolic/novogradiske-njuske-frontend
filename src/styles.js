import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  chatbotContainer: {
    position: "fixed",
    bottom: "60px",
    right: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  chatbotButton: {
    position: "fixed",
    bottom: "10px",
    right: "15px",
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
  },
}));
