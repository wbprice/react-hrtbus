import React from 'react'
import Radium from 'radium'

import Card from './Card'
import colors from './Colors'

class StyleGuide extends React.Component {
  render() {

    console.log(colors);

    return (
      <article className="container">

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

        <hr/>

        <section>

          <header>
            <h2>Colors</h2>
          </header>

        </section>

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
                <h2>Card Title</h2>
                <p>A composited card.</p>
              </Card>
            </div>

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

      </article>
    );
  }
}

export default StyleGuide
