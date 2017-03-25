const React = require('react')

const Component = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    state: React.PropTypes.obj
  },

  render: function () {
    return (
      <html>

        <head>
          <title>HRT Bus Finder</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
          <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css" integrity="sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD" crossorigin="anonymous" />
          <link rel="stylesheet" href="/dist/css/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
        </head>

        <body>
          <div id="app-mount"
              dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
          <script id="app-state"
              dangerouslySetInnerHTML={{ __html: this.props.state }}>
          </script>
          <script src="dist/client.js"></script>
        </body>

      </html>
    )
  }
})

module.exports = Component
