import axios from "axios";
import {
  AdListError,
  AdListSuccess,
  AdListLoading,
} from "../../../constance/Variables";

export const AdListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdListLoading,
      payload: { Addata: [], Adloading: true, Aderror: "" },
    });
    const { data } = await axios.get("http://kzico.runflare.run/product/");
    dispatch({
      type: AdListSuccess,
      payload: { Addata: [...data], Adloading: false, Aderror: "" },
    });
  } catch (error) {
    dispatch({
      type: AdListError,
      payload: { Addata: [], Adloading: false, Aderror: error.message },
    });
  }
};


