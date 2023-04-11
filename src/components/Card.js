import React from 'react'
import './Card.css'
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  let navigate = useNavigate();

  const handleOnCardClick = (id) => {
    navigate(`/member/${id}`);
  }

  const handleOnEditPlayerClick = (event, id) => {
    event.stopPropagation()
    navigate(`/edit/${id}`);
  }

  return (
    <div className="Card" onClick={() => handleOnCardClick(props.id)}>
      <h2 className="title">{props.name}</h2>
      <p className="card-content"><b>Batting style:</b> {props.battingStyle}</p>
      <p className="card-content"><b>Bowling style:</b> {props.bowlingStyle}</p>
      <p className="card-content"><b>Fielding position:</b> {props.fieldingPosition}</p>
      <button className='editButton' onClick={(event) => handleOnEditPlayerClick(event, props.id)}>Edit player</button>
    </div>
  );
};

export default Card;