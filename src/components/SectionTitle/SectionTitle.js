import React from 'react';
import PropTypes from 'prop-types';
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

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}