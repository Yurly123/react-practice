import React from 'react';
import styles from './App.module.css';

function Clock() {
    function getTime() {
        const date = new Date()
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const seconds = String(date.getSeconds()).padStart(2, '0')
        return `${hours}:${minutes}:${seconds}`
    }
    const [time, setTime] = React.useState(getTime())
    setInterval(() => {
        setTime(getTime())
    }, 1000);
    return (
        <h3 className={styles.clock}>{time}</h3>
    )
}

export default Clock