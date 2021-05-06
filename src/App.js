import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import { auth } from "./firebase/firebase.util";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import CustomButton from "./components/customButton/customButton";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function App({ currentUser }) {
  const classes = useStyles();

  return (
    <div>
      <div className="sign-in-up">
        <SignIn />
        <SignUp />
      </div>
      <div>
        <CustomButton type="button" onClick={() => auth.signOut()}>
          SIGN OUT
        </CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
