import React from 'react'
import {Activity} from "../../types/Activity"

interface props{
  name:Activity["name"]
}

const CardActivity = ({name}:props) => {
  return (
    <article className='card-activity'>
        <h2 className='card-activity-text'>{name}</h2>
    </article>
  )
}

export default CardActivity