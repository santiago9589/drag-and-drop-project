import React, { useContext } from 'react'
import { AppContext } from '../../../context/context'


const CardNewComponent = () => {

    const {state,dispatch} = useContext(AppContext)

    return (
        <form className="absolute bottom-0 left-0 w-full h-full">
            <section className="absolute flex flex-col w-full p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
                <label className="text-xl capitalize">Nueva tarjeta</label>
                <input
                    type="text"
                    placeholder="nueva tarjeta"
                    onChange={(e) => dispatch.handleNewCard(e.target.value)}
                    value={state.newCard}
                    className="p-2 bg-slate-100 rounded-lg"
                />
                <button className="bg-green-200 border-2 text-lg rounded-lg p-1" onClick={() => dispatch.handleCreate(state.newCard, state.taskContainer)}>Añadir</button>
            </section>
            <b className="absolute  bg-black opacity-30  bottom-0 left-0 w-full h-full" />

        </form>
    )
}

export default CardNewComponent