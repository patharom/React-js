import React from "react";
import { connect } from "react-redux";
import { buy_cake } from "../Redux/Cake/CakeAction";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of Cake : {props.numofcake}</h1>
      <button className="btn" onClick={props.buy_cake}>
        Click
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numofcake: state.numofcake,
  };
};
                             
const mapDispatchToProps = (dispatch) => {
  return {
    buy_cake: () => dispatch(buy_cake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
