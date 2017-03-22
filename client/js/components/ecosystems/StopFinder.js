'use strict'

const React = require('react');
const Component = React.Component;
// const palette = require('./../../palette');

class StopFinder extends Component {
    render() {
        return (
            <section id="StopFinder">
                <h1>HRTB.us</h1>
                <h2>Stop Finder</h2>
                <div>
                    <h3>By Stop Number</h3>
                <form method="GET" action="/api/v1/stopId">
                    <label htmlFor="stopId">Stop Number:</label>
                    <input id="stopId" name="stopId" type="number" />
                    <button class="loadMore">Search</button>
                </form>
                </div>
                <div>
                    <h3>By Street Intersection</h3>
                <form method="GET" action="/api/v1/intersections">
                <fieldset>
                    <label htmlFor="intersection1">Street #1:</label>
                    <input id="intersection1" name="intersection1" placeholder="StreetName1" />
                </fieldset>
                <fieldset>    
                    <label htmlFor="intersection2">Street #2</label>
                    <input id="intersection2" name="intersection2" placeholder="StreetName2" />
                </fieldset>
                <button class="loadMore">Search</button>    
                </form>
                </div>
            </section>
        )
    }
}

module.exports = StopFinder;