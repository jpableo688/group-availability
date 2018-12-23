import React, { Component } from 'react';
import './DateBox.css';

class DateBox extends Component {
  constructor(props){
    super(props);
    this.renderPeople = this.renderPeople.bind(this);
  }

  componentDidMount(){
    this.renderPeople();
  }

  renderPeople(){
    var people = this.props.people;
    var peopleDiv = document.createElement("div");
    var target = document.getElementsByClassName('people-ctn' + this.props.uniqueId)[0];

    for(var i = 0; i < people.length; i++){
      peopleDiv.innerHTML += people[i] + '<br />';
    }

    target.appendChild(peopleDiv);
  }

  render() {
    var theClass = "people-ctn" + this.props.uniqueId;
    return (
		<div>
      <div className="square-ctn">
        <div className="date-ctn">
          {this.props.date}
        </div>

        <div className={theClass}>
        </div>
      </div>
		</div>
    );
  }
}

export default DateBox;
