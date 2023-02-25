import React , { useContext } from 'react'
import Order from './order'
import { UpdateAm, useAm, updater } from '../useContext'
import Ride from './ride'
import Rent from './rent'

function TextBox({data}) {
  const setOrder = useContext(UpdateAm)
  const order = useAm()
  const setOrd = (e, data)=>{
        console.log(e.target.value)
        setOrder(updater(Number(e.target.value), data, 'neud'))
    }

  return (
    <div
        className={` h-[100vh] text-center`}>
        <div
          className='absolute text-center w-full top-[12%]'>
          <h1
              className={`sm:font-[800] sm:text-[2.5rem] font-[600] text-[1.5rem]  uppercase`}>
              {data.name}
          </h1>
          <p
            className='sm:font-[600] font-[400] max-sm:text-[0.9rem]'>
              {data.price? `leasing starting at ${data.price}/mth`: ''}
          </p>
        </div>

        <div
          className='absolute w-full hero top-[80%] flex justify-center gap-8'>
          <button
            onClick={(e)=>setOrd(e, 'OPENLEFT')}
            value={data.id}
            className='bg-slate-900/70 max-w-[16rem] sm:w-[25%] px-2 sm:text-[1rem] text-[0.8rem] capitalise font-[600] text-center py-1 sm:py-[0.6rem] rounded capitalize text-white '>
            {data.type === 'car'? 'custom order': 'solar things'}
          </button>
          <button
            value={data.id}
            onClick={(e)=>setOrd(e, 'OPENRIGHT')}
            className='bg-white/60 max-w-[16rem] sm:w-[25%] px-2 sm:text-[1rem] text-[0.8rem] capitalise font-[600] text-center py-1 sm:py-[0.6rem] rounded capitalize text-black'>
            {data.type === 'car'? 'demo drive': 'solar things'}
          </button>
        </div>
        {/* left part */}
        <Order 
          order={order[Number(data.id)]}
          children={<Ride/>}
          position={0}
          setOrder={setOrder} />
        <Order 
          order={order[Number(data.id)]}
          children={<Rent/>}
          position={1}
          setOrder={setOrder} />
    </div>
  )
}

export default TextBox