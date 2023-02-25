import { useState } from 'react'
import Order from './common/order'
import TextBox from './common/textBox'

function Hero({data}) {
  const [order, setOrder] = useState(true)

  return (
   <div
    className='h-[100vh] w-full hero relative'>
      <TextBox 
        data={data}/>
   </div>
  )
}

export default Hero