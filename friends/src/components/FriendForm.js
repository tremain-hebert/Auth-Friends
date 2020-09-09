import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendForm extends React.Component {

     state = {
         newFriend:{
             name: '',
             email: '',
             age: '',
         }
     }

    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', this.state.newFriend)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    inputChange = e => {
        this.setState({
            newFriend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return(
            <form onSubmit={this.addFriend}>
                <input
                    type='text'
                    name='name'
                    placeholder="name"
                    value={this.state.newFriend.name}
                    onChange={this.inputChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.newFriend.email}
                    onChange={this.inputChange}
                />
                <input
                    type="text"
                    name='age'
                    placeholder='age'
                    value={this.state.newFriend.age}
                    onChange={this.inputChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}
export default FriendForm;