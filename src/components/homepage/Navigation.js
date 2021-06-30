import React from 'react';
import './NavigationStyle.css';

export default function Navigation(){
   
   
   return (
         <header className="header">
      <div className="logo"></div>
         <nav className="navigation main--navigation">
      <ul className="navigation__list">
         <li className="navigation__item"><a href="/menu" className="navigation__item-link">our menu</a></li>
         <li className="navigation__item"><a href="/reservation" className="navigation__item-link">Reservation</a></li>
         <li className="navigation__item"><a href="/about" className="navigation__item-link ">About</a></li>
         <li className="navigation__item"><a href="/contact" className="navigation__item-link">contact</a></li>
         <li className="navigation__item"><a href="/reservation" className="navigation__item-link btn btn--link">book now</a></li>
      </ul>
   </nav>
   
         </header>

      )
   
   
}