import React from 'react'

interface props{
    handleChange:(value:string)=>void
    newInput:string
    handleCreate:(newInput:string,taskContainer:string)=>void
    taskContainer:string
}

const CardNewComponent = ({handleChange,newInput,handleCreate,taskContainer}:props) => {
    return (
        <section className="absolute bottom-0 left-0 w-full h-full">
            <section className="absolute flex flex-col w-full p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
                <label className="text-xl capitalize">Nueva tarjeta</label>
                <input
                    type="text"
                    placeholder="nueva tarjeta"
                    onChange={(e) => handleChange(e.target.value)}
                    value={newInput}
                    className="p-2 bg-slate-100 rounded-lg"
                />
                <button className="bg-green-200 border-2 text-lg rounded-lg p-1" onClick={() => handleCreate(newInput, taskContainer)}>Añadir</button>
            </section>
            <b className="absolute  bg-black opacity-30  bottom-0 left-0 w-full h-full" />

        </section>
    )
}

export default CardNewComponent