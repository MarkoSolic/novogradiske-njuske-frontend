import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [show, setShow] = useState(false);

  let [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setPostData({
      title: "",
      message: "",
      selectedFile: "",
    });
    setCurrentId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === null) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Ako želite objavljivati postove, prijavite se na račun ili kreirajte
          novi
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Dodajte post</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Ime ljubimca"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="Opis"
          fullWidth
          multiline
          rows={5}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></TextField>

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Podnesi
        </Button>
        {show ? <Alert severity="error">Datoteka je prevelika</Alert> : null}
        <Button
          variant="contained"
          onClick={clear}
          color="secondary"
          size="small"
          fullWidth
        >
          Očisti
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
