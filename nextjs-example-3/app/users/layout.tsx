import React from 'react'

const LayoutUsers = (
    {
        children,
    } : {children: React.ReactNode}
) => {
  return (
    <div>
        
        {children}
        <h1 className='bg-amber-200 mt-7'>This is in User Route</h1>
    </div>
  )
}

export default LayoutUsers