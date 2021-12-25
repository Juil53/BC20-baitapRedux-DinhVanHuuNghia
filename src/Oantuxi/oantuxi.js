import React, { Component } from "react";
import "./oantuxi.css";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import { connect } from "react-redux";

class Oantuxi extends Component {
  render() {
    return (
      <div className="gameoantuxi">
        <div className="row">
          <div className="col-4 text-center mt-5">
            <Player />
          </div>
          <div className="col-4 text-center mt-5">
            <Result />
            <button
              className="btn btn-success p-3 mt-5"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-4 text-center mt-5">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputer = setInterval(() => {
        const action = {
          type: "RANDOM",
        };
        dispatch(action);
        count++;
        if (count > 10) {
          clearInterval(randomComputer);
          const action = {
            type: "ENDGAME",
          };
          dispatch(action);
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(Oantuxi);
