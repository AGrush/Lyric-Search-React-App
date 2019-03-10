import React, { Component } from 'react'
import { TodoConsumer } from '../Context'


class TodoList extends Component {

    render() {

        const { todos } = this.props;
        
        return (
            <ol>
                {todos.map(({description, id}) => <li key={id}>{description}</li>)}
            </ol>
        )            
    }
}

export default (props) => {

    return (
    // Consumer expects a child to pass the context data
        <TodoConsumer>
            {
                context => {
                    //   es6 destructuring
                    const { todos } = context;

                    return (
                        
                        <TodoList {...props} todos={todos} />
                        
                    )   
                }
            }
        </TodoConsumer>
    )
}

