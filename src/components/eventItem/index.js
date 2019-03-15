import React, { Component } from 'react';
import './index.css';


class EventItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.event.title,
      day: this.props.event.day,
      month: this.props.event.month,
      year: this.props.event.year,
      notes: this.props.event.notes,
      event_id: this.props.event.event_id
    }
    //console.log(this.state)
  }
  render() {
    return (
      <tr>
        <td>{this.state.title}</td>
        <td>{this.state.month}/{this.state.day}/{this.state.year}</td>
        <td>{this.state.notes}</td>
        <td>
          <button className="btn btn-danger"
          onClick={() => this.props.removeEvent(this.state.event_id)}>X</button>
        </td>
      </tr>
    );
  }

}
console.log()

export default EventItem;
