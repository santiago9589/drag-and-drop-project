import HomePage from "./pages/home/home.page"
import React, { useState, useEffect } from "react"
import NavbarComponent from "./components/NavbarComponent"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"

const getItemStyle = (isDraggeble: boolean, draggableStyle: any) => ({
  background: isDraggeble ? "green" : "white",
  ...draggableStyle
}
)

function App() {

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

    console.log(pastArray)
    const [newOrder] = pastArray.splice(source.index, 1)
    console.log(newOrder)
    arrayToDelete?.delete(newOrder)

    recivedArray.splice(destination.index, 0, newOrder)
    const setUpdate = new Set(recivedArray)
    draft.delete(destination.droppableId)
    draft.set(destination.droppableId, setUpdate)

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
        <div className="flex h-[800px] gap-3  border-2 rounded-lg shadow-slate-200 shadow-lg overflow-x-auto p-2">
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
                        className='card-container'
                      >
                        <header className="card-header">
                          <h2 className='text-xl capitalize font-semibold'>{"ramdom-ramdom"}</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>
                        </header>
                        <article className='overflow-y-auto'>
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
                                      className='card-activity'
                                    >
                                      <h2 className='card-activity-text'>{task}</h2>
                                    </div>
                                  )}

                                </Draggable>
                              )
                            })
                          }
                          {provided.placeholder}
                        </article>
                        <section className='card-bottom'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          <p>Añadir una tarjeta</p>
                        </section>
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

