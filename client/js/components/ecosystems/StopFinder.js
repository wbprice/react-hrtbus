'use strict'

const React = require('react');
const Component = React.Component;

class StopFinder extends Component {
    render() {
        return (
            <section>
                <form method="GET" action="/api/v1/stopId">
                    <label for="stopId">Stop Number:</label>
                    <input id="stopId" name="stopId" type="number" />
                    <button>Search</button>
                </form>
            </section>
        )
    }
}

module.exports = StopFinder;