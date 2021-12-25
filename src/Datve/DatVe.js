import React, { Component } from "react";
import "./DatVe.css";
import HangGhe from "./HangGhe";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGheData from "./../Data/danhSachGhe.json";
export default class DatVe extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangghe={hangGhe} soHangGhe={index}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/imgDatvefilm/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4" style={{width:'80%'}}>
                  Đặt vé xem film CyberLearn
                </div>
                <div className="mt-5 text-light" style={{ fontSize: "25px" ,width:'80%'}}>
                  Screen
                </div>
                <div
                  className="mt-1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    
                  }}
                >
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
                
              </div>
              <div className="col-4">
                <div className="text-light mt-2" style={{ fontSize: "35px" }}>
                  Danh sách ghế bạn chọn
                </div>
                <div>
                  <ThongTinGhe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
