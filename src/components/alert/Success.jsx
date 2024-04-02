import React from 'react'

// eslint-disable-next-line react/prop-types
function Success({message}) {
  return (
    <div className="fixed right-4 bottom-4 z-50 p-4 bg-green-600 text-white rounded-md">
    {message}
  </div>
  )
}

export default Success