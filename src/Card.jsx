import './App.css'
import React from 'react'

export default function Card(props) {
  console.log(props)

  return (
    <div>
    <div className="card">
        <img className="card-img" src={`src/assets/${props.item.imageUrl}`} />
      <div>
        <p><span className="card-location"><span class="material-symbols-outlined pushpin">push_pin</span>{props.item.location} </span>
        <span className="card-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span></p>
        <h1 className="card-title">{props.item.title}</h1>
        <p className="card-dates">{props.item.startDate}</p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
    <div className = "card-line"></div>
    </div>

  )
}

//<img src="src/assets/croatia.png"/>
