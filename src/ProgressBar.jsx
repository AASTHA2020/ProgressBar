import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const incrementProgress = () => {
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 1; // Increment by 1% each time
        } else {
          return prevProgress; // Stop incrementing at 100%
        }
      });
    };

    // Set an interval to increment the progress every 100ms
    const interval = setInterval(incrementProgress, 100);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
      <div className="progress-status">
        {progress < 100 ? 'Loading' : 'Complete'}
      </div>
    </div>
  );
};

export default ProgressBar;
