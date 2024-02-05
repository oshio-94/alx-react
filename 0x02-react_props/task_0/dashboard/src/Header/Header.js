import React, { Component } from "react";
import holbertonLogo from '../assets/holberton_logo.jpg';
import './Header.css';

class Header extends Component {
    render() {
        return (
        <header className="App-header">
            <img src={holbertonLogo} alt="holberton-logo"></img>
            <h1>School dashboard</h1>
        </header>
        )
    }
}
export default Header;