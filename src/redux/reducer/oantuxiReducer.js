const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/imgOantuxi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/imgOantuxi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/imgOantuxi/bao.png", datCuoc: true },
  ],
  ketQua: "You win!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/imgOantuxi/keo.png" },
};

const oantuxiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let index = mangCuocUpdate.findIndex(
        (lanchon) => lanchon.ma === action.payload
      );
      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RANDOM": {
      let randomNumber = Math.floor(Math.random() * 3);
      let randomChoice = state.mangDatCuoc[randomNumber];
      state.computer = randomChoice;
      return { ...state };
    }

    case "ENDGAME":
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "bao") {
            state.soBanThang += 1;
            state.ketQua = "Thắng";
          } else if (computer.ma === "keo") {
            state.ketQua = "Hoà";
          } else {
            state.ketQua = "Thua";
          }
          break;
        case "bua":
          if (computer.ma === "bao") {
            state.ketQua = "Thua";
          } else if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "Thắng";
          } else {
            state.ketQua = "Hoà";
          }
          break;
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hoà";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Thắng";
          }
          break;
        default:
          state.ketQua = "Vui lòng chọn trước";
          break;
      }
      state.soBanChoi += 1;
      break;
    default:
      return { ...state };
  }
};
export default oantuxiReducer;
