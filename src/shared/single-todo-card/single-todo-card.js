import React from 'react'
import { Card } from './single-todo-card-styles'


export const SingleTodoCard = ({ todo, update }) => {
    const toggle = () => {
        const todoItem = todo;
        todoItem.completed = !todoItem.completed;
        update(todoItem)
    }

    const renderCompleteStatus = () => {
        if (todo.completed) {
            return (<i class="fa fa-square-o"  onClick={toggle}></i>)
        } else {
            return (<i class="fa fa-square fa-square-c" onClick={toggle}></i>)
        }
    }

    return (
        <Card className="card">
            <div className="card-content">
                <div>
                    {renderCompleteStatus()}
                </div>
                <p className="title"> {todo.title.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')} </p>
            </div>
        </Card>
    )
}
