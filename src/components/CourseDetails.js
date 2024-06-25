import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './CourseDetails.css'
import { fetchCourses } from '../redux/actions/courseActions';
import { enrollInCourse } from '../redux/actions/courseActions'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const CourseDetails = () => {
  const {courseId} = useParams();
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const enrolledCourses = useSelector(state => state.courses.enrolledCourses)
  const course = courses.find(course => course.id === courseId);

  useEffect(()=>{
    if(course.length ===0){
      dispatch(fetchCourses());
    }
  }, [dispatch, course.length]);

  const handleEnroll =() =>{
    dispatch(enrollInCourse(courseId));
  }

  const isEnrolled = enrolledCourses.includes(courseId);

  return (<>
    <nav className='course-details-nav'>
    <img src='/logomain.svg'></img>
    <Link to={"/dashboard"}>
    <AccountCircleIcon/>
    </Link>
    </nav>
    <div className='course-details'>
      {course ? (
        <>
        <div className='course-details-top'>
        <div>
          <h1>{course.name}</h1>
          <p className='course-details-description'>By {course.instructor}</p>
          <p className='course-details-description'>{course.description}</p>
          <p id='course-details-status'>{course.enrollmentStatus}</p>
          </div>
          <div className='course-details-right'>
          <p><span className='course-details-main'>Duration: </span>{course.duration}</p>
          <p><span className='course-details-main'>Schedule:</span> {course.schedule}</p>
          <p><span className='course-details-main'>Location:</span> {course.location}</p>
          <p><span className='course-details-main'>Pre-requisites: </span>{course.prerequisites}</p>
          {!isEnrolled && (
        <button onClick={handleEnroll}>Enroll</button>  // Display the Enroll button if not already enrolled
      )}
      {isEnrolled && (
        <button disabled style={{backgroundColor: "red"}}>Already Enrolled</button>  // Display a disabled button if already enrolled
      )}
          </div>
          </div>
          <div className='course-details-syllabus'>
            <h3>Syllabus</h3>
            <ul>
              {course.syllabus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Course not found</p>
      )}
    </div>
    </>
  );
};

export default CourseDetails;
