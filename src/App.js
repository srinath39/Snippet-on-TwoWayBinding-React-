import React from 'react';
import { useState } from 'react';
import './style.css';
import Sample from './Sample';

export default function App() {
  const [students, updateStudents] = useState([
    { id: 1, name: 'srinath' },
    { id: 2, name: 'balashiva' },
    { id: 3, name: 'somesh' },
  ]);
  function setNewEmployee(obj) {
    updateStudents((students) => [...students, obj]);
  }
  return (
    <div>
      <Sample records={students} addStudent={setNewEmployee} />
    </div>
  );
}
