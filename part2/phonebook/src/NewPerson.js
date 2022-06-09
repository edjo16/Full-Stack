const NewPerson=({newPerson,handleChange,handleSubmit})=>{


    return(
      
        <form className='form'>
          <label > Name:
          <input required onChange={handleChange} name='name' value={newPerson.name}></input>
          </label>
          <label> Number:
          <input required onChange={handleChange} name='number' value={newPerson.number}></input>
          </label>
          <button onClick={handleSubmit}>Add</button>
          
        </form>
  
    )
    }

    export default NewPerson;