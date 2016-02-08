import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'
import Bus from './Bus/Bus'

const style = {

  base: {
    marginBottom: '1.5em'
  },

  header: {
    background: Colors.blue.dark,
    padding: '1em',
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },

  inactive: {
    background: 'transparent',
    color: 'inherit',
    padding: '0.25em'
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

    let style = {
      textAlign: 'center',
      margin: '0'
    }

    return (
      <p style={style}>No Buses Scheduled</p>
    )
  }
}

StopKey = Radium(StopKey)

const heartStyle = {
  fontSize: '2em'
}

class SaveIcon extends React.Component {

  componentDidMount() {

  }

  onClick() {
    this.props.toggleFaveStop()
  }

  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        {this.props.isFavorited ? <span style={heartStyle}> &#9829;</span> : <span style={heartStyle}> &#9825;</span>}
      </div>
    )
  }
}

SaveIcon.propTypes = {
  toggleFaveStop: React.PropTypes.func
}

class Stop extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {

    //let favorited = 
    return (

      <section style={style.base}>

        <header style={[
            style.header,
            this.props.stop.buses.length === 0 && style.inactive
          ]}>
          <div style={{flex: '1'}}>
            <h3>{this.props.stop.stopName}</h3>
            <span>{this.props.stop.stopId}</span>
          </div>
          <div>
            <SaveIcon 
              faves={this.props.faves}
              toggleFaveStop={this.props.toggleFaveStop} 
              stopId={this.props.stop.stopId} 
              isFavorited={this.props.isFavorited} />
          </div>
        </header>

        {(() => {

          if (this.props.stop.buses.length === 0) {

            return <NoBuses />

          } else {

            return (
              <table style={style.table}>
                <StopKey />
                <tbody>
                  {
                    this.props.stop.buses.map(function(bus, index) {
                      return (
                        <Bus
                          key={bus.busId}
                          bus={bus}/>
                      )
                    })
                  }
                </tbody>
              </table>
            )

          }
        }())}

      </section>
    )
  }
};

Stop.propTypes = {
  toggleFaveStop : React.PropTypes.func
}

export default Radium(Stop)
