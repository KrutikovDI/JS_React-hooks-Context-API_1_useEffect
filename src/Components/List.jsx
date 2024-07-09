import React, { useEffect, useState } from 'react'

const List = (props) => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then(response => response.json())
    .then(data => setData(data));
  }, [])

  return (
    <div className='name-list'>
      {data.map((i) => (
        <div key={i.id} id={i.id} className='name' onClick={props.func}>{i.name}</div>
      ))}
    </div>
  )
}

export default List
