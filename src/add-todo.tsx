import React, { Component } from 'react';

class AddTodo extends Component <{}, { todoText: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      todoText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    // your code here
  }

  handleSubmit() {
    // your code here
  }

  render() {
    return (
      <div className="row">
        <input
          type="text"
          value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> + </button>
      </div>
    );
  }
}

export default AddTodo;
