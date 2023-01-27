import React,{useContext} from 'react'
import { AppContext } from '../../../context/context'



const CardNewContainer = () => {

    const {state,dispatch} = useContext(AppContext)

    return (
        <section className="absolute bottom-0 left-0 w-full h-full z-10 flex justify-center items-center">
            <section className="absolute flex flex-col w-1/3 p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
                <label className="text-xl capitalize">Nueva Tarea</label>
                <input
                    type="text"
                    placeholder="nueva tarjeta"
                    onChange={(e) => dispatch.handleNewContainer(e.target.value)}
                    value={state.newContainer}
                    className="p-2 bg-slate-100 rounded-lg"
                />
                <button className="bg-green-200 border-2 text-lg rounded-lg p-1" onClick={() => dispatch.handleAddCard(state.newContainer)}>Añadir</button>
            </section>
            <b className="absolute  bg-black opacity-30  bottom-0 left-0 w-full h-full" />

        </section>

    )
}

export default CardNewContainer