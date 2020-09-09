import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    formSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friends');
            })
            .catch(err => console.log('something went wrong', err))
    }

    inputChange = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
            }
        });
    };
    
    render() {
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.inputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.inputChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default Login;