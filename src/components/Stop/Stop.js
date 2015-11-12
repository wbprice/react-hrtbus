import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'
import Bus from './Bus/Bus'

const style = {
  header: {
    background: Colors.blue.dark,
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
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
    color: 'white',

    cell: {
      fontWeight: 'normal',
      fontSize: '.875em',
      padding: '.25rem 0'
    }

  }
}

class Stop extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <section>

        <header style={style.header}>
          <h3>{this.props.stop.stop_name}</h3>
          <span>{this.props.stop.stop_id}</span>
        </header>

        <table style={style.table}>

          <thead>
            <tr style={style.key}>
              <th style={style.key.cell}>Route</th>
              <th style={[style.key.cell, style.destination]}>Destination</th>
              <th style={style.key.cell}>Arriving</th>
            </tr>
          </thead>

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
