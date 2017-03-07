'use strict';

const React = require('react');
const Component = React.Component;

const Icon = require('./../atoms/Icon');
const StopFinder = require('./../ecosystems/StopFinder');

class Splash extends Component {
    render() {
        return (
            <article className="splash-page">
                <Icon source="/dist/images/logo-white.png" height="144" width="144"/>
                <StopFinder />
            </article>

        )
    }
}
module.exports = Splash;
