import React from 'react'
import "./PlayerImage.css"
import PlayerImage from './PlayerImage'


const PlayerCard = ({playerImg, playerName, teamName, nationality, position, age}) => {
  return (
    <div className='box'>
        <PlayerImage playerImg={playerImg}/>
        <p>Player Name: {playerName}</p>
        <p>Team: {teamName}</p>
        <p>Nationality: {nationality}</p>
        <p>Position: {position}</p>
        <p>Age: {age}</p>
    </div>
  )
}

export default PlayerCard;