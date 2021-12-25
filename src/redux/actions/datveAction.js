import { DATGHE, HUYGHE } from "../types/datveType";

export const datGheAction = (ghe) => {
  return {
    type: DATGHE,
    payload: ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUYGHE,
    payload: soGhe,
  };
};
