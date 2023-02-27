import React , { useContext } from 'react'
import { UpdateAm, useAm, updater } from '../useContext'
import Order from './order'
import Ride from './ride'
import Rent from './rent'

function TextBox({data}) {
  const setOrder = useContext(UpdateAm)
  const order = useAm()
  const setOrd = (e, data)=>{
        const value = updater(Number(e.target.value), data)
        setOrder([...value])
    }

  const display =(type) =>{
    if (type === 'car') {
      return(
      <div
        className='absolute w-full hero top-[80%] flex justify-center gap-8'>
        <button
          onClick={(e)=>{setOrd(e, 'OPENLEFT'); console.log('ewoo')}}
          value={data.id}
          className='bg-slate-900/70 max-w-[16rem] sm:w-[25%] px-2 sm:text-[1rem] text-[0.8rem] capitalise font-[600] text-center py-1 sm:py-[0.6rem] rounded capitalize text-white '>
          {data.type === 'car'? 'custom order': 'solar things'}
        </button>
        <button
          value={data.id}
          onClick={(e)=>{setOrd(e, 'OPENRIGHT'); console.log('ewoo2')}}
          className='bg-white/60 max-w-[16rem] sm:w-[25%] px-2 sm:text-[1rem] text-[0.8rem] capitalise font-[600] text-center py-1 sm:py-[0.6rem] rounded capitalize text-black'>
          {data.type === 'car'? 'demo drive': 'solar things'}
        </button>
      </div>
    )} else if (type === 'solar') {
      return <div
        className='absolute w-full hero top-[80%] flex justify-center gap-8'>
        <button
          value={data.id}
          className='bg-slate-900/70 max-w-[16rem] sm:w-[25%] px-2 sm:text-[1rem] text-[0.8rem] capitalise font-[600] text-center py-1 sm:py-[0.6rem] rounded capitalize text-white '>
          Order now
        </button>
        <button
          value={data.id}
          className='bg-white/60 max-w-[16rem] sm:w-[25%] px-2 sm:text-[1rem] text-[0.8rem] capitalise font-[600] text-center py-1 sm:py-[0.6rem] rounded capitalize text-black'>
          learn more
        </button>
      </div>
    } else{
      return <div
        className='absolute w-full hero top-[80%] flex justify-center gap-8'>
        <button
          value={data.id}
          className='bg-slate-900/70 max-w-[16rem] sm:w-[25%] px-2 sm:text-[1rem] text-[0.8rem] capitalise font-[600] text-center py-1 sm:py-[0.6rem] rounded capitalize text-white '>
          Shop now
        </button>
      </div>
    }
    
  }

  return (
    <div
        className={` h-[100vh] text-center`}>
        <div
          className='absolute text-center w-full top-[25%] sm:top-[12%]'>
          <h1
              className={`sm:font-[800] sm:text-[2.5rem] font-[600] text-[1.5rem]  uppercase`}>
              {data.name}
          </h1>
          <p
            className='sm:font-[600] font-[400] max-sm:text-[0.9rem]'>
              {data.price? `leasing starting at ${data.price}/mth`: ''}
          </p>
        </div>

        {display(data.type)}
        {/* left part */}
        <Order 
          order={order[Number(data.id)]}
          children={<Ride data={data}/>}
          position={0}
          setOrder={setOrder} />
        <Order 
          order={order[Number(data.id)]}
          children={<Rent data={data}/>}
          position={1}
          setOrder={setOrder} />
    </div>
  )
}

export default TextBox