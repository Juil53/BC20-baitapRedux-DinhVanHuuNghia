import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0px;}
    }`;

    return (
      <div className="computer">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: `relative` }}>
          <img
            style={{
              position: `absolute`,
              left: `30%`,
              transform: "rotate(180deg)",
              animation: `randomItem${Date.now()} 0.5s`,
            }}
            className="mt-5"
            width={100}
            height={100}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/imgOantuxi/playerComputer.png"
          style={{ width: 150, height: 150 }}
          alt="computer"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.oantuxiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
