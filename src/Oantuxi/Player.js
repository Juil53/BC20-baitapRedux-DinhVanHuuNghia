import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="theThink">
          <img
            className="mt-5"
            width={100}
            height={100}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/imgOantuxi/player.png"
          style={{ width: 150, height: 150 }}
          alt="player"
        />

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid red" };
            }

            return (
              <div className="col-4" key={index}>
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    this.props.maCuoc(item.ma);
                  }}
                >
                  <img
                    width={50}
                    height={50}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.oantuxiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    maCuoc: (macuoc) => {
      const action = {
        type: "DAT_CUOC",
        payload: macuoc,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
