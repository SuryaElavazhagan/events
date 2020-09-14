import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { EventListing } from './EventListing';
import { NewEvent } from './NewEvent';

export function Events() {
  return (
    <Router>
      <div className="event-root">
        <Switch>
          <Route path="/new">
            <NewEvent />
          </Route>
          <Route path="/">
            <EventListing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}