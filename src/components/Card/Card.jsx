import React from "react";
import { Link } from "react-router-dom";
import  style from './CardStyle.module.css';

export default function Card({hero}) {
  return (
    <div>
      <Link to={`/detail/${hero.id}`} style={{textDecoration:'none'}}>
      <div className={style.portrait}>
        <div className={style.line}></div>
        <img src={hero.thumbnail.path+'/portrait_uncanny.jpg'} alt="hero" className={style.hero} />
        <div className={style.heroName}>{hero.name}</div>
      </div>
      
      </Link>
    </div>
  );
}
