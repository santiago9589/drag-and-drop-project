import React from 'react'

interface props {
    name: string
    type: string
    placeholder: string
    onChange: (e: React.ChangeEvent<any>) => void
    value: string
    errors?: string
    touched?:boolean
}
const InputForm = ({ name, errors,touched, ...rest }: props) => {
    return (
        <>
            <label htmlFor={name} className="text-xl capitalize">{name}</label>
            <input
                name={name}
                {...rest}
                className="p-2 bg-slate-100 rounded-xl"
            />
            {errors && touched && (<span className='bg-red-400 text-lg p-2 rounded-lg font-bold'>{errors}</span>)}
        </>
    )
}

export default InputForm