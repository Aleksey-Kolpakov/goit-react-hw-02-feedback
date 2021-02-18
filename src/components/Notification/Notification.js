import React from 'react';
import styles from './Notification.module.css';
const Notification = ({message}) => {
    return (
       <>
       <h3 className={styles.title}>{message}</h3>
       </>
    );
};

export default Notification;