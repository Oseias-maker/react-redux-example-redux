import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCoruseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
  const qty = 2;

  const courses = useSelector(
    state => state.data.slice(0, qty)
    [qty]
    );
    

  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCoruseAction('GraphQL'))
  }
  
  return(
      <>
      <ul>
          { courses.map(course => <li key={course}>{course}</li>) }
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
      </>
  );
}