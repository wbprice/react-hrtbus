"use strict";
const React = require("react")
const Component = React.Component
class PositionLocator extends Component {
    render() {
        return (
            <section>
                <h2>Stop Finder</h2>
                <form action="apiv1potato">
                    <label htmlFor="GET-name">Name:</label>
                    <input id="GET-name" type="text"/>
                    <input type="submit" value="Save"/>
                </form>
            </section>
        )
    }

}
module.exports = PositionLocator