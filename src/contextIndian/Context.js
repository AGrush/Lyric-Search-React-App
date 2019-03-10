import React from 'react'

//1 Declare Context
const Context = React.createContext({
    todos: []
});




let todoIdCounter = 1;

//2 Export Provider
export class TodoProvider extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [{
        "id": todoIdCounter++,
        "description": "Start the session"
      },
        {
          "id": todoIdCounter++,
          "description": "Learn React Context"
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}



//3 Export Consumer
export const TodoConsumer = Context.Consumer