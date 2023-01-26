import React, { useState, useEffect } from "react"
import NavbarComponent from "./components/NavbarComponent"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import CardContainer from "./pages/home/components/home.cardContainer"
import CardNewContainer from "./pages/home/components/home.cardnewContainer"
import { useShow } from "./hooks/useShow"
import { useData } from "./hooks/useData"
import { useText } from "./hooks/useText"

const getItemStyle = (isDraggeble: boolean, draggableStyle: any) => ({
  background: isDraggeble ? "green" : "white",
  ...draggableStyle
})

function App() {

  const {state,setState,onDragEnd} = useData()
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
    const cardToCreate = draft.set(name, new Set([]))
    handleNewContainer("")
    setisShowCreate(false)
    setState(draft)
  }



  return (
    <main className="container mx-auto box-border h-screen">
      <NavbarComponent isShowCreate={isShowCreate} setisShowCreate={setisShowCreate} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex h-[630px] gap-3  border-2 rounded-lg shadow-slate-200 shadow-lg overflow-x-auto p-2">
          {
            isShowCreate ?
              (
                <CardNewContainer handleAddCard={handleAddCard} handleChangeCreate={handleNewContainer} newInputState={newContainer} />
              )
              : (null)
          }
          {
            Array.from(state.keys()).map((key, i) => {

              const taskArray = state.get(key)

              return (
                <Droppable droppableId={key} key={key}>
                  {
                    (provided) => (
                      <CardContainer
                        provided={provided}
                        isShow={isShow}
                        handleChange={handleNewCard}
                        newInput={newCard}
                        handleCreate={handleCreate}
                        taskContainer={taskContainer}
                        name={key}
                        taskArray={taskArray}
                        handleStartAdd={handleStartAdd}
                        getItemStyle={getItemStyle}
                      />
                    )
                  }
                </Droppable>
              )
            })
          }
        </div>
      </DragDropContext>
    </main>
  )
}

export default App

