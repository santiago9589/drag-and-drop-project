import React, { useContext } from "react"
import NavbarComponent from "./components/NavbarComponent"
import { DragDropContext, Droppable} from "react-beautiful-dnd"
import CardContainer from "./pages/home/components/home.cardContainer"
import CardNewContainer from "./pages/home/components/home.cardnewContainer"
import { AppContext } from "./context/context"

const getItemStyle = (isDraggeble: boolean, draggableStyle: any) => ({
  background: isDraggeble ? "green" : "white",
  ...draggableStyle
})

function App() {


  const {state,dispatch} = useContext(AppContext)
  
  return (
    <main className="container mx-auto box-border h-screen">
      <NavbarComponent isShowCreate={state.isShowCreate} setisShowCreate={dispatch.setisShowCreate} />
      <DragDropContext onDragEnd={dispatch.onDragEnd}>
        <div className="flex h-[630px] gap-3  border-2 rounded-lg shadow-slate-200 shadow-lg overflow-x-auto p-2">
          {
            state.isShowCreate ?
              (
                <CardNewContainer handleAddCard={dispatch.handleAddCard} handleChangeCreate={dispatch.handleNewContainer} newInputState={state.newContainer} />
              )
              : (null)
          }
          {
            Array.from(state.state.keys()).map((key, i) => {

              const taskArray = state.state.get(key)

              return (
                <Droppable droppableId={key} key={key}>
                  {
                    (provided) => (
                      <CardContainer
                        provided={provided}
                        isShow={state.isShow}
                        handleChange={dispatch.handleNewCard}
                        newInput={state.newCard}
                        handleCreate={dispatch.handleCreate}
                        taskContainer={state.taskContainer}
                        name={key}
                        taskArray={taskArray}
                        handleStartAdd={dispatch.handleStartAdd}
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

