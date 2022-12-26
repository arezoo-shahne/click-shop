import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdListAction } from "../../../services/ad/ad-list/AdList.action";
import AdCard from "../ad-card/AdCard";
import "./AdList.scss";

function AdList() {
  const adDispatch = useDispatch();
  const {Addata,Adloading,Aderror} = useSelector((response) => response.adListstate);
  
  useEffect(() => {
    adDispatch(AdListAction());
  }, []);
  return (
    <div className="csh-ad-list-wrapper">
      {
        Addata.map((ad)=>{
          return <AdCard data={ad} key={ad._id}/>
        })
      }
    </div>
  );
}

export default AdList;
