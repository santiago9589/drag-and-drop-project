import React, { useContext } from 'react'
import { apiAuth } from '../../api/auth'
import { AppContext } from '../context/context'
import { AuthContext } from '../context/contextAuth'
import logo from "/trello-ar21.svg"

const NavbarComponent = () => {

    const { dispatch } = useContext(AppContext)
    const  stateAuth  = useContext(AuthContext)


    return (
        <nav className='flex items-center bg-slate-100 justify-between p-1'>
            <section className='flex items-center space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img src={logo} alt="logo" className='w-20 h-10' />
                <section className='flex space-x-2'>
                    <select className="bg-slate-100" name='Espacios de trabajo'>
                        <option value="Espacios de trabajo">Espacios de trabajo</option>
                    </select>
                    <select className="bg-slate-100" name='Reciente'>
                        <option value="Reciente">Reciente</option>
                    </select>
                    <select className="bg-slate-100" name='Marcado'>
                        <option value="Marcado">Marcado</option>
                    </select>
                    <select className="bg-slate-100" name='Planillas'>
                        <option value="Planillas">Planillas</option>
                    </select>
                    <button onClick={() => {
                        dispatch.setisShowCreate(true)
                    }} className='bg-slate-300 p-2 rounded-md'>Crear</button>
                    <button onClick={async() => {
                        await apiAuth.logout()
                        stateAuth.dispatch.logoutUser()
                    }} className='bg-blue-300 p-2 rounded-md'>Salir</button>
                </section>
                
            </section>
            <section className='flex items-center space-x-2'>
                <input
                    className='p-1 border-2 rounded-lg'
                    placeholder='Buscar'
                    type="text"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </section>
        </nav>
    )
}

export default NavbarComponent