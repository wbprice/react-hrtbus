'use strict';

const React = require('react');
const Component = React.Component;

const Icon = require('./../atoms/Icon');
const Header = require('./../ecosystems/Header');
const StopFinder = require('./../ecosystems/StopFinder');

class Splash extends Component {
    render() {
        return (
            <article className="splash-page">
                <Header />
                <section className="pure-g">
                    <div className="pure-u-1-1">
                        <Icon source="/dist/images/logo-blue.svg" height="144" width="144"/>
                        <StopFinder />
                    </div>
                </section>
            </article>

        )
    }
}
module.exports = Splash;
