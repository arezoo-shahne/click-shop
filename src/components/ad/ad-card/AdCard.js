import React from 'react'
import "./AdCard.scss"
import { RiStarSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


function AdCard({data}) {
  const notvailable="موجود نیست";
  const available=data.countInStock;
  return (
    <Link to={"/ad-detail/" + data._id} className='csh-ad-card'>
        <div className='csh-ad-card__image-wrapper'>
            <img src={data.image} alt={data.name}/>
        </div>
        <p className='csh-ad-card__title'>{data.name}</p>
        <p className='csh-ad-card__sub-title'>تعداد: {data.countInStock ? available : notvailable}</p>
        <div className='csh-ad-card__footer'>
            <span>{data.price}$</span>
            <span><RiStarSFill className='csh-ad-card__star-icon'/>{data.rating}</span>
        </div>
    </Link>
  )
}

export default AdCard