import React, { Component } from 'react'
import { getData } from '../../utils/apiCalls';

export default class ToDoForm extends Component {
  constructor(){
    super();
    this.state = {
      inputFieldText: ""
    }
    this.handleSubmit.bind(this)
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      "note": this.state.inputFieldText
    }
    const url ="./examplePost.json";
    fetch(url)
      .then( res => res.json())
      .then( (result) => {
        console.log('we made it this far');
        console.log(result);
      });
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
