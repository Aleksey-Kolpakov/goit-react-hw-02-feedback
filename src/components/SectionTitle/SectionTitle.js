import React from 'react';
import styles from './SectionTitle.module.css'
const SectionTitle = ({ title, children }) => {
    return (
        <>
            <h2 className={styles.title}>Please leave Feedback</h2>
            {children}
        </>
    );
};

export default SectionTitle;