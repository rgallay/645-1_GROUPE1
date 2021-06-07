import React, { useState, useEffect } from "react";
import {ChatAPI} from"./ChatAPI";
//import "./styles.css";

/* Custom Hook providing the status of a friend */
export function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });
    return isOnline;
}

/* Friend status display Component */
/* Uses our custom hook for rendering the status */
export function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);
    if (isOnline === null) {
        return "Loading...";
    }
    return isOnline ? "Online" : "Offline";
}

/* Friend list item Component */
/* Uses our custom hook for rendering the friend's color */
function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);
    return (
        <li style={{ color: isOnline ? "green" : "black" }}>
            {props.friend.username}
        </li>
    );
}

export default function AppChatAPI() {
    /* Keep friends in the state */
    let [friends, setFriends] = useState([]);

    /* Keep current friend in state */
    let [currentFriend, setCurrentFriend] = useState(null);

    /* Load friends on component mount */
    useEffect(() => {
        async function getCandidat() {}
        let friends = ChatAPI.getFriends();
        setFriends(() => friends);
        setCurrentFriend(() => friends[0]);
    }, []);

    /* Simulate friend coming online after a few seconds */
    useEffect(() => {
        if (currentFriend != null) {
            setTimeout(() => ChatAPI.toggleFriendStatus(currentFriend.id), 2000);
        }
    }, [currentFriend]);

    return (
        <div>
            <h1>Friend List</h1>
            <ul>
                {friends.map(friend => (
                    <FriendListItem key={friend.id} friend={friend} />
                ))}
            </ul>
            <h2>Selected Friend Status</h2>
            {currentFriend !== null && (
                <div>
                    <span>{currentFriend.username}</span>
                    {" : "}
                    <FriendStatus friend={currentFriend} />
                </div>
            )}
        </div>
    );
}
