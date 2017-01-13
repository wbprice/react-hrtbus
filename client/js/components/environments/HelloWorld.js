'use strict';

const React = require('react');
const Component = React.Component;

const Header = require('./../ecosystems/Header');

class HelloWorld extends Component {

    render() {
        return (
            <article>
                <Header />
                <h1>Hello World!</h1>
            </article>
        )
    }

}

module.exports = HelloWorld
