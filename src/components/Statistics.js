import React from "react"
import PropTypes from "prop-types"

const Statistics = (title, stats) => (
    <li class="item" key={stats.id}>
      <span class="label">{stats.label}</span>
      <span class="percentage">{stats.percentage}</span>
    </li>
)

Statistics.defaultProps = {
    title: ''
}

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics