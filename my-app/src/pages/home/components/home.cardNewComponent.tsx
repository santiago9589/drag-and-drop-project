import React, { useContext } from 'react'
import ButtonForm from '../../../components/Form/button.form'
import InputForm from '../../../components/Form/Input.form'
import { AppContext } from '../../../context/context'


const CardNewComponent = () => {

    const { state, dispatch } = useContext(AppContext)

    return (
        <form className="absolute bottom-0 left-0 w-full h-full">
            <section className="absolute flex flex-col w-full p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
                <InputForm
                    type="text"
                    name="tarjeta"
                    placeholder="nueva tarjeta"
                    onChange={(e) => dispatch.handleNewCard(e.target.value)}
                    value={state.newCard}
                />
                <ButtonForm name='Añadir' type='button' onClick={(e: React.MouseEvent<HTMLButtonElement>) =>{
                    e.preventDefault()
                        dispatch.handleCreate(state.newCard, state.taskContainer)
                }}  />
            </section>
            <b className="absolute  bg-black opacity-30  bottom-0 left-0 w-full h-full" />
        </form>
    )
}

export default CardNewComponent