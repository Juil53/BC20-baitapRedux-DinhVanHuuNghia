import React, { Component } from "react";

export default class Thongbao extends Component {
  render() {
    return (
      <div>
        <div className="thongbao">
          Bạn chọn: <span className="text-danger">Tài</span>
        </div>
        <div className="thongbao">
          Số ván thắng: <span className="text-success">1</span>
        </div>
        <div className="thongbao">
          Tổng ván chơi: <span className="text-success">1</span>
        </div>
      </div>
    );
  }
}
