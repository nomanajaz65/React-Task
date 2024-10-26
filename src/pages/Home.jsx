import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
