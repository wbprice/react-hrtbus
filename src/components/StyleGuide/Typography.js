import React from 'react'

class Typography extends React.Component {
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

export default Typography
