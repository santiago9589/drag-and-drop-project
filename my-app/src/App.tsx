import React, { useContext } from "react"
import NavbarComponent from "./components/NavbarComponent"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import CardContainer from "./pages/home/components/home.cardContainer"
import CardNewContainer from "./pages/home/components/home.cardnewContainer"
import { AppContext } from "./context/context"



function App() {


  const { state, dispatch } = useContext(AppContext)

  return (
    <main className="container mx-auto box-border h-screen">
      <NavbarComponent isShowCreate={state.isShowCreate} setisShowCreate={dispatch.setisShowCreate} />
      <DragDropContext onDragEnd={dispatch.onDragEnd}>
        <div className="flex h-[630px] gap-3  border-2 rounded-lg shadow-slate-200 shadow-lg overflow-x-auto p-2">
          {
            state.isShowCreate ?
              (
                <CardNewContainer />
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
                        name={key}
                        taskArray={taskArray}
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

