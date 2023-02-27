function FullLanding({section, children, anchor}) {

  return (
     <div 
      className={`section bg-center bg-cover min-h-[100vh] ${section}`} 
      data-anchor={anchor}>
        {children}
    </div>
  )
}

export default FullLanding