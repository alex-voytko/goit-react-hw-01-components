import React from "react"
import PropTypes from "prop-types"
import defaultAvatar from "./../Profile/user-avatar-default.png"
import styles from "./FriendListItem.module.css"

const FriendListItem = ({avatar,name,available,id}) => (
    <li className={styles.item} key={id}>
        <img className={styles.avatar} src={avatar} alt={name} width="48"/>
        <p class={styles.name}>{name}</p>
        {available ? (<span className={styles.statusOnline}>Online</span>)
                    : (<span className={styles.statusOffline}>Offline</span>)}
    </li>
)

FriendListItem.defaultProps = {
    avatar: defaultAvatar
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    available: PropTypes.oneOf([true, false]).isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default FriendListItem