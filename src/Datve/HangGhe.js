import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/datveAction";
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangghe.danhSachGhe.map((ghe, index) => {
      let gheduocchon = "";
      let disable = false;
      if (ghe.daDat) {
        gheduocchon = "gheDuocChon";
        disable = true;
      }

      let ghedangdat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (ghedangdat) => ghedangdat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        ghedangdat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disable}
          className={`ghe ${gheduocchon} ${ghedangdat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderCotGhe = () => {
    return this.props.hangghe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className="ml-4">{this.renderCotGhe()}</div>;
    } else {
      return (
        <div>
          {this.props.hangghe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className="text-light text-left mt-5 ml-5"
        style={{ fontSize: "30px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.datveReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
