import React from 'react'
import { DroppableProvided,Draggable} from "react-beautiful-dnd"
import CardComponent from './home.cardComponent'
import CardFooter from './home.cardFooter'
import CardHeader from './home.cardHeader'
import CardNewComponent from './home.cardNewComponent'

interface props{
    provided: DroppableProvided
    isShow:boolean
    handleChange:(value:string)=>void
    newInput:string
    handleCreate:(newInput:string,taskContainer:string)=>void
    taskContainer:string
    name:string
    taskArray:Set<string> | undefined
    handleStartAdd: (name: string) => void
    getItemStyle: (isDraggeble: boolean, draggableStyle: any) => any
}

const CardContainer = ({provided,isShow,handleChange,newInput,handleCreate,handleStartAdd,taskContainer,name,taskArray,getItemStyle}:props) => {
    return (
        <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        className='card-container'
      >
        {
          isShow && provided.droppableProps["data-rbd-droppable-id"] === taskContainer ?
            (
              <CardNewComponent handleChange={handleChange} newInput={newInput} taskContainer={taskContainer} handleCreate={handleCreate} />)
            : (null)
        }
        <CardHeader title={name} />
        <article className='overflow-y-auto h-[300px]'>
          {
            Array.from(taskArray!).map((task: string, index) => {
              return (
                <Draggable key={index} draggableId={`taskN-${task}`} index={index}>
                  {(provided, snapshot) => (
                    <CardComponent provided={provided} snapshot={snapshot} task={task} getItemStyle={getItemStyle} />
                  )}
                </Draggable>
              )
            })
          }
          {provided.placeholder}
        </article>
        <CardFooter name={name} handleStartAdd={handleStartAdd} />
      </div>
    )
}

export default CardContainer