import axios from "axios";
import {
  saveData,
} from "../../constance/Variables";

export function OrderAction() {
  return async (dispatch, getState) => {
    dispatch({
      type: saveData,
      payload: {
        orderLoading: true,
        orderList: [],
        orderError: "",
        orderDetail: null,
      },
    });
    await axios
      .get("http://kzico.runflare.run/order/", {
        headers: {
          authorization: "Bearer " + GetUserToken(),
        },
      })
      .then((response) => {
        dispatch({
          type: saveData,
          payload: {
            orderLoading: false,
            orderList: response.data,
            orderError: "",
            orderDetail: null,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: saveData,
          payload: {
            orderLoading: false,
            orderList: [],
            orderError: error.message,
            orderDetail: null,
          },
        });
      });
  };
}

export function OrderDetailAction(id) {
  return async (dispatch, getState) => {
    dispatch({
      type: saveData,
      payload: {
        orderLoading: true,
        orderList: [],
        orderError: "",
        orderDetail: null,
      },
    });
    await axios
      .get("http://kzico.runflare.run/order/" + id, {
        headers: {
          authorization: "Bearer " + GetUserToken(),
        },
      })
      .then((response) => {

        console.log(response)
        dispatch({
          type: saveData,
          payload: {
            orderLoading: false,
            orderList: [],
            orderError: "",
            orderDetail: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: saveData,
          payload: {
            orderLoading: false,
            orderList: [],
            orderError: error.message,
            orderDetail: null,
          },
        });
      });
  };
}
function GetUserToken() {
  let user = JSON.parse(localStorage.getItem('login'));
  return user.token;
}
