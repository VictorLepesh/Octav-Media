import React, { Component } from "react";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <h4>Octav Media</h4>
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Chat</a>
                    </li>
                    <li>
                        <a href="#">Forum</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>

                <div className="burgerIcon">
                    <div className="burgerLines burgerLine1"></div>
                    <div className="burgerLines burgerLine2"></div>
                    <div className="burgerLines burgerLine3"></div>
                </div>
            </nav>
        )
    }
}