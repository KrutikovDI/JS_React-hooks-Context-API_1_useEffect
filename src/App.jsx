import './App.css'
import List from './Components/List'
import Details from './Components/Delails'
import { useState } from 'react'

function App() {
  const [ details, setDetails ] = useState({
    show: false,
    id: 1
  })
  const handlerClick = (event) => {
    setDetails({
      show: true,
      id: event.target.id
    })
  }

  return (
    <div className='body'>
      <List func={handlerClick}/>
      {details.show ? <Details info={details.id}/> : <>Для просмотра деталей выберите из списка</>}
    </div>
  )
}

export default App
