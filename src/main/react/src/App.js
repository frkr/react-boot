import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CONTEXT} from './constants';

class App extends Component {

    constructor() {
        super();
        this.state = {texto: ""};
    }

    componentDidMount() {
        fetch(CONTEXT + "/rs/teste").then((response) => response.text()).then((texto) => this.setState({texto}));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    {this.state.texto}
                </p>
            </div>
        );
    }
}

export default App;
