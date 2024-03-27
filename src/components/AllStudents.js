// AllStudents.js
import React, { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';

const AllStudents = () => {
  const { students, deleteStudent, editStudent } = useContext(StudentContext);
  const [editedStudent, setEditedStudent] = useState(null);

  const handleEdit = (index) => {
    setEditedStudent(students[index]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to update the student in your context
    // For simplicity, I'm logging the edited student
    console.log('Edited student:', editedStudent);
    setEditedStudent(null); // Clear editedStudent after submission
  };

  return (
    <div>
      <h2>All Students</h2>
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