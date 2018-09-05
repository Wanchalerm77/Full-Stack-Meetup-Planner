import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Meetups from "./Meetups";
import About from "./About";
import MeetUpDetails from "./MeetUpDetails";
import AddMeetup from "./AddMeetup";
import EditMeetup from "./EditMeetups";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Meetups} />
          <Route exact path="/about" component={About} />
          <Route exact path="/meetups/add" component={AddMeetup} />
          <Route exact path="/meetups/edit/:id" component={EditMeetup} />

          <Route exact path="/meetups/:id" component={MeetUpDetails} />
        </Switch>
      </main>
    );
  }
}

export default Main;
