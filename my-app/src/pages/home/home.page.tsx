import React from "react"
import ContainerCard from "../../components/ContainerCard.component"
import NavbarComponent from "../../components/NavbarComponent"

const HomePage = () => {

  const card = ["List de tareas", "terminado", "List de tareas", "List de tareas", "terminado", "List de tareas", "terminado", "List de tareas", "terminado", "List de tareas", "terminado", "List de tareas", "terminado", "List de tareas", "terminado"]

  return (
    <>
        <section className="flex h-[600px] gap-4  border-2 rounded-lg shadow-slate-200 shadow-lg overflow-x-auto p-2">
          {
            card.map((element, index) => {
              return (
                <ContainerCard key={index} title={element} />
              )
            })
          }
        </section>
    </>
  )
}

export default HomePage

