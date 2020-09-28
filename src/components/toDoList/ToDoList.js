import React, { Component } from 'react';
import ToDoItem from '../toDoItem/ToDoItem';

export default class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      ToDoArray: ['this is a test', 'so is this'],
      toDoItems: []
    }
  }
  componentDidMount = () => {
    let newArray = []
    this.state.ToDoArray.forEach(function(element){
      let toDoItemToBeRendered = <ToDoItem note={element}/>
      newArray.push(toDoItemToBeRendered)
    })
    this.setState({ toDoItems: newArray })
  }
  render() {
    return(
      <div>
      {this.state.toDoItems.map(function(element){
        return(
          <li>{element}</li>
        )
      })}


      </div>
    )
  }
}