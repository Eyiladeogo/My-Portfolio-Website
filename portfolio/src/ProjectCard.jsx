import React, { useState } from 'react';
import Modal from './Modal';

export function ProjectCard({ imageSource, name, description, liveUrl, children }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleImageClick = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

    return (
        <div className="work-explanation">
            <img src={imageSource} alt={name} onClick={handleImageClick} />
            <p>{name}</p>
            {/* <p>{description}</p> */}
            {isModalOpen && (
                <Modal
                imageSource={imageSource}
                name={name}
                description={description}
                onClose={handleCloseModal}
                liveUrl={liveUrl}
                >
                    {children}
                </Modal>
            )}
        </div>
    );
}
