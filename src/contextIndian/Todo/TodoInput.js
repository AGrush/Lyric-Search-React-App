import React, { Component } from 'react'

class TodoInput extends Component {
    constructor(){
        super()
        this.state = {
            todo: ""
        }
    }
    
    handleChange = (event) =>{
        const {value} = event.target

        this.setState({
            todo: value
        })
    }
    render() {
        const todo = this.state

        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input
                        className="todo-input"
                        name="todo"
                        value={todo}
                        placeholder="Add Something"
                        onChange={this.handleChange}

                    />
                </form>
                
            </div>
        )
  }
}

export default TodoInput