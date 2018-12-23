import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import DateContainer from '../components/DateBox/DateContainer';

class Home extends Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: "AIzaSyCISwcFPRGB-nMJ6iU4aXfEfLSXxNiuGts",
      authDomain: "group-availability.firebaseapp.com",
      databaseURL: "https://group-availability.firebaseio.com",
      projectId: "group-availability",
      storageBucket: "group-availability.appspot.com",
      messagingSenderId: "952090037085"
    };
    this.app = firebase.initializeApp(config);
    this.database = this.app.database().ref().child("submissions");
  }

  componentDidMount(){
    this.database.on('value', snap => {
      var data = snap.val(),
      people = [],
      pDates = [],
      theCode = [];

      for(var d in data){
        people.push(data[d].name);
        pDates.push(data[d].dates);
      }

      for(var i = 1545436800; i < 1547942400; i += 86400){
        var textnode = new Date(i * 1000).toDateString(),
        addPeople = [],
        uniqueId = (i/86400) - 17886;

        for(var j = 0; j < pDates.length; j++){
          if(pDates[j].includes(i.toString())){
            addPeople.push(people[j]);
          }
        }

        var test = <DateContainer date={textnode} people={addPeople} uniqueId={uniqueId}/>;
        theCode.push(test)
      }

      ReactDOM.render(theCode, document.getElementById('main-content'));
    });
  }

  render() {
    return (
		<div>
      <h1> HELLO MFKERS HERES EVERYONES AVAILABILITY</h1>
      <a href="/availability"> Add your availability here </a>

      <div id="main-content">

      </div>
		</div>
    );
  }
}

export default Home;
