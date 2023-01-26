import { useState } from "react"

export const useShow = ():[boolean,React.Dispatch<React.SetStateAction<boolean>>]=>{
    const [isShow, setisShow] = useState<boolean>(false)

    return [isShow,setisShow]
}