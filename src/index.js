import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  addTodo = (event) => {
    event.preventDefault()
    console.log(this.state, "form submitted")
  }

  render() {
    return(
      <div className="app">
        <h1>ToDo List</h1>
        <form className="add-todo" onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Add ToDo Item"
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<App /> ,document.getElementById('root'));
// ReactDOM.render(what we want to render, where we want to render it)