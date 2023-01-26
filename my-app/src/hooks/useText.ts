import {useState} from "react"

export const useText = ():[string,(value:string)=>void] =>{
    const [state, setState] = useState<string>("")

    const handleState = (value: string) => {
        setState(value)
      }

      return[state,handleState]
}