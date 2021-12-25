import { DATGHE, HUYGHE } from "../types/datveType";

const stateDefault = {
  danhSachGheDangDat: [],
};

const datveReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DATGHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (ghedangdat) => ghedangdat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.payload);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    case HUYGHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (ghedangdat) => ghedangdat.soGhe === action.payload
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default datveReducer;
