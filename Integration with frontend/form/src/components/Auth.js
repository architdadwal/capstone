import React, { Component } from 'react'

class Auth extends Component {
    login() {
        console.warn("state", this.state)
        fetch('http://localhost:8080/api/auth/signin', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.accessToken); //jwt token we are storing it in localstorage.
                localStorage.setItem("auth", JSON.stringify(resp.accessToken))
            })
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br />
                    <input type="text" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br />
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
}

export default Auth;