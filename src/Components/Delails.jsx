import React, { useEffect, useState } from 'react'

const Delails = (props) => {
  const [ details, setDetails ] = useState({
    "id": '',
    "name": "",
    "avatar": "",
    "details": {
        "city": "",
        "company": "",
        "position": ""
    }
  })
  console.log(props.info);
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info}.json`)
    .then(response => response.json())
    .then(data => setDetails(data));
  }, [props.info])


  return (
    <div className='details'>
      <img src={details.avatar} className='avatar' alt={details.name}/>
      <div className='field'>{details.name}</div>
      <div className='field'>{details.details.city}</div>
      <div className='field'>{details.details.company}</div>
      <div className='field'>{details.details.position}</div>
    </div>
  )
}

export default Delails
