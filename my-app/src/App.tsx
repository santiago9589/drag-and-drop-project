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
  const [isShow, setisShow] = useState<boolean>(false)
  const [isShowCreate, setisShowCreate] = useState<boolean>(false)
  const [newInput, setnewInput] = useState<string>("")
  const [newInputState, setnewInputState] = useState<string>("")
  const [taskContainer, setTaskContainer] = useState<string>("")

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
    draft.set(destination.droppableId, setUpdate)

    setState(draft)
  }

  useEffect(() => {

    const draft = structuredClone(state)
    draft.set('List', new Set(["limpiar", "bailar", "comer", "fdfsd", "dfsdfs"]))
    draft.set('Pending', new Set(["salir"]))
    draft.set('Done', new Set(["dormir"]))
    setState(draft)
  }, [])


  const handleChange = (value: string) => {
    setnewInput(value)
  }

  const handleChangeCreate = (value: string) => {
    setnewInputState(value)
  }


  const handleCreate = (inputValue: string, droppableId: string) => {
    if (!newInput || !droppableId) return
    const draft = structuredClone(state)
    const arrayToUpdate = draft.get(droppableId)
    arrayToUpdate?.add(inputValue)
    setState(draft)
    setisShow(false)
    setnewInput("")
  }

  const handleStartAdd = (droppableId: string) => {
    if (!droppableId) return
    setisShow(true)
    setTaskContainer(droppableId)
  }

  const handleAddCard = (name: string) => {
    if (!name) return
    const draft = structuredClone(state)
    const cardToCreate = draft.set(name, new Set([]))
    console.log(cardToCreate)
    setnewInput("")
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
              (<section className="absolute bottom-0 left-0 w-full h-full z-10 flex justify-center items-center">
                <section className="absolute flex flex-col w-1/3 p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
                  <label className="text-xl capitalize">Nueva Estado</label>
                  <input
                    type="text"
                    placeholder="nueva tarjeta"
                    onChange={(e) => handleChangeCreate(e.target.value)}
                    value={newInputState}
                    className="p-2 bg-slate-100 rounded-lg"
                  />
                  <button className="bg-green-200 border-2 text-lg rounded-lg p-1" onClick={() => handleAddCard(newInputState)}>Añadir</button>
                </section>
                <b className="absolute  bg-black opacity-30  bottom-0 left-0 w-full h-full" />

              </section>)

              : (null)
          }
          {
            Array.from(state.keys()).map((key, i) => {

              const taskArray = state.get(key)

              return (
                <Droppable droppableId={key} key={key}>
                  {
                    (provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='card-container'
                      >
                        {
                          isShow && provided.droppableProps["data-rbd-droppable-id"] === taskContainer ?
                            (<section className="absolute bottom-0 left-0 w-full h-full">
                              <section className="absolute flex flex-col w-full p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
                                <label className="text-xl capitalize">Nueva tarjeta</label>
                                <input
                                  type="text"
                                  placeholder="nueva tarjeta"
                                  onChange={(e) => handleChange(e.target.value)}
                                  value={newInput}
                                  className="p-2 bg-slate-100 rounded-lg"
                                />
                                <button className="bg-green-200 border-2 text-lg rounded-lg p-1" onClick={() => handleCreate(newInput, taskContainer)}>Añadir</button>
                              </section>
                              <b className="absolute  bg-black opacity-30  bottom-0 left-0 w-full h-full" />

                            </section>)

                            : (null)
                        }
                        <header className="card-header">
                          <h2 className='text-xl capitalize font-semibold py-2'>{key}</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>
                        </header>
                        <article className='overflow-y-auto h-[300px]'>
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
                        <section className='flex' onClick={() => {
                          handleStartAdd(key)
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          <p >Añadir una tarjeta</p>
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

