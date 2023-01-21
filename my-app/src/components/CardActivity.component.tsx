import React from 'react'
import {Activity} from "../../types/Activity"

interface props{
  name:Activity["name"]
}

const CardActivity = ({name}:props) => {
  return (
    <article className='bg-white w-full rounded-lg p-2 my-1 box-border'>
        <h2 className='text-lg capitalize'>{name}</h2>
    </article>
  )
}

export default CardActivity