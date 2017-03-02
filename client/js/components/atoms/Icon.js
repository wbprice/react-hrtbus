const React = require('react');

class Icon extends React.Component {
  render() {

    let height = this.props.height || '48px',
        width = this.props.width || '48px',
        source = this.props.source

    return (
      <img className="app-header--image"
           src={this.props.source}
           width={width}
           height={height} />
    );
  }
}

module.exports = Icon
