import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} =  useParams(); // Retrieve the user id from the URL parameter.

  return (
    <div className='bg-orange-700 text-white p-4 shadow-md'>User: {id} </div>
  )
}

export default User