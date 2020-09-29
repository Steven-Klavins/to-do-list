import React, { Component } from 'react'

export default class ToDoForm extends Component {
  constructor(){
    super();
    this.state = {
      inputFieldText: ""
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.inputFieldText)
  }

  render() {
    return (
      <div>
        <h1> To Do List </h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputFieldText} onChange={ (e) => this.setState({ inputFieldText: e.target.value }) } type="textarea"></input>
          <button> Submit </button>
        </form>
        
      </div>
    )
  }
}
