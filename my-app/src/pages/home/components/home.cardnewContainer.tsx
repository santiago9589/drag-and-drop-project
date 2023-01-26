import React from 'react'

interface props{
    handleChangeCreate: (value: string) => void
    newInputState: string
    handleAddCard:(name: string) => void
}

const CardNewContainer = ({handleChangeCreate,newInputState,handleAddCard}:props) => {
    return (
        <section className="absolute bottom-0 left-0 w-full h-full z-10 flex justify-center items-center">
            <section className="absolute flex flex-col w-1/3 p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
                <label className="text-xl capitalize">Nueva Estado</label>
                <input
                    type="text"
                    placeholder="nueva tarjeta"
                    onChange={(e) => handleChangeCreate(e.target.value)}
                    value={newInputState}
                    className="p-2 bg-slate-100 rounded-lg"
                />
                <button className="bg-green-200 border-2 text-lg rounded-lg p-1" onClick={() => handleAddCard(newInputState)}>Añadir</button>
            </section>
            <b className="absolute  bg-black opacity-30  bottom-0 left-0 w-full h-full" />

        </section>

    )
}

export default CardNewContainer