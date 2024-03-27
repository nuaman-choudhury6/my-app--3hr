// Student.js
import React, { useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';

const Student = ({ student }) => {
  const { deleteStudent } = useContext(StudentContext);

  return (
    <li>
      {student.name} - {student.mobile} - {student.address}{' '}
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
    </li>
  );
};

export default Student;
