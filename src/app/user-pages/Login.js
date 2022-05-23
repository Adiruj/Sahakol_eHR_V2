import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import bgLogin from "./img/2.jpg";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [isLogin, setIslogin] = useState([false]);
  const [Username, setUsername] = useState([]);
  const [Password, setPassword] = useState([]);
  const [opensnackbarfalied, setOpensnackbarfalied] = useState(false);

  const myStyle = {
    backgroundImage: `url(${bgLogin})`,
    height: "100vh",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const cardStyle = {
    border: "0px solid black",
    borderRadius: "5px",
  };

  async function Loginuser(userdata) {
    return fetch("http://13.250.116.42/node/express/api/authentication/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    }).then((data) => data.json());
  }

  const handleLogin = async (e) => {
    setOpenBackdrop(true);
    e.preventDefault();
    const respone = await Loginuser({
      Username,
      Password,
    });
    console.log(respone);
    if ("Token" in respone) {
      window.localStorage.setItem("Token", respone.Token);
      window.localStorage.setItem("Name", respone.user.Name);
      window.localStorage.setItem("Code", respone.user.Code);
      window.localStorage.setItem("Department", respone.user.Department);
      window.localStorage.setItem("Dept", respone.user.Dept);
      window.localStorage.setItem("Level", respone.user.Level);
      window.localStorage.setItem("Position", respone.user.Position);
      window.localStorage.setItem("Level", respone.user.Level);
      window.localStorage.setItem("ID", respone.user.ID);
      setIslogin(true);
      setOpenBackdrop(false);
      console.log(isLogin);
      history.push("/dashboard")
    }

    if (respone.message === "Logged falied" || respone.status === 500) {
      setOpenBackdrop(false);
      setOpensnackbarfalied(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenBackdrop(false);
    setOpensnackbarfalied(false);
  };

  //<div className="d-flex align-items-center auth px-0">
  return (
    <div style={myStyle}>
      <Snackbar
        open={opensnackbarfalied}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Login falied ! please check username or password
        </Alert>
      </Snackbar>
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-3 mx-auto">
            <div
              className="auth-form-light text-left py-5 px-4 px-sm-5"
              style={cardStyle}
            >
              <div className="brand-logo text-left">
                <img
                  src={require("../../assets/images/logo_03.jpg")}
                  alt="logo"
                  width="100"
                />
              </div>
              <h4>Hello! welcome back to Sahakol eHRs</h4>
              <h4 className="font-weight-light">Sign in to continue.</h4>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    size="lg"
                    className="h-auto"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size="lg"
                    className="h-auto"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="mt-3">
                  <Button
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    onClick={handleLogin}
                  >
                    SIGN IN
                  </Button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
