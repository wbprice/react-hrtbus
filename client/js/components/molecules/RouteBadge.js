import React from 'react'
import Radium from 'radium'
import Badge from '../../common/Badge'
import Colors from '../../common/Colors'

let style = {
  color: Colors.blue.dark,
  fontSize: '1.5rem',
  fontWeight: '700'
}

class RouteBadge extends React.Component {
  render() {
    return (
      <Badge background={Colors.blue.base}>
        <span style={style}>
          {this.props.route}
        </span>
      </Badge>
    )
  }
}

export default RouteBadge
