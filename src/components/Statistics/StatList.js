import React from "react"
import PropTypes from "prop-types"
import Statistics from "./Statistics"
import styles from "./StatList.module.css"

const StatList = ({title, statistics}) => (
    <section className={styles.sectionContainer}>
  {title && <h2 class="title">{title}</h2>}
        <ul className={styles.listContainer}>
            {statistics.map(({id, label, percentage}) => (
                <Statistics
                    id={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
        </ul>
</section>
)

StatList.defaultProps = {
    title: ''
}

StatList.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
    })).isRequired
}


export default StatList