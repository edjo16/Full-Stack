import './App.css';

const Course = ({course}) => {
  const total=course.parts
  const exercises=total.map(element=> element.exercises)
const totalExercises=exercises.reduce((p,c)=> p+c)


return(
<div className="container" key={course.id}>
  <h1>{course.name}</h1>
  {course.parts.map(part=>{
    return(
      <div className="data" key={part.id}>
  <h2>{part.name}</h2>
  <h3>courses: {part.exercises}</h3>
      </div>

  )})}
<h4>Total courses: {totalExercises}</h4>

  </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App;
