import PropTypes from "prop-types";
import './TransactionHistory.css'

function TransactionHistory({ items }) {
    return (
        <table className="Transaction-history">
            <thead>
                <tr>
                    <th className="Table-header">Type</th>
                    <th className="Table-header">Amount</th>
                    <th className="Table-header">Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id} className="Table-row">
                        <td className="Table-item">{item.type}</td>
                        <td className="Table-item">{item.amount}</td>
                        <td className="Table-item">{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}

export default TransactionHistory;