import React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd"

interface props {
    provided: DraggableProvided
    snapshot: DraggableStateSnapshot
    getItemStyle: (isDraggeble: boolean, draggableStyle: any) => any
    task: string
}

const CardComponent = ({ provided, snapshot, getItemStyle, task }: props) => {
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