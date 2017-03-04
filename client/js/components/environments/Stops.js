'use strict';

const React = require('react');
const Component = React.Component;

const Icon = require('./../atoms/Icon');
const StopList = require('./../ecosystems/StopList');

class Stops extends Component {
    render() {
        return (
            <article className="splash-page">
                <Icon source="/dist/images/logo-white.png" height="144" width="144"/>
                <StopList />
            </article>

        )
    }
}
module.exports = Stops;
