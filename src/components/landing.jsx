import { useState, useContext } from 'react'
import FullPageCaller from './landing/fullPagecaller'
import Nav1 from './landing/common/nav1'
import { PopUp } from './landing/useContext'

function Landing() {
  const [Nav, setNav] = useState(true)

  return (
    <section>
      <div className='absolute w-full z-50'>
        <Nav1 
          Nav={Nav}
          setNav={setNav} />
      </div>
      <PopUp
        children={<FullPageCaller/>}>
        
      </PopUp>
    </section>
  )
}

export default Landing
