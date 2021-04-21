import React from "react"
import PropTypes from "prop-types"
import defaultAvatar from "./user-avatar-default.png"
import styles from "./Profile.module.css"

// В компоненты мы вставляем лишь разметку, как оно должно выглядеть в html
const Profile = ({avatar, name, tag, location, followers, views, likes}) => (
    <div className={styles.profileContainer}>
        <div className={styles.avatarContainer}>
            <img
              src={avatar}
              alt="Аватар пользователя"
              className={styles.Avatar}
            />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.textBlock1}>
                <p className={styles.Name}>{name}</p>
                <p className={styles.Tag}>@{tag}</p>
                <p className={styles.Location}>{location}</p>
            </div>
            <ul>
                <li className={styles.item}>
                  <span className={styles.Label}>Followers:</span>
                  <span className={styles.Quantity}>{followers}</span>
                </li>
                <li className={styles.item}>
                  <span className={styles.Label}>Views:</span>
                  <span className={styles.Quantity}>{views}</span>
                </li>
                <li className={styles.item}>
                  <span className={styles.Label}>Likes:</span>
                  <span className={styles.Quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    </div>
)
//Не забываем про .defaultProps и .propTypes
Profile.defaultProps = {
    avatar: defaultAvatar
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Profile