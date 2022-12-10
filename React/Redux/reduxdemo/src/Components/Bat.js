import React, { useState } from "react";
import { connect } from "react-redux";

const Bat = (
  props /* ye state hai jo App.js page se Bat ko as props pass kiya gaya hai*/
) => {
  // const [bat, setBat] = useState(0);
  return (
    <>
      <h1>Bat: {props.batss}</h1>
      <button type="" onClick={props.buyBat}>
        Buy Bat
      </button>
      <br /><br /><br />
      <button type="" onClick={props.sellBat}>
        Sell Bat
      </button>
    </>
  );
};

//mapStateToProps => It gets its value from reducer function, then it returns an object to the component (as props) in which it is defined with the help of connect. Then the component uses that object

const mapStateToProps = (state) => {
  return { batss: state.bats };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBat: () => {
      dispatch({
        type: "BUY_BAT",
      });
    },

    sellBat: () => {
      dispatch({
        type: "SELL_BAT",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bat);
