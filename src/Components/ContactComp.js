import React from 'react'
import "./contactcomp.css"
const ContactComp = () => {
  return (
    <div className='form'>
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="7" placeholder='Type your message'/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default ContactComp
