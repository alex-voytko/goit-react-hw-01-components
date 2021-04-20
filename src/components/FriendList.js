import React from "react"
import PropTypes from "prop-types"
import FriendListItem from "./FriendListItem"

const FriendList = ({friends}) => (
    <ul class="friend-list">
        {friends.map(({avatar,name,isOnline}) => (
            <FriendListItem
            avatar={avatar}
            name={name}
            available={isOnline}
            />
        ))}
    </ul>
)


export default FriendList