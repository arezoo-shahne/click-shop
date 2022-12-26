import { AddToCart,Decrease,Increase, Remove } from "../../constance/Variables";

export const CartAction = (productData) => async (dispatch, getState) => {
  const { CartState } = getState();
  const cartListData = JSON.parse(JSON.stringify(CartState.CartData));
  if (duplicate(cartListData, productData._id) || productData.countInStock=== 0) {
    return;
  }
  productData.qty=1
  cartListData.push(productData);
  addToLocalStorage(cartListData)
  dispatch({
    type: AddToCart,
    payload: { CartData: cartListData, Cartloading: true, Carterror: "" ,total:totalProduct(cartListData)},
  });
};
export const plusQty = (id) => async (dispatch, getState) => {
  const { CartState } = getState();
  const cartListData = JSON.parse(JSON.stringify(CartState.CartData));
  cartListData.forEach(product => {
    if(product._id===id && product.qty < product.countInStock){
      ++product.qty; 
    }
  });
  addToLocalStorage(cartListData)
  dispatch({
    type: Increase,
    payload: { CartData: cartListData, Cartloading: true, Carterror: "" ,total:totalProduct(cartListData)},
  });
};
export const minusQty = (id) => async (dispatch, getState) => {
  const { CartState } = getState();
  const cartListData = JSON.parse(JSON.stringify(CartState.CartData));
  cartListData.forEach(product => {
    if(product._id===id && product.qty > 1){
      --product.qty; 
    }
  });
  addToLocalStorage(cartListData)
  dispatch({
    type: Decrease,
    payload: { CartData: cartListData, Cartloading: true, Carterror: "" ,total:totalProduct(cartListData) },
  });
};
export const removeItem = (id) => async (dispatch, getState) => {
  const { CartState } = getState();
  const cartListData = JSON.parse(JSON.stringify(CartState.CartData));
  cartListData.forEach((product,index) => {
    if(product._id===id){
      cartListData.splice(index,1); 
    }
  });
  addToLocalStorage(cartListData)
  dispatch({
    type: Remove,
    payload: { CartData: cartListData, Cartloading: true, Carterror: "" ,total:totalProduct(cartListData)},
  });
};

function duplicate(CartData, productId) {
  let duplicateProduct = false;
  for (let i = 0; i <= CartData.length; i++) {
    if (CartData[i]?._id === productId) {
      duplicateProduct = true;
    }
  }
  return duplicateProduct;
}
function addToLocalStorage(cartdata){
  localStorage.setItem('cart',JSON.stringify(cartdata))

}
function totalProduct(cartdata){
  let total={
    count:0,
    price:0
  };
  cartdata.forEach(product=>{
    total.count += product.qty
    total.price += (product.price*product.qty)
  })
  saveTotalProduct(total)
  return total;
}
function saveTotalProduct(total){
  localStorage.setItem('total',JSON.stringify(total))
}
