import React from 'react';
import './Card.css';
import botImg from '../bot.jpg';
import { Exclamation} from "react-bootstrap-icons";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-img">
          <img src={botImg} className='card-img-logo' alt="Bot Logo"/>
        </div>
        <div className="card-title">{props.id}</div>
        <div className="card-subheading">{props.title}</div>
        <div className="card-footer">
          <div className="card-footer-icon">
            <div className='card-footer-icon-i'>
              <Exclamation/>
            </div>
          </div>
          <div className="card-footer-text">
            <div className="card-footer-text-icon"></div>
            <div className="card-footer-text-txt">{props.tag}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card;