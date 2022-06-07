import React from 'react'
import Listpersons from "./listpersons"
export default function filterList({filterList , handleDelete}) {
  return (
    <Listpersons  persons={filterList} handleDelete={handleDelete}/>
  )
}
