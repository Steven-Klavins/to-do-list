import React, { Component } from 'react';

export default class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.note = ''
  }

  render() {
    console.log(this.props.note);
    console.log('this is being rendered');
    return(
      <div>
          {this.props.note}
      </div>
    )
  }
}