import React from 'react'
import { Activity } from '../../types/Activity'
import CardActivity from './CardActivity.component'

interface props {
    title: string
    // children:React.ReactNode
}

const ContainerCard = ({ title }: props) => {

    const mockCard: Activity[] = [
        {
            name: "crear",
            description: "estoy creando",
            id: "idtest"
        }
    ]

    return (
        <section className='relative flex flex-col min-w-[250px] h-1/3 border-2 border-slate-300 rounded-lg shadow-lg shadow-slate-400 bg-slate-100 p-2 box-border'>
            <header className="flex items-center justify-between ">
                <h2 className='text-xl capitalize font-semibold'>{title}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </header>
            <article className='overflow-y-auto'>
                {
                    mockCard.map((card, index) => {
                        return (
                            <CardActivity key={index} name={card.name} />
                        )
                    })
                }
            </article>
            <section className='absolute bottom-0 left-0 m-2 flex space-x-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <p>Añadir una tarjeta</p>
            </section>
        </section>
    )
}

export default ContainerCard