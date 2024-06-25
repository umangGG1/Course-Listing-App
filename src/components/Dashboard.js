import React from 'react';
import { useSelector } from 'react-redux';
import { getEnrolledCourses } from '../redux/selectors/courseSelector';
import "./Dashboard.css"

const Dashboard = () => {
  const enrolledCourses = useSelector(getEnrolledCourses);

  return (
    <div className='dashboard'>
      <h2>My Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <ul>
          {enrolledCourses.map(course => (
            <li key={course.id} className="course-item">
              <h3>{course.name}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Schedule:</strong> {course.schedule}</p>
              {/* Add other details and thumbnail if available */}
              <div className="progress-bar">
                {/* Replace with actual progress if available */}
                <div className="progress" style={{ width: '50%' }}></div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
