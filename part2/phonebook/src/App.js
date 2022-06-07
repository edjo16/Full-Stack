import './App.css';
import axios from "axios"
import React, { useState, useEffect } from "react"
import ListPhone from './listpersons';
import NewPerson from './NewPerson';
import FilterBy from './filterBy';
import FilterList from './filterList';

function App() {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: "", number: "", id: null })
  const [Render, setRender] = useState(false)
  const [filter, setFilter] = useState("")
  const [filterList, setFilterList] = useState([])
  
  useEffect(() => {
    function getPersons() {
      axios.get("http://localhost:3000/persons")
        .then(res => {
          const name = res.data
          setPersons(name)
          setRender(false)
        })
    }
    getPersons()
    Render && getPersons()
  }, [Render])

  const handleChange = (e) => {
    const { name, value } = e.target

    setNewPerson(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const match = persons.filter(person => person.name === newPerson.name && person)

    if (match[0] !== undefined) {
      const { name, id } = match[0]
      axios.put(`http://localhost:3000/persons/${id}`, { name: name, number: newPerson.number, id: id })
        .then(() => setRender(true))
        .then(() => setNewPerson({ name: "", number: "", id: null }))
    } else {
      axios.post("http://localhost:3000/persons", newPerson)
        .then(response => setPersons(persons.concat(response.data)))
        .then(() => setNewPerson({ name: "", number: "", id: null }))
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    const currentItemId = e.target.parentElement.id
    axios.delete(`http://localhost:3000/persons/${currentItemId}`)
      .then(() => setRender(true))

  }

  const submitFilter = (e) => {
    e.preventDefault()
    const filters = persons.filter(person => (person.name.toLowerCase()).startsWith(filter.toLowerCase()) && person)
    setFilterList(filters)
  }

  const handleChangeFilter = (e) => {
    const filter = e.target.value
    setFilter(filter)
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>Phone Book</h1>
        <FilterBy changeFilter={handleChangeFilter} submitFilter={submitFilter} />
       
        <h2>Add a new person</h2>
        <NewPerson newPerson={newPerson} handleChange={handleChange} handleSubmit={handleSubmit} />
        <h2>Numbers</h2>
        {filterList.length > 0
          ? <FilterList filterList={filterList} handleChange={handleChange} />
          : <ListPhone persons={persons} handleDelete={handleDelete} />
          }
      </div>
    </div>
  );
}

export default App;
