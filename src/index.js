import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import TodoItem from './todo-item';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: []
    }
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  addTodo = (event) => {
    event.preventDefault()
    axios({
      method: "post",
      url: "http://localhost:5000/todo",
      headers: { "content-type": "application/json" },
      data: {
        title: this.state.todo,
        done: false
      }
    })
    .then(res => {
      this.setState({
        todos: [...this.state.todos, res.data],
        todo: ""
      })
    })
    .catch(err=> {
      console.log("addTodo Error", err)
    })
  }

  deleteTodo = (id) => {
    fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE"
    })
    .then(()=>{
        this.setState({
          todos: this.state.todos.filter(todo => {
            return todo.id !== id 
          })
        })
    })
    .catch(err => {
        console.log('DeleteError', err)
    })
  }

  componentDidMount() {
    fetch("http://localhost:5000/todos")
    .then(res => res.json())
    .then(data => {this.setState({todos: data})
  })
    .catch(err => {
      console.log('Fetch Todos Error: ', err)
    })
  }

  renderTodos = () => {
    return this.state.todos.map(todo =>{
      return <TodoItem key={todo.id} todoData={todo} deleteTodo={this.deleteTodo} />
    })
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
        {this.renderTodos()}
      </div>
    )
  }
}


ReactDOM.render(<App /> ,document.getElementById('root'));
// ReactDOM.render(what we want to render, where we want to render it)