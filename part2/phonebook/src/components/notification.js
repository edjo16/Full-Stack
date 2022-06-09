export const Notification = ({ keyNoti}) => {
  if (keyNoti === null) {
    return null
  }
  const{key, name}= keyNoti
  
    return ( <>
      {
        key !== undefined &&
      <div className={key}>
        {key==="add"? <p >Added {name}</p>
        :key==="error" && <p >{name} was already removed from server</p> 
      }
      </div>
    }
      </>
    )
  }
  //ad , delete,