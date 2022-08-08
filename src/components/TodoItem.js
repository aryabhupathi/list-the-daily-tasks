import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"
export default function TodoItem(props) {
    const { todo, remove, complete} = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} >
            {todo.text}
            <div className="iconsContainer">
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => remove(todo.id)}/>
                <BiCheckCircle onClick={() => complete(todo.id)}/>
            </div>
        </div>
    )
}