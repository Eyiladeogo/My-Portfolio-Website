import React, { useState } from 'react';
import Modal from './Modal';

export function ProjectCard({ imageSource, name, description, liveUrl }) {

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
       
            <h2>{name}<br/><h3 style={{paddingLeft:"0"}}>Built with <span>React Logo</span> and <span>Node Logo</span> and <span>MYSql Logo</span></h3></h2>
            
        
        
        
        <p>{description}</p>
        <h3>Features:</h3>
        <ul>
            <li>
                User Authentication: Secure user registration and login functionality using JWT for token-based authentication.
            </li>
            <li>
                Task Management: Users can create, update, and delete tasks. Each task includes details like name, duration, due date, and priority.
            </li>
            <li>
                Task Filtering: Easily switch between viewing pending and completed tasks with a simple toggle.
            </li>
            <li>
                Responsive Design: Optimized for both desktop and mobile devices, ensuring a consistent experience across different screen sizes.
            </li>
            <li>
                Modals for Task Details: Clean and user-friendly modals for adding and editing tasks, ensuring a smooth user interaction.
            </li>
        </ul>
        </Modal>
      )}
        </div>
    );
}
