import React, { useState } from 'react';

// Don't change the Component name "App"
export default function App() {
    const [isActive, setIsActive] = useState(false);

    const toggleStyle = () => {
        setIsActive(true);
    };

    return (
        <div>
            <p className={isActive ? 'active' : ''}>Style me!</p>
            <button onClick={toggleStyle}>Toggle style</button>
        </div>
    );
}
