import React from 'react';

const NotFind = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Ups.... we did not find the page</h1>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        backgroundColor: '#212529',
        color: '#f8f9fa'
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    text: {
        fontSize: '1rem',
    },
};

export default NotFind;
