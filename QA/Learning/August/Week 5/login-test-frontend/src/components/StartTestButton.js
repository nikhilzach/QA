// src/components/StartTestButton.js
import React from 'react';

function StartTestButton() {
    const startTest = async () => {
        const response = await fetch('/api/start-test', { method: 'POST' });
        if (response.ok) {
            alert('Test started successfully!');
        } else {
            alert('Failed to start the test.');
        }
    };

    return (
        <button onClick={startTest}>Start Test</button>
    );
}

export default StartTestButton;
