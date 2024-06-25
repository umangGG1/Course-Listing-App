import { createSelector } from 'reselect';

const getCourses = state => state.courses.courses;
const getEnrolledCourseIds = state => state.courses.enrolledCourses;

export const getEnrolledCourses = createSelector(
  [getCourses, getEnrolledCourseIds],
  (courses, enrolledCourseIds) => {
    return courses.filter(course => enrolledCourseIds.includes(course.id));
  }
);
