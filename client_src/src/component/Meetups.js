import React, { Component } from "react";
import axios from "axios";
import MeetupItem from "./MeetupItem";

class Meetups extends Component {
  constructor() {
    super();
    this.state = {
      meetups: []
    };
  }

  componentWillMount() {
    this.getMeetups();
  }

  getMeetups() {
    axios.get("http://localhost:3000/api/meetupzs").then(response => {
      this.setState({
        meetups: response.data
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    let meetupItems = this.state.meetups.map((meetup, i) => {
      return <MeetupItem key={meetup.id} item={meetup} />
    });
    return (
      <div>
        <ul className="collection">{meetupItems}</ul>
      </div>
    );
  }
}

export default Meetups;
