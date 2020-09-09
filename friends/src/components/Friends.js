import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then((res) => {
            console.log(res.data)
            this.setState({
                ...this.state,
                friendsList: res.data
            })
        })
        .catch((err) => console.log('getFriends error:', err));
    }


    render() {
        return(
            console.log(this.state.friendsList),
            <div>
                <button>Add Friend</button>
            </div>,
            this.state.friendsList.map((friend) => (
                <div>
                    <h1>{friend.name}</h1>
                    <h2>{friend.email}</h2>
                    <h3>{friend.age}</h3>
                </div>
            ))
        )
    }
}
export default Friends;