// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Success({message}) {
  return (
    <div className="fixed left-1/2 top-24 z-40 p-4 bg-green-600 text-white rounded-md">
    {message}
  </div>
  )
}

export default Success