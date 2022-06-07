
const FilterBy=({submitFilter, changeFilter}) => {
  
    return(
      <form onSubmit={submitFilter}>
        <label>Filter show with</label>
        <input onChange={changeFilter}></input>
      </form>
    )
  }
  export default FilterBy;