import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <>
                {options.map(option => (
                    <button
                        key={option}
                        className={styles.button}
                        onClick={() => onLeaveFeedback(option)}
                    >{option}</button>
                ))}
            </>
        );
    }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}