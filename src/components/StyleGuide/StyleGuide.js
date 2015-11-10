import React from 'react'
import Radium from 'radium'

import Card from '../common/Card'
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

class StyleGuideTypography extends React.Component {
  render() {
    return (
      <section>

        <header>
          <h2>Headings</h2>
        </header>

        <p>Headings, by default, do not have any margins, but rely on margins
           from nearby tags to look good.</p>

        <h1>Heading 1</h1>
        <p>Used for page headings</p>

        <h2>Heading 2</h2>
        <p>Used for article divisions</p>

        <h3>Heading 3</h3>
        <p>Used for component divisions</p>

        <h4>Heading 4</h4>
        <p>Used for subcomponent</p>

        <h5>Heading 5</h5>
        <p>Used for something tiny</p>

      </section>
    );
  }
}

class StyleGuideElements extends React.Component {
  render() {
    return (

      <section>

        <header>
          <h2>Visual Elements</h2>
        </header>

        <h3>Card</h3>
        <p>A responsive card element.</p>

        <pre>
          &lt;Card Title&gt;<br/>
          &emsp;&emsp;&lt;h2&gt;Card Contents Here&lt;/h2&gt;<br/>
          &emsp;&emsp;&lt;p&gt;A composited card!&lt;p&gt;<br/>
          &lt;/Card&gt;
        </pre>

        <section className="row middle-xs">

          <div className="col-xs">
            <Card shadow>
              <h2>A Card With Shadow</h2>
              <p>This card has a shadow!</p>
            </Card>
          </div>

          <div className="col-xs">
            <Card>
              <h2>Card Title</h2>
              <p>This card doesn&rsquo;t have a shadow.</p>
            </Card>
          </div>

        </section>

        <h3>Callout</h3>
        <p>A callout for a visual element</p>

      </section>

    );
  }

}

class StyleGuideColors extends React.Component {
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

class StyleGuide extends React.Component {
  render() {

    return (
      <article className="container">

        <StyleGuideTypography />

        <StyleGuideColors />

        <StyleGuideElements />

      </article>
    );
  }
}

export default StyleGuide
