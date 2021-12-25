import React, { Component } from "react";
import {connect} from 'react-redux';
class Result extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Win rounds: <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          Total rounds: <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.oantuxiReducer.ketQua,
        soBanThang: state.oantuxiReducer.soBanThang,
        soBanChoi: state.oantuxiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps) (Result);