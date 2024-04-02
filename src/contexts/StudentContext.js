// StudentContext.js
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [totalCount, setTotalCount] = useState(0); // Total count state for all students
  const [componentCount, setComponentCount] = useState(0); // Total count state for component-specific students

  const addStudent = (student) => {
    setStudents([...students, student]);
    setTotalCount(totalCount + 1); // Increment total count
    setComponentCount(componentCount + 1); // Increment component-specific count
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((student, i) => i !== index));
    setTotalCount(totalCount - 1); // Decrement total count
    setComponentCount(componentCount - 1); // Decrement component-specific count
  };

  const editStudent = (index, updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
  };

  return (
    <StudentContext.Provider value={{ students, totalCount, componentCount, addStudent, deleteStudent, editStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
