import React from 'react'
import { useInput } from '../../hooks/useInput'

const LoginPage = () => {

  const [values, errors, touched, handleChange, handleSubmit] = useInput()

  return (
    <form onSubmit={handleSubmit} className="absolute flex flex-col w-1/3 p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
      <label className="text-xl capitalize">Email</label>
      <input
        type="text"
        name="email"
        placeholder="ingrese email"
        onChange={handleChange}
        value={values.email}
        className="p-2 bg-slate-100 rounded-lg"
      />
      <label className="text-xl capitalize">Password</label>
      <input
        type="text"
        name="password"
        placeholder="ingrese clave"
        onChange={handleChange}
        value={values.password}
        className="p-2 bg-slate-100 rounded-lg"
      />
      <button className="bg-green-200 border-2 text-lg rounded-lg p-1">Login</button>
    </form>
  )
}

export default LoginPage