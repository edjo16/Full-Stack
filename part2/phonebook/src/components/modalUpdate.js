import React from 'react'
import './modalUpdate.css';

export default function  modalUpdate({active,list,confirm, cancel}) {

  return (
    <>
    {active &&
    <div id="myModal" class="modal">
    <div class="modal-content">
    <span class="close">&times;</span>
     <p>{list.name} is already added to the notebook, replace the old number with the new one.</p>
      <button Onclick={confirm}value="cancel">Cancel</button>
      <button onclick={cancel}id="confirmBtn">Ok</button>
    </div>
    </div>}
      </>
  
  )
}
