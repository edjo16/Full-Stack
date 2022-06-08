const ListPhone = ({ persons, handleDelete }) => {

  const splitName=(name)=>{
    const caps = name && name.split(' ').map(item =>item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
    return caps
  }
    return (
      <div className="list">
        
        <ul>
          {persons.map(person => person.id && <li className='li-person' key={person.id}  id={person.id}>
            <span className='data-person'>👤 {splitName(person.name)}</span>
            <span className='data-person'>📞 {person.number}</span>
            <button onClick={handleDelete}>❌</button>
          </li>)}
        </ul>
      </div>)
  }
  export default ListPhone ;