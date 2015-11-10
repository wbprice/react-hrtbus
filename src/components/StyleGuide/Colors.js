import React from 'react'
import Colors from '../common/Colors'
import Badge from '../common/Badge'

class ColorSwatch extends React.Component {
  render() {

    let styles = {
      base: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '.5em 0em'
      },
      children: {
        margin: '0em 1em'
      }
    }

    return (
      <section style={styles.base}>
        <Badge style={styles.children} background={this.props.color}/>
        <pre style={styles.children}>{this.props.colorName}</pre>
        <pre style={styles.children}>{this.props.color}</pre>
      </section>
    );

  }
}

class ColorsSwatches extends React.Component {
  render() {
    return (
      <section>

        <header>
          <h2>Colors</h2>
        </header>

        <p>Colors are shared in a module called 'Colors' available in the
           components/common folder.  There should be at least three
           versions of each color (light/base/dark).</p>

        <ColorSwatch colorName="Colors.blue.base" color={Colors.blue.base} />
        <ColorSwatch colorName="Colors.blue.dark" color={Colors.blue.dark} />
        <ColorSwatch colorName="Colors.red.base" color={Colors.red.base} />
        <ColorSwatch colorName="Colors.orange.base" color={Colors.orange.base} />
        <ColorSwatch colorName="Colors.yellow.base" color={Colors.yellow.base} />
        <ColorSwatch colorName="Colors.green.base" color={Colors.green.base} />
        <ColorSwatch colorName="Colors.beige.light" color={Colors.beige.light} />
        <ColorSwatch colorName="Colors.beige.base" color={Colors.beige.base} />
        <ColorSwatch colorName="Colors.beige.dark" color={Colors.beige.dark} />

      </section>
    );
  }
}

export default ColorsSwatches
