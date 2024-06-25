const initialState = {
    courses: [],  // Ensure this is defined as an empty array
    enrolledCourses: []  // Initial state for enrolled courses
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COURSES':
        return { ...state, courses: action.payload };
      case 'ENROLL_COURSE':
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, action.payload]
        };
      case 'MARK_COURSE_COMPLETED':
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map(course =>
            course.id === action.payload ? { ...course, completed: true } : course
          )
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  