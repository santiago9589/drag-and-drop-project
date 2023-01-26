import { createContext } from "react"
import { DropResult } from "react-beautiful-dnd"

export interface contextProps {
    state: {
        state: Map<string, Set<string>>
        isShow: boolean
        isShowCreate: boolean
        newContainer: string
        taskContainer: string
        newCard: string
    }

    dispatch: {
        handleAddCard: (name: string) => void
        handleStartAdd: (droppableId: string) => void
        handleCreate: (inputValue: string, droppableId: string) => void
        onDragEnd: (result: DropResult) => void
        setisShowCreate:React.Dispatch<React.SetStateAction<boolean>>,
        handleNewCard:(value: string) => void
        handleNewContainer:(value: string) => void,
        handleTaskContainer:(value: string) => void
    }
}

export const AppContext = createContext({} as contextProps)