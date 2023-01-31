import { useState,useEffect } from "react"
import { DropResult } from "react-beautiful-dnd"

export const useData = ()=>{
    const rowsContent = new Map<string, Set<string>>()
    const [state, setState] = useState(rowsContent)
    const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return
    }

    const draft = structuredClone(state)
    const arrayToOrder = draft.get(destination.droppableId)
    const arrayToDelete = draft.get(source.droppableId)

    const pastArray = Array.from(arrayToDelete!)
    const recivedArray = Array.from(arrayToOrder!)

    const [newOrder] = pastArray.splice(source.index, 1)
    
    arrayToDelete?.delete(newOrder)

    recivedArray.splice(destination.index, 0, newOrder)
    const setUpdate = new Set(recivedArray)
    draft.set(destination.droppableId, setUpdate)

    setState(draft)
  }



      return {state,setState,onDragEnd}
}