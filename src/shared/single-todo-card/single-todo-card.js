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
            return (<i className="fa fa-toggle-on" onClick={toggle} ></i>)
        } else {
            return (<i className="fa fa-toggle-off" onClick={toggle}></i>)
        }
    }

    return (
        <Card className="card">
            <div className="card-content">
                <h6 className="title"> {todo.title} </h6>
                <div>
                    {renderCompleteStatus()}
                </div>
            </div>
        </Card>
    )
}
