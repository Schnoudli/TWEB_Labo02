import React, { Component } from 'react';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class List extends Component{
  render(){
    const numbers = [1, 2, 3, 4, 5];
    return (
      <NumberList numbers={numbers} />
    );
  }
}
