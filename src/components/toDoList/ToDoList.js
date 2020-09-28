import React, { Component } from 'react';
import ToDoItem from '../toDoItem/ToDoItem';

export default class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      ToDoArray: ['this is a test', 'so is this'],
    }
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.ToDoArray.map((element) => {
            return(
              <ToDoItem note={element}/>
            )
          })}
        </ul>
      </div>
    )
  }
}