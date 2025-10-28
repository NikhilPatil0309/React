import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
  const {id} = useParams()
  return (
    <div className='text-white bg-gray-600'>User :{id}</div>
  )
}

export default User