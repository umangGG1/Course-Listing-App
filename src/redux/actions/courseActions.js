export const fetchCourses = () => async dispatch => {
    try {
      const response = await fetch('/courses.json');
      const data = await response.json();
      console.log('Fetched courses data:', data); // Debugging log
  
      const courses = data.map(course => ({
        ...course,
        id: course.id.toString()
      }));
      console.log('Processed courses data:', courses); // Debugging log
  
      dispatch({ type: 'FETCH_COURSES', payload: courses });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

export const markCourseCompleted = (courseId) =>{
    return{
        type: "MARK_COURSE_COMPLETED",
        payload: courseId
    }
};

export const enrollInCourse = (courseId) => {
  return {
    type: 'ENROLL_COURSE',  // Action type
    payload: courseId  // Payload containing the courseId
  };
};