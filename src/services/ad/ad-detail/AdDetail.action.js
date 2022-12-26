import axios from "axios";
import {
  AdDetailError,
  AdDetailSuccess,
  AdDetailLoading,
} from "../../../constance/Variables";

export const GetDetailAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: AdDetailLoading,
    payload: { AdDetailData: [], AdLoading: true, AdError: "" },
  });
  await axios
    .get("http://kzico.runflare.run/product/" + id)
    .then((response) => {
      dispatch({
        type: AdDetailSuccess,
        payload: { AdDetailData: response.data, AdLoading: false, AdError: "" },
      });
    })
    .catch((error) => {
      dispatch({
        type: AdDetailError,
        payload: { AdDetailData: [], AdLoading: false, AdError: error.message },
      });
    });
};
