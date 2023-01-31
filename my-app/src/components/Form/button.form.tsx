import React from 'react'

interface props{
    name:string
    type:"button" | "submit" | "reset"
    onClick?:(e: React.MouseEvent<HTMLButtonElement>)=>void
}

const ButtonForm = ({name,type,onClick}:props) => {
    return (
        <button  onClick={onClick} type={type} className="bg-green-200 border-2 text-xl rounded-lg p-1 uppercase">{name}</button>
    )
}

export default ButtonForm