// StudentContext.js
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [totalCount, setTotalCount] = useState(0); // Add totalCount state

  const addStudent = (student) => {
    setStudents([...students, student]);
    setTotalCount(totalCount + 1); // Increment totalCount when adding a student
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((student, i) => i !== index));
    setTotalCount(totalCount - 1); // Decrement totalCount when deleting a student
  };

  const editStudent = (index, updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
  };

  return (
    <StudentContext.Provider value={{ students, totalCount, addStudent, deleteStudent, editStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
