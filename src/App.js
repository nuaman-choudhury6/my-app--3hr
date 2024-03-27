// App.js
import React from 'react';
import { StudentProvider } from './contexts/StudentContext';
import AllStudents from './components/AllStudents';
import AddStudentForm from './components/AddStudentForm';

const App = () => {
  return (
    <StudentProvider>
      <div>
        <h1>Student Manager</h1>
        <AddStudentForm />
        <AllStudents />
      </div>
    </StudentProvider>
  );
};

export default App;
