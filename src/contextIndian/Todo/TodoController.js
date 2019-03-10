import React, { Component } from 'react'
import "./todo.css"
import TodoList from "./TodoList"
import { TodoProvider } from '../Context'
import TodoInput from './TodoInput'

class TodoController extends Component {
  render() {
    return (
    <div className="todo-app">
        <TodoProvider>
            <TodoInput />
            <TodoList />
        </TodoProvider>
    </div>
        
    )
  }
}

export default TodoController