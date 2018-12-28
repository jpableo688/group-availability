import React, { Component } from 'react';
import firebase from 'firebase';

class Availability extends Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    this.app = firebase.initializeApp(config);
    this.database = this.app.database().ref().child("home");

    this.addDates = this.addDates.bind(this);
    this.saveData = this.saveData.bind(this);

  }

  componentDidMount() {
    this.addDates();
  }

  addDates() {
    var target = document.getElementsByClassName('inputDates')[0];
    var count = 0;

    for(var i = 1545436800; i < 1547942400; i += 86400){
      var textnode = document.createTextNode(new Date(i * 1000).toDateString());
      var textnode2 = document.createElement("br");

      var checkbox = document.createElement("input");
      checkbox.type = 'checkbox';
      checkbox.name = 'date' + ((i/86400) - 17886);
      checkbox.value = i;


      target.appendChild(textnode);
      target.appendChild(checkbox);
      target.appendChild(textnode2);
    }
  }

  saveData() {
    var checkedBoxes = document.getElementsByClassName("inputDates")[0].childNodes;
    var name = document.getElementsByClassName("inputName")[0].childNodes[1].value;
    var returnData = [];

    for(var i = 1; i < 63; i ++){
      if(checkedBoxes[i].checked){
        returnData.push(checkedBoxes[i].value);
      }
    }

    if(!name || returnData.length === 0){
      alert("YO CMON ENTER YOUR NAME AND/OR DATES");
      return;
    }

    var dataSend = {};
    dataSend.name = name;
    dataSend.dates = returnData;

    console.log(dataSend);

    var key = name.split(" ");
    console.log(key);

    firebase.database().ref('submissions/' + key[0]).set({
      name: dataSend.name,
      dates: dataSend.dates
    });

    window.location.assign("/");
  }

  render() {
    return (
      <div>
        <div className="inputName">
          Enter your name here: <input type="text" name="name"/>
        </div>

        <div className="inputDates">
        </div>

        <div className="submitButton">
          <button onClick={this.saveData}> Submit </button>
        </div>
      </div>
    );
  }
}

export default Availability;
