import React from 'react';
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