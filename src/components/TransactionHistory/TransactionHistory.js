import React from "react"
import PropTypes from "prop-types"
import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => (
    <section className={styles.Section}>
        <table class="transaction-history">
            <thead>
                <tr>
                <th className={styles.columnName}>Type</th>
                <th className={styles.columnName}>Amount</th>
                <th className={styles.columnName}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id,type,amount,currency})=>(
                    <tr key={id} className={styles.tableString}>
                        <td className={styles.textValue}>{type}</td>
                        <td>{amount}</td>
                        <td className={styles.textValue}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
)

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionHistory