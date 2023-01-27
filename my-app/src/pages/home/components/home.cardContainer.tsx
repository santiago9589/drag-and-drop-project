import React,{useContext} from 'react'
import { DroppableProvided,Draggable} from "react-beautiful-dnd"
import { AppContext } from '../../../context/context'
import CardComponent from './home.cardComponent'
import CardFooter from './home.cardFooter'
import CardHeader from './home.cardHeader'
import CardNewComponent from './home.cardNewComponent'

interface props{
    provided: DroppableProvided
    name:string
    taskArray:Set<string> | undefined
}

const CardContainer = ({provided,name,taskArray}:props) => {

  const {state} = useContext(AppContext)

    return (
        <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        className='card-container'
      >
        {
          state.isShow && provided.droppableProps["data-rbd-droppable-id"] === state.taskContainer ?
            (
              <CardNewComponent />)
            : (null)
        }
        <CardHeader title={name} />
        <article className='overflow-y-auto h-[300px]'>
          {
            Array.from(taskArray!).map((task: string, index) => {
              return (
                <Draggable key={index} draggableId={`taskN-${task}`} index={index}>
                  {(provided, snapshot) => (
                    <CardComponent provided={provided} snapshot={snapshot} task={task}/>
                  )}
                </Draggable>
              )
            })
          }
          {provided.placeholder}
        </article>
        <CardFooter name={name} />
      </div>
    )
}

export default CardContainer