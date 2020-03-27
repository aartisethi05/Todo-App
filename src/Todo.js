import React, { Component } from 'react';
import Task from './Task';
import './Todo.css';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: null,
      date: null
    };
  }
  addTask = event => {
    this.setState({
      todo: event.target.value,
      date: new Date()
    });
  };

  submitTask = () => {
    let todos = this.state.todos;
    todos.push({
      todo: this.state.todo,
      date: this.state.date
    });
    this.setState({
      todos
    });
    // this.setState({
    //   todos: [
    //     ...this.state.todos,
    //     { todo: this.state.todo, date: this.state.date }
    //   ]
    // });
  };
  render() {
      const colors=["Red","Green","blue"];
      let i=0;
    return (
      <div>
        <ul>
            
          {this.state.todos.map((value, index) => {
            return (
              <li key={index}>
                <Task name={value.todo} date={value.date} color={colors[i]} />
               
              </li>
            );
            i++;
          })}
        </ul>
        <div className="background">
        <input type="text" value={this.state.task} onChange={this.addTask} className="todoBox" placeholder="Add Todo" />
        <button onClick={this.submitTask} className="btn">ADD</button> 
        </div>           
      </div>
    
    );
  }
}
export default Todo;
