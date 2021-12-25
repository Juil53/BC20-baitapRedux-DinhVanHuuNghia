import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/datveAction";

class ThongTinGhe extends Component {
  render() {
    return (
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        <span className="text-light mt-3 pl-3">Ghế được chọn</span>
        <br />
        <button className="gheDangChon"></button>
        <span className="text-light mt-3 pl-3">Ghế đang chọn</span>
        <br />
        <button className="ghe" style={{ margin: `0` }}></button>
        <span className="text-light mt-3 pl-3">Ghế chưa chọn</span>

        <div>
          <table className="table mt-5" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: `25` }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th />
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((ghedangdat, index) => {
                return (
                  <tr key={index}>
                    <td>{ghedangdat.soGhe}</td>
                    <td>{ghedangdat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.huyGhe(ghedangdat.soGhe);
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng Tiền</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce(
                    (tongtien, ghedangdat) => {
                      return (tongtien += ghedangdat.gia);
                    },
                    0
                  ).toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
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
    huyGhe: (soGhe) => {
      dispatch(huyGheAction(soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGhe);
