import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../redux/actions/courseActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./CourseList.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);

  useEffect(() =>{
    dispatch(fetchCourses());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course=>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div>
      <nav className='course-list-nav'>
        <div className='course-list-nav-inner'>
        <div className='app-logo'>
          <img src='/logomain.svg'></img>
        </div>
        <input
         type='text'
         placeholder='Search by course name or instructor'
         value={searchTerm}
         onChange={e => setSearchTerm(e.target.value)}
         />
         </div>
         <div>
         <Link to={"/dashboard"}>
    <AccountCircleIcon/>
    </Link>
         </div>
         </nav>

    <div className="course-list">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-item">
            <div>
            <h3>{course.name}</h3>
            <p>{course.instructor}</p>
            </div>
            <div>
            <Link to={`/courses/${course.id}`}><button id='view-details-button' type='button'>View Details</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
