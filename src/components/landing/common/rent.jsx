
function Rent({data}) {
  return (
    <div
      className="h-full rounded-xl text-left text-slate-200 bg-cover bg-opacity-0 overflow-hidden w-full p-[2rem]">
        <div className="shadow-md shadow-slate-100/20 p-2 rounded flex justify-between">
          <span>
            <p className="text-[1.2rem] fotn-[600]">{data.name}</p>
            <p>{data.alt}</p>
          </span>
          <img 
              className={`w-[6rem] h-full top1 font-[800] font-mono opacity-10 contrast-[20000%]`} 
              src="https://cdn.worldvectorlogo.com/logos/tesla-9.svg"  />
        </div>
        <form 
          onSubmit={(e)=>e.preventDefault()}
          className="flex mt-[2rem] align-center rounded shadow-md capitalize shadow-slate-100/20 px-[1rem] py-[1.5rem] text-[0.7rem] gap-[2rem] font-[100] font-sans justify-between text-left bottom-0">
          <div>
            <label>
              <p className="py-1">Input pickup location</p>
              <input 
                className="bg-transparent border-b-2 transition mb-4 duration-75 focus:border-slate-100 border-slate-600 px-2  w-full outline-none"
                type="text"/>
            </label>
            <label>
              <p className="py-1">To generate your location automatically click below</p>
              <input 
                className="px-2 uppercase font-[600] transition duration-150 hover:bg-orange-700 bg-orange-500 rounded-lg py-[0.2rem]" 
                type="button" 
                value="generate" />
            </label>
          </div>
          <div className="relative">
            <input 
              className="px-2 absolute right-0 bottom-0 uppercase font-[600] transition duration-75 hover:bg-green-700 bg-green-500 rounded-lg py-[0.2rem] " 
              type="submit" 
              value="Place Order" />
          </div>
        </form>
    </div>
  )
}

export default Rent