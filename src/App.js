import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "./firebase/firebase.util";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.scss";

function App({ currentUser }) {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
      {currentUser ? (
        <button className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </button>
      ) : (
        <button className="option">SIGN IN</button>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
