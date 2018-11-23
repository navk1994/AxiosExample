import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Input extends Component {

  render() {
    return (
      <div className="Input">
      <input id="txtSearchMovie" type="text" placeholder="Search Movie Name"/>
      </div>
    );
  }
}

export default Input;
