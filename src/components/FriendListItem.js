import React from "react"
import PropTypes from "prop-types"
import defaultAvatar from "./user-avatar-default.png"

const FriendListItem = ({avatar,name,available,id}) => (
    <li class="item" key={id}>
        <span class="status">{available}</span>
        <img class="avatar" src={avatar} alt={`${name}-photo`} width="48" />
        <p class="name">{name}</p>
    </li>
)

FriendListItem.defaultProps = {
    avatar: defaultAvatar
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    available: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default FriendListItem