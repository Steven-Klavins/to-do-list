import React, { Component } from 'react';

export default class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.note = ''
  }

  render() {
    return(
      <li>
          {this.props.note}
      </li>
    )
  }
}