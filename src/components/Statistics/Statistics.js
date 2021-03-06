import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <h3 className={styles.title}>Statistic</h3>
            <ul className={styles.list}>
                <li className={styles.item}>Good : {good}</li>
                <li className={styles.item}>Neutral : {neutral}</li>
                <li className={styles.item}>Bad : {bad}</li>
                <li className={styles.item}>Total : {total}</li>
                <li className={styles.item}>Positive Feedback : {positivePercentage}%</li>
            </ul>
        </>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
