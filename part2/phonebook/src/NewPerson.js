const NewPerson=({newPerson,handleChange,handleSubmit})=>{


    return(
      
        <form className='form'>
          <label > Name:
          <input onChange={handleChange} name='name' value={newPerson.name}></input>
          </label>
          <label> Number:
          <input onChange={handleChange} name='number' value={newPerson.number}></input>
          </label>
          <button onClick={handleSubmit}>Add</button>
          
        </form>
  
    )
    }

    export default NewPerson;