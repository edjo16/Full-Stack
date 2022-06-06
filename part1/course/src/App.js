import './App.css';
import React from "react"

const Parts = ({parts}) => {
  const total=parts
  const exercises=total.map(element=> element.exercises)
const totalExercises=exercises.reduce((p,c)=> p+c)
return<h4>Total of exercises: {totalExercises}</h4>
}

const Course = ({courses}) => {

return(
  <div className="container-all">
 {courses.map(course =>{
  return(<div className="container" key={course.id}>
  <h2>{course.name}</h2>
  {course.parts.map(part=>{
    return(
      <div className="data" key={part.id}>
  <h4>{part.name}</h4>
  <h4>courses: {part.exercises}</h4>
      </div>

  )})}
  <Parts parts={course.parts}/>

  </div>)
 })

}
</div>)
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App;
