import React, { Component } from "react";
import "./xucxac.css";
import Tai from "./Tai";
import Result from "./Result";
import Xiu from "./Xiu";
import Thongbao from "./Thongbao";
export default class XucXac extends Component {
  render() {
    return (
      <div className="gamexucxac">
        <div className="title text-center display-4 mt-5 text-warning">
          Game Đổ Xúc Xắc
        </div>
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-4">
              <button className="oCuoc">Tai</button>
            </div>
            <div className="col-4">
              <Result />
            </div>
            <div className="col-4">
              <button className="oCuoc">Xiu</button>
            </div>
          </div>
          <div className="thongtin text-dark text-center display-4">
            <Thongbao />
            <button className="btn btn-danger mt-5 p-2">Play Game!</button>
          </div>
        </div>
      </div>
    );
  }
}
