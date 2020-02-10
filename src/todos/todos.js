import React, { Component } from 'react'
import { SingleTodoCard } from '../shared/single-todo-card/single-todo-card'
import { ToDo } from './todos-styles';
import { connect } from 'react-redux'
import { getTodosAction, updateTodoAction, resetTodos, resetTodo } from '../redux/actions/todos.actions'
import Toast from '../shared/toast/toast';

class ToDos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            currentTodo: [],
            showResponse: false,
            responseClass: "",
            messageResponse: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.todos.length === 0 && nextProps.todos) {
            this.setState({ currentTodo: nextProps.todos[0], currentPage: 1 });
        }

        if (!this.props.todo && nextProps.todo) {
            const todos = this.state.currentTodo;
            const todoIndex = todos.findIndex(x => x.id === nextProps.todo.id);
            todos[todoIndex].completed = nextProps.todo.completed;
            this.showToast('Successfully changed', 'success');
            this.props.resetSingleTodo()
            this.setState({ currentTodo: todos });
        }
    }


    render() {
        return (
            <ToDo>
                <div className="container" >
                    <div className="card">
                    <h6 className="header">Todos List</h6>
                    <div className="row">
                        <div className="col-md-12">
                            {
                                this.state.currentTodo && this.state.currentTodo.length ? this.state.currentTodo.map((v, i) => {
                                    return (<SingleTodoCard key={i} todo={v} update={(todo) => this.updateTodo(todo)}></SingleTodoCard>)
                                }) : null
                            }
                            {this.renderPage()}
                        </div>
                        <div className="col-md-12">
                        </div>
                    </div>
                    </div>
                </div>

                <Toast show={this.state.showResponse} class={this.state.responseClass} message={this.state.messageResponse}></Toast>

            </ToDo>
        )
    }
    componentDidMount() {
        this.props.getTodos()
    }

    renderPage = () => {
        return (
            <div className="d-flex justify-content-md-end">
                {
                    this.props.todos.map((v, i) => {
                        return (
                            this.state.currentPage === i + 1 ?
                                <a key={i} className="pages active-page" onClick={() => this.changePage(i)} >{i + 1}
                                </a>
                                :
                                <a key={i} className="pages" onClick={() => this.changePage(i)} >{i + 1}
                                </a>
                        )
                    })
                }
            </div>
        )

    }
    changePage = (index) => {
        this.setState({ currentTodo: this.props.todos[index], currentPage: index + 1 });
    }
    updateTodo(todo) {
        this.props.updateTodo({ todo: todo });
    }

    componentWillUnmount() {
        this.props.resetTodos()
    }

    showToast(message, classMessage) {
        this.setState({ messageResponse: message, responseClass: classMessage, showResponse: true});
        setTimeout(() => this.setState({ showResponse: false, }), 3000);
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getTodos: () => dispatch(getTodosAction()),
        updateTodo: (data) => dispatch(updateTodoAction(data)),
        resetTodos: () => dispatch(resetTodos()),
        resetSingleTodo: () => dispatch(resetTodo())
    }
}

function mapStateToProps(state) {
    return { todos: state.todos.todos, todo: state.todos.todo }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDos)
