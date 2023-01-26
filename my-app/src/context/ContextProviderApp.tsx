import { useData } from "../hooks/useData"
import { useShow } from "../hooks/useShow"
import { useText } from "../hooks/useText"
import { AppContext, contextProps } from "./context"

interface props {
    children: React.ReactNode
}

const ProviderApp = ({ children }: props) => {

    const { state, setState, onDragEnd } = useData()
    const [isShow, setisShow] = useShow()
    const [isShowCreate, setisShowCreate] = useShow()
    const [newCard, handleNewCard] = useText()
    const [newContainer, handleNewContainer] = useText()
    const [taskContainer, handleTaskContainer] = useText()

    const handleCreate = (inputValue: string, droppableId: string) => {
        if (!newCard || !droppableId) return
        const draft = structuredClone(state)
        const arrayToUpdate = draft.get(droppableId)
        arrayToUpdate?.add(inputValue)
        setState(draft)
        setisShow(false)
        handleNewCard("")
    }

    const handleStartAdd = (droppableId: string) => {
        if (!droppableId) return
        setisShow(true)
        handleTaskContainer(droppableId)
    }

    const handleAddCard = (name: string) => {
        if (!name) return
        const draft = structuredClone(state)
        draft.set(name, new Set([]))
        handleNewContainer("")
        setisShowCreate(false)
        setState(draft)
    }


    const context: contextProps = {
        state: state,

        dispatch: {
            handleCreate,
            handleStartAdd,
            handleAddCard,
            onDragEnd
        }
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}


export default ProviderApp