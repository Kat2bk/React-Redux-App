import React from 'react';
import './App.css';
import SunFacts from "./SunFacts";
import {connect} from "react-redux";
import {getInfo} from "./actions";

function App(props) {
  console.log(PushSubscriptionOptions)
  const {isFetching, info, error, getInfo} = props;
  // {info && isFetching ? <h2>Let's catch them all!</h2> : "Looks like there's no Pokemon"}
  return (
    <div className="App">
    <h1>List of Pokemon:</h1>
    <SunFacts />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    info: state.info,
    error: state.error
  }
}

export default connect(mapStateToProps, {getInfo})(App);
