import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close modal">✖</button>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
      </div>
    </div>
  );
};

export default Modal;
