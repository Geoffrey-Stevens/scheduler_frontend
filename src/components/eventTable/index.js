import React, { Component } from 'react';
import './index.css';
import EventItem from '../eventItem';


class EventTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Delete Event</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.events[0] &&
              this.props.events.map( event =>
                <EventItem removeEvent={this.props.removeEvent} event={event}
                key={event.event_id} />
              )



        }
        </tbody>
      </table>
    );
  }

}
console.log()

export default EventTable;
