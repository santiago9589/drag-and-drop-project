import React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd"

interface props {
    provided: DraggableProvided
    snapshot: DraggableStateSnapshot
    task: string
}

const CardComponent = ({ provided, snapshot, task }: props) => {

    const getItemStyle = (isDraggeble: boolean, draggableStyle: any) => ({
        background: isDraggeble ? "green" : "white",
        ...draggableStyle
      })

    return (
        <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
            className='card-activity'
        >
            <h2 className='card-activity-text'>{task}</h2>
        </div>
    )
}

export default CardComponent