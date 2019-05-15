import React from 'react';

const Todo = props => (
  <p>
    {props.todo.text}
    <span
      onClick={()=> {
        //add your code here
      }}>
    <b>&nbsp;XX</b>
    </span>
  </p>
);
export default Todo;
