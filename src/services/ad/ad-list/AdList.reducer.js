import {
    AdListError,
    AdListSuccess,
    AdListLoading,
  } from "../../../constance/Variables";
export const AdListReducer = (
    adListstate = { Addata: [], Adloading: false, Aderror: "" },
    { type, payload }
  ) => {
    switch (type) {
      case AdListLoading:
        return payload;
      case AdListSuccess:
        return payload;
      case AdListError:
        return payload;
  
      default:
        return adListstate;
    }
  };
