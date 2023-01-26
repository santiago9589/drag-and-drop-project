import React from 'react'

interface props{
    name:string
    handleStartAdd:(name:string) => void
}

const CardFooter = ({name,handleStartAdd}:props) => {
    return (
        <section className='flex' onClick={() => {
            handleStartAdd(name)
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <p >Añadir una tarjeta</p>
        </section>
    )
}

export default CardFooter