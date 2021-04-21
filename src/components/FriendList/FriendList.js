import React from "react"
import FriendListItem from "./FriendListItem"
import styles from "./FriendList.module.css"

const FriendList = ({friends}) => (
    <section className={styles.Section}>
        <h2 className={styles.Title}>Friends</h2>
        <ul className={styles.List}>
            {friends.map(({avatar,name,isOnline}) => (
                <FriendListItem
                avatar={avatar}
                name={name}
                available={isOnline}
                />
            ))}
        </ul>
    </section>

)


export default FriendList