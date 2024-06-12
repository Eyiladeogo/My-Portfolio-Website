import React from 'react';

function Modal({ imageSource, name, description, onClose, liveUrl, children}) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSource} alt={name} />
        {children}
        <div className='modal-buttons'>
            <button onClick={onClose} className='close'>Close</button>
            <a href={liveUrl} target='blank' className='live'><button>View Live</button></a>
        </div>
        
      </div>
    </div>
  );
}

export default Modal;
