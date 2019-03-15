import React, { Component } from 'react';
import './index.css';


class DateForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.getEvents}>
        <div className="form-group">
          <label>Month</label>
          <input type="number" className="form-control" name="month" />
        </div>
        <div className="form-group">
          <label>Day</label>
          <input type="number" className="form-control" name="day" />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input type="number" className="form-control" name="year" required />
        </div>
        <button type="submit" className="btn btn-primary">Show Event</button>
      </form>
    );
  }
}

export default DateForm;
