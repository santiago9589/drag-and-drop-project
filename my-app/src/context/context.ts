import { createContext } from "react"
import { DropResult } from "react-beautiful-dnd"

export interface contextProps {
    state: Map<string, Set<string>>

    dispatch: {
        handleAddCard: (name: string) => void
        handleStartAdd: (droppableId: string) => void
        handleCreate: (inputValue: string, droppableId: string) => void
        onDragEnd: (result: DropResult) => void
    }
}

export const AppContext = createContext({} as contextProps)