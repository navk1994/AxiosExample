import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Button extends Component {

  myFunction = () => {


  }

  mySecondFunction = () => {

    ReactDOM.render("",document.getElementById('tableZone'));
  }
  render() {
    return (
      <div className="Button">
        <button onClick={this.myFunction}>Search</button>

      </div>
    );
  }
}

export default Button;
