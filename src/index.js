import React from 'react';
import ReactDOM from 'react-dom';

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

  render() {
    return(
      <div className="app">
        <h1>ToDo List</h1>
        <form>
          <input
          type="text"
          placeholder="Add ToDo"
          onChange={this.handleChange}
          value={this.state.todo}/>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<App /> ,document.getElementById('root'));
// ReactDOM.render(what we want to render, where we want to render it)