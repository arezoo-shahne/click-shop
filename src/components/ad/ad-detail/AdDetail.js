import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetDetailAction } from "../../../services/ad/ad-detail/AdDetail.action";
import "./AdDetail.scss";
import { RiStarSFill } from "react-icons/ri";
import CshButton from "../../global/button/Button";
import { CartAction, minusQty, plusQty, removeItem } from "../../../services/cart/cart.action";
import ButtonPlus from "../../global/button-plus/ButtonPlus";

function AdDetail() {
  const { id } = useParams();
  const AdDetailDispatch = useDispatch();
  const { adDetailState, CartState } = useSelector((response) => response);
  const { AdDetailData, AdLoading, AdError } = adDetailState;
  const { CartData, CartLoading, CartError } = CartState;
  let product=null;

  useEffect(() => {
    AdDetailDispatch(GetDetailAction(id));
  }, []);
  function AddToCartDEtails(){
    AdDetailDispatch(CartAction(AdDetailData))
  }
  function Plus(){
    AdDetailDispatch(plusQty(id))
  }
  function Minus(){
    AdDetailDispatch(minusQty(id))
  }
  function Remove(){
    AdDetailDispatch(removeItem(id))
  }
  function getProduct(){
CartData.forEach(cartProduct => {
  if(cartProduct._id===id){
    product=cartProduct;
  }
});
return product;
  }
  return (
    <div className="csh-ad-detail">
      <div className="csh-ad-detail__header">
        <div className="csh-ad-detail__image-wrapper">
          <img src={AdDetailData.image} alt="" />
        </div>
        <div className="csh-ad-detail__details">
          <span className="csh-ad-detail__name">
            نام محصول: {AdDetailData.name}
          </span>
          <span>دسته بندی: {AdDetailData.category}</span>
          <span>برند: {AdDetailData.brand}</span>
          <span>رنگ: {AdDetailData.color}</span>
          <span>موجودی: {AdDetailData.countInStock}</span>
          <span>
            امتیاز محصول: {AdDetailData.rating}
            <RiStarSFill />
          </span>
          <span>قیمت: {AdDetailData.price} $</span>
        </div>
      </div>
      <p className="csh-ad-detail__description">
        توضیحات: {AdDetailData.description}
      </p>
      {
        AdDetailData.countInStock===0 ?
        <div className="csh-ad-detail__not-available">محصول موجود نیست</div> :
        getProduct()?
        <ButtonPlus count={product.qty} plus={Plus} minus={Minus} remove={Remove}/> :
        <CshButton text="افزودن به سبد خرید" click={AddToCartDEtails} />
      }
    </div>
  );
}

export default AdDetail;
