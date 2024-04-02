// AllStudents.js
import React, { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';

const AllStudents = () => {
  const { students, componentCount, deleteStudent, editStudent } = useContext(StudentContext);
  const [editedStudent, setEditedStudent] = useState(null);
  const [editedStudentIndex, setEditedStudentIndex] = useState(null); // New state to store the index of the edited student

  const handleEdit = (index) => {
    setEditedStudent(students[index]);
    setEditedStudentIndex(index); // Set the index of the edited student
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update the student using editStudent function
    if (editedStudent && editedStudentIndex !== null) {
      editStudent(editedStudentIndex, editedStudent); // Pass the index to editStudent function
      setEditedStudent(null);
      setEditedStudentIndex(null); // Clear the edited student index after submission
    }
  };

  return (
    <div>
      <h2>All Students ({componentCount})</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.mobile} - {student.address}{' '}
            <button onClick={() => deleteStudent(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
      {editedStudent && (
        <form onSubmit={handleSubmit}>
          <h2>Edit Student</h2>
          <input
            type="text"
            value={editedStudent.name}
            onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
            required
          />
          <input
            type="tel"
            value={editedStudent.mobile}
            onChange={(e) => setEditedStudent({ ...editedStudent, mobile: e.target.value })}
            required
          />
          <input
            type="text"
            value={editedStudent.address}
            onChange={(e) => setEditedStudent({ ...editedStudent, address: e.target.value })}
            required
          />
          <button type="submit">Update Student</button>
        </form>
      )}
    </div>
  );
};

export default AllStudents;
