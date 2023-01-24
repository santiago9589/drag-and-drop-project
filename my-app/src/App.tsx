import HomePage from "./pages/home/home.page"
import React, { useState, useEffect } from "react"
import NavbarComponent from "./components/NavbarComponent"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"

const getItemStyle = (isDraggeble: boolean, draggableStyle: any) => ({
  background: isDraggeble ? "red" : "white",
  ...draggableStyle
}
)

function App() {

  const rowsContent = new Map<string,Set<string>>()

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

    const [newOrder] = Array.from(arrayToDelete!).splice(source.index, 1)
    arrayToDelete?.delete(newOrder)
    arrayToOrder?.add(newOrder)

    setState(draft)
  }

  useEffect(() => {

    const draft = structuredClone(state)

    draft.set('task-0', new Set(["limpiar", "bailar", "comer"]))
    draft.set('task-1', new Set(["salir"]))
    draft.set('task-2', new Set(["dormir"]))

    setState(draft)

  }, [])


  return (
    <main className="container mx-auto box-border h-[500px]">
      <NavbarComponent />
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex" }}>
          {
            Array.from({ length: Array.from(state.keys()).length }, (_, i) => {

              const taskArray = state.get(`task-${i}`)

              return (
                <Droppable droppableId={`task-${i}`} key={`task-${i}`}>
                  {
                    (provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ padding: "10px", margin: "10px", background: "green" }}
                      >
                        {
                          Array.from(taskArray!).map((task: string, index) => {
                            return (
                              <Draggable key={index} draggableId={`taskN-${task}`} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    {...provided.draggableProps}
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                  >
                                    {task}
                                  </div>
                                )}

                              </Draggable>
                            )
                          })
                        }
                        {provided.placeholder}
                      </div>
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

