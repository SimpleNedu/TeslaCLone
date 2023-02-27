import { useState } from "react"
// what remains here is the process of sending this data through use effect to checkout page when it is built, the handli go the data is done for now

function Ride({data}) {
  const [checkOut, setcheckOut] = useState({
    data,
    color: 'black',
    location: '',
    quantity: 1
  })

  const setcolor = (e) =>{
    setcheckOut({...checkOut, color: e.target.value})
  }
  const value =(data)=>{
      switch (data) {
        case 'increment':
          setcheckOut({...checkOut, quantity: checkOut.quantity + 1})
          break;

        case 'decrement':
          if (checkOut.quantity < 2) {
            return
          }
          setcheckOut({...checkOut, quantity: checkOut.quantity - 1})
         break;
      
        default:
          break;
      }
  }

  const submitForm = (e) =>{
    e.preventDefault()
    // writ an effect that will tell user that they are to be taken to a checkout page, but wait who go take thwm ?
  }
  
  return (
    <div
      className="h-full rounded-xl text-left text-slate-200 bg-cover bg-opacity-0 overflow-hidden w-full p-[2rem]">
      <div className="shadow-md shadow-slate-100/20 p-2 rounded flex justify-between">
        <span>
          <p className="text-[1.2rem] fotn-[600]">{data.name}</p>
          <p>sold at ${data.price}</p>
        </span>
        <img 
            className={`w-[6rem] h-full top1 font-[800] font-mono opacity-10 contrast-[20000%]`} 
            src="https://cdn.worldvectorlogo.com/logos/tesla-9.svg"  />
      </div>
      <form 
        onSubmit={(e)=>submitForm(e)}
        className="flex mt-[2rem] align-center rounded shadow-md capitalize shadow-slate-100/20 px-[1rem] py-[1.5rem] text-[0.7rem] gap-[2rem] font-[100] font-sans justify-between text-left bottom-0">
        <div>
          <label>
            <p>Color</p>
            <div className="flex items-center">
              <select 
                onChange={e=>setcolor(e)}
                value={checkOut.color}
                className={`w-[6rem] h-fit py-[0.2rem] capitalize font-[600] outline-none text-black `}>
                <Options data={data}/>
              </select>

              <div 
                className="mx-2 border-[0.1rem] border-black p-[0.1rem]">
                <div 
                  className={`w-[2rem] h-[1.3rem]`}
                  style={{backgroundColor: checkOut.color}}></div>
              </div> 
            </div>
          </label>
          <span>
            <p className=" mt-4">quantity</p>
            <div 
              className="flex items-center ">
              <input 
                onClick={()=>{value('decrement')}} 
                className="w-[1.4rem] aspect-square font-[600] active:bg-orange-700 shadow  shadow-slate-100/40 rounded-sm " 
                type="button" 
                value="-" />
              <p className="w-[2rem] text-center">{checkOut.quantity}</p>
              <input 
                onClick={()=>{value('increment')}} 
                className="w-[1.4rem] aspect-square font-[600] active:bg-orange-700 shadow  shadow-slate-100/40 rounded-sm " 
                type="button" 
                value="+" />
            </div>
          </span>
        </div>
        <div className="relative">
          <input 
            onSubmit={(e)=>submitForm(e)} 
            className="px-2 absolute right-0 bottom-0 uppercase font-[600] transition duration-75 hover:bg-green-700 bg-green-500 rounded-lg py-[0.2rem] " 
            type="submit" 
            value="Check Out" />
        </div>
      </form>
    </div>
  )
}

const Options = ({data}) =>{
  if (data.colors) {
    return data.colors.map((color)=>{
      return  <option value={color}>{color}</option>
    })
  }
}

export default Ride