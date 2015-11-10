import React from 'react'
import Card from '../common/Card'

class Elements extends React.Component {
  render() {
    return (

      <section>

        <header>
          <h2>Visual Elements</h2>
        </header>

        <h3>Card</h3>
        <p>A responsive card element.</p>

        <section className="row middle-xs">

          <div className="col-xs">
            <Card shadow>
              <h2>A Card With Shadow</h2>
              <p>This card has a shadow!</p>
            </Card>

            <pre>
              &lt;Card shadow&gt;<br/>
              &emsp;&emsp;&lt;h2&gt;A Card With Shadow&lt;/h2&gt;<br/>
              &emsp;&emsp;&lt;p&gt;This card has a shadow!&lt;p&gt;<br/>
              &lt;/Card&gt;
            </pre>
          </div>

          <div className="col-xs">
            <Card>
              <h2>Card Without Shadow</h2>
              <p>This card doesn&rsquo;t have a shadow.</p>
            </Card>

            <pre>
              &lt;Card&gt;<br/>
              &emsp;&emsp;&lt;h2&gt;Card Without Shadow&lt;/h2&gt;<br/>
              &emsp;&emsp;&lt;p&gt;This card doesn&rsquo;t have a shadow.&lt;p&gt;<br/>
              &lt;/Card&gt;
            </pre>

          </div>

        </section>

      </section>

    );
  }

}

export default Elements
