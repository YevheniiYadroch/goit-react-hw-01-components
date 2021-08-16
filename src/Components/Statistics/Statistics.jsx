import PropTypes from 'prop-types';
import './Statistics.css';

function Statistics({ title, stats }) {
    return (
        <section className="Statistics">
            {title && (<h2 className="Title">{title}</h2>)}

            <ul className="Stat-list">
                {stats.map(stat => (
                    <li key={stat.id} className="Stat-list-item">
                        <span className="Stat-list-label">{stat.label}</span>
                        <span className="Percentage"> {stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}

export default Statistics;