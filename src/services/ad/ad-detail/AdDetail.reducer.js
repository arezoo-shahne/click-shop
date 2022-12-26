import {
    AdDetailError,
    AdDetailSuccess,
    AdDetailLoading,
  } from "../../../constance/Variables";
export const AdDetailReducer = (
    adDetailState = { AdDetailData: {}, AdLoading: false, AdError: "" },
    { type, payload }
  ) => {
    switch (type) {
      case AdDetailLoading:
        return payload;
      case AdDetailSuccess:
        return payload;
      case AdDetailError:
        return payload;
  
      default:
        return adDetailState;
    }
  };
