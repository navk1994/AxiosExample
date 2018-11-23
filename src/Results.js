import React, { Component } from 'react';
import Input from './Input.js';

const axios = require("axios");

var apiUrl = "http://www.omdbapi.com/?t=";
var apiKey = "&apikey=7807a886";
var input = "Tarzan";

var movieTitle = document.querySelector("#Title");
var movieYear = document.querySelector("#Year");
var movieGenre = document.querySelector("#Genre");

class Results extends Component {



  showResult = () => {
    var txtInput = document.getElementById('txtSearchMovie').value;

    if(txtInput == "")
    {
    txtInput = "Type in  a movie";
    }
    else{
    axios.get(apiUrl + txtInput + apiKey)
      .then(function (response) {
        alert(response.data.Title);
document.getElementById('Title').innerHTML = response.data.Title;
document.getElementById('Year').innerHTML = response.data.Year;
document.getElementById('Genre').innerHTML = response.data.Genre;


      })
      .catch(function (error) {
        console.log(error);
      });


  }
}

  render() {
    return (
      <div className="Table ">
      <div className="form-group">
      <input type="text" id="txtSearchMovie" className="form-control"/>
      </div>

      <button className="btn btn-primary"onClick={this.showResult}>Click This Button</button>
      <br/>
<table className="table ">
  <tr>
    <th >Title</th>
    <th >Year</th>
    <th >Genre</th>
  </tr>
  <tr>
    <td id="Title"></td>
   <td id="Year"></td>
   <td id="Genre"></td>
 </tr>
</table>
      </div>
    );
  }
}

export default Results;
