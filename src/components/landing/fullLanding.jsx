import React,{ useState} from 'react'

function FullLanding({section, children}) {

  return (
     <div className={`section bg-center bg-cover min-h-[100vh] ${section}`}>
        {children}
    </div>
  )
}

export default FullLanding