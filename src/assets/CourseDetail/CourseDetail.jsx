import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';


const courses = [
  { id: 1, title: 'React Basics', description: 'Learn the basics of React.' },
  { id: 2, title: 'Advanced React', description: 'Dive deeper into React.' },

];

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(course => course.id === parseInt(courseId, 10));

  if (!course) {
    return <div>1. Course Title
    The name of the course.
    2. Course Description
    A brief summary of what the course entails, its objectives, and what students can expect to learn.
    3. Duration
    The length of the course (e.g., 1 semester, 1 year, 4 years).
    4. Course Level
    The academic level of the course (e.g., Undergraduate, Postgraduate, Diploma, Certificate).
    5. Prerequisites
    Any required prior knowledge, qualifications, or courses needed before enrolling.
    6. Course Structure
    A breakdown of the course modules or subjects.
    Details of core and elective subjects.
    7. Credits
    The number of credits the course carries, if applicable.
    8. Learning Outcomes
    The skills and knowledge students are expected to acquire by the end of the course.
    9. Assessment Methods
    How students will be evaluated (e.g., exams, assignments, practicals, projects).
    10. Course Fees
    The cost of the course, including tuition fees and any additional costs (e.g., materials, lab fees).
    11. Career Opportunities
    Potential career paths and job opportunities after completing the course.
    12. Accreditation
    Information about the accreditation of the course and institution.
    13. Contact Information
    How to get in touch for more details or to apply (e.g., email, phone, website).
    Example Template
    Here’s an example template you can use to structure the course details:
    
    Course Title: Bachelor of Computer Science
    
    Course Description:
    This course provides a comprehensive foundation in computer science, covering areas such as software development, algorithms, data structures, computer systems, and networks. Students will gain practical skills and theoretical knowledge to prepare for a career in technology.
    
    Duration: 4 years
    
    Course Level: Undergraduate
    
    Prerequisites:
    
    High school diploma or equivalent.
    Proficiency in mathematics and basic computing.
    Course Structure:
    
    Year 1: Introduction to Programming, Computer Systems, Mathematics for Computing.
    Year 2: Data Structures and Algorithms, Database Systems, Software Engineering.
    Year 3: Operating Systems, Networks and Communications, Electives.
    Year 4: Final Year Project, Advanced Topics in Computer Science, Electives.</div>;
  }

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      {/* Add more course details here */}
    </div>
  );
};

export default CourseDetail;
