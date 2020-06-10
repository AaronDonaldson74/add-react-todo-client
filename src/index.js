import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="app">
        <h1>ToDo List</h1>
      </div>
    )
  }
}


ReactDOM.render(<App /> ,document.getElementById('root'));
// ReactDOM.render(what we want to render, where we want to render it)