import React from "react"
import PropTypes from "prop-types"
import Statistics from "./Statistics"

const StatList = ({title, statistics}) => (
    <section class="statistics">
  {title && <h2 class="title">{title}</h2>}
        <ul class="stat-list">
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