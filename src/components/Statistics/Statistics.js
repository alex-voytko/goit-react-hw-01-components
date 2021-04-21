import React from "react"
import PropTypes from "prop-types"
import styles from "./Statistics.module.css"
// import statData from "./../statistical-data.json"

const Statistics = ({id, label, percentage}) => (
  <li className={styles.item} key={id}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}</span>
</li>
)

Statistics.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics