import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'
import Bus from './Bus/Bus'

const style = {

  base: {
    marginBottom: '1em'
  },

  header: {
    background: Colors.blue.dark,
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
  },

  inactive: {
    background: 'transparent',
    color: 'inherit'
  },

  table: {
    width: '100%'
  },

  destination: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center'
  },

  key: {
    background: Colors.blue.base,
    color: 'white'
  },

  cell: {
    fontWeight: 'normal',
    fontSize: '.875em',
    padding: '.25rem 0'
  }

}

class StopKey extends React.Component {
  render() {
    return (
      <thead>
        <tr style={style.key}>
          <th style={style.cell}>Route</th>
          <th style={[style.cell, style.destination]}>Destination</th>
          <th style={style.cell}>Arriving</th>
        </tr>
      </thead>
    )
  }
}

class NoBuses extends React.Component {
  render() {
    return (
      <span>No Buses Scheduled</span>
    )
  }
}

StopKey = Radium(StopKey)

class Stop extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {

    let component = (function() {
      console.log('this?');
      console.log(this);
      if (this.props.stop.buses.length === 0) {
        return <NoBuses />
      } else {
        return <StopKey />
      }
    }.bind(this)())

    return (
      <section style={style.base}>

        <header style={[
            style.header,
            this.props.stop.buses.length === 0 && style.inactive
          ]}>
          <h3>{this.props.stop.stop_name}</h3>
          <span>{this.props.stop.stop_id}</span>
        </header>

        <table style={style.table}>

          {component}

          <tbody>
            {
              this.props.stop.buses.map(function(bus, index) {
                return (
                  <Bus
                    key={bus.bus_number}
                    index={index}
                    bus={bus}/>
                );
              })
            }
          </tbody>

        </table>

      </section>
    )
  }
};

export default Radium(Stop)
