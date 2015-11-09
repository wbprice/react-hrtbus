import React from 'react'
import Radium from 'radium'

class StyleGuide extends React.Component {
  render() {
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
            padding: 1em;<br/>
            background: white;<br/>
            margin-bottom: 1em;
          </pre>

          <section className="card shadow">
            <h2>Card Title</h2>
            <p>This is a lengthy description of a thing that this card is doing. This card has a shadow.</p>
          </section>

          <section className="card">
            <h2>Card Title</h2>
            <p>This card doesn&rsquo;t have a shadow.</p>
          </section>

          <h3>Callout</h3>
          <p>A callout for a visual element</p>
          

        </section>

      </article>
    );
  }
}

export default StyleGuide
