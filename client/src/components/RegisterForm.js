import React, { Component } from "react";

export default class RegisterForm extends Component {
    render() {
        return (
            <form className="registerForm">
                <label>
                    <div className="inputName">Username</div>
                    <input className="inputBox" type="text" name="name" />
                </label>
                <label>
                    <div className="inputName">Password</div>
                    <input className="inputBox" type="password" name="name" />
                </label>
                <input className="registerSubmit" type="submit" value="Submit" />
            </form>
        )
    }
}

