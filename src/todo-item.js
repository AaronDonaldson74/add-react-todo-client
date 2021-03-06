import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            done: props.todoData.done
        }
    }

    toggleDone = () => {
        // fetch(`http://localhost:5000/todo/${this.props.todoData.id}`, {
        fetch(`https://add-flask-todo-api.herokuapp.com/todo/${this.props.todoData.id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                done: !this.state.done
            })
        })
        .then(() => {
            this.setState({
                done: !this.state.done
            })
        })
        .catch(err => {
            console.log("toggleDone error", err)
        })
    }

 

    render() {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    defaultChecked={this.state.done}
                    onClick={this.toggleDone}
                />
                <p className={this.state.done ? "done" : null}>
                    {this.props.todoData.title}
                </p>
                <a className="action-icon" 
                onClick={() => this.props.deleteTodo(this.props.todoData.id)}>
                    <FontAwesomeIcon icon="trash"/>
                </a>
            </div>
        )
    }
}

export default TodoItem