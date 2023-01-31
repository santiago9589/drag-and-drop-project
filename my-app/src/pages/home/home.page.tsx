import React, { useContext } from "react"
import NavbarComponent from "../../components/NavbarComponent"
import { AppContext } from "../../context/context"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import CardNewContainer from "./components/home.cardnewContainer"
import CardContainer from "./components/home.cardContainer"


const HomePage = () => {

  const { state, dispatch } = useContext(AppContext)
  
  return (
    <>
    <NavbarComponent/>
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
    </>
  )
}

export default HomePage

