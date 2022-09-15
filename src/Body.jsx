import './App.css'
import Card from './Card'
import data from '../data'

export default function Body() {

  const cards = data.map(item => {

    return (
      <Card
      key = {item.id}
      item= {item}
      />
    )
  })


  return (
    <div className="body">
      {cards}
    </div>
  )
}

