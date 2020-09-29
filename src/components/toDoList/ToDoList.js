import React, { Component } from 'react';
import ToDoItem from '../toDoItem/ToDoItem';

export default class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      ToDoArray: ['this is a test', 'so is this'],
    }
  }

  async componentDidMount() {
    const url = './exampleGet.json'
    fetch(url)
      .then( res => res.json())
      .then( (result) => {
        this.setState({
          ToDoArray: result.notes
        })
      })
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.ToDoArray.map((element, index) => {
            return(
              <ToDoItem note={element} key={index}/>
            )
          })}
        </ul>
      </div>
    )
  }
}