import React, { useContext } from 'react'
import ButtonForm from '../../../components/Form/button.form'
import InputForm from '../../../components/Form/Input.form'
import { AppContext } from '../../../context/context'



const CardNewContainer = () => {

    const { state, dispatch } = useContext(AppContext)

    return (
        <form className="absolute bottom-0 left-0 w-full h-full z-10 flex justify-center items-center">
            <section className="absolute flex flex-col w-1/3 p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
                <InputForm
                    type="text"
                    name="tarjeta"
                    placeholder="nueva tarjeta"
                    onChange={(e) => dispatch.handleNewContainer(e.target.value)}
                    value={state.newContainer}
                />
                <ButtonForm type='button' name='añadir' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault()
                    dispatch.handleAddCard(state.newContainer)
                }}/>
            </section>
            <b className="absolute  bg-black opacity-30  bottom-0 left-0 w-full h-full" />

        </form>

    )
}

export default CardNewContainer