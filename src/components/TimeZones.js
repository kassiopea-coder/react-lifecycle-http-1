import { Component } from 'react';
import TimeZonesForm from './TimeZonesForm';
import TimeZonesClock from './TimeZonesClock';
import { nanoid } from 'nanoid';

export default class TimeZones extends Component {
  state = { clocks: [] };

  addClock = ({ title, zone }) => {
    this.setState(prevState => ({
      clocks: [...prevState.clocks, { id: nanoid(), title, zone }]
    }))
  }

  deleteClock = (id) => {
    return () => {
      this.setState(prevState => ({
        clocks: prevState.clocks.filter((clock) => clock.id !== id)
      }))
    }
  }

  render() {
    return (
      <div className="TimeZones">
        <TimeZonesForm addClock={this.addClock} />
        <div className="TimeZones-clockscontainer">
          {this.state.clocks.map((clock) =>
            <TimeZonesClock
              key={clock.id}
              title={clock.title}
              zone={+clock.zone}
            >
              <div
                className="TimeZones-delete"
                onClick={this.deleteClock(clock.id)}
              />
            </TimeZonesClock>
          )}
        </div>
      </div>
    );
  }
}