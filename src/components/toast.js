import React from 'react';
import { useState, useEffect } from 'react';

const Toast = ({ message, duration = 3000, onClose }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToast(false);
      onClose();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  const handleClose = () => {
    setShowToast(false);
    onClose();
  };

  return (
    <>
      {showToast && (
        <div className="toast-container">
          <div className="toast-content">
            <span className="toast-message">{message}</span>
            <button className="toast-close" onClick={handleClose}>
              <span>&times;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;