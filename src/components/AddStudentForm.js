// components/AddStudentForm.js
import React, { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import { ModalContext } from '../contexts/ModalContext';

const AddStudentForm = () => {
  const { addStudent } = useContext(StudentContext);
  const { showModal, openModal, closeModal } = useContext(ModalContext);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Math.random(),
      name,
      mobile,
      address,
    };
    addStudent(newStudent);
    closeModal(); // Close modal after adding student
    setName('');
    setMobile('');
    setAddress('');
  };

  return (
    <>
      <button onClick={openModal}>Add New Student</button>
      {showModal && (
        <div className="modal">
          <h2>Add New Student</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <button type="submit">Add</button>
          </form>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default AddStudentForm;
