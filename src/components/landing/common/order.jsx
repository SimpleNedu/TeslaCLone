function Order({order, setOrder, children, position}) {
    console.log(order)
    const setOrd = ()=>{
        setOrder([
        [false, false], 
        [false, false], 
        [false, false], 
        [false, false], 
        [false, false], 
        [false, false],  
        [false, false], 
        [false, false], 
        [false, false], 
        [false, false], 
        [false, false]
        ])
    }
  return (
    <div
        className={`absolute flex items-center justify-center transition duration-200  top-0 backdrop-blur-[4px] h-[100vh] w-[100vw] absolute-z  ${order[position]? 'opacity-100': 'hidden opacity-0'} `}>
        <div
            onClick={()=>setOrd()}
            className="h-full w-full absolute">
        </div>
        <div
            className="rounded-xl relative box-shadow sm:w-[30rem] sm:h-[20rem] w-[20rem] h-[21rem] bg-slate-900/80">
            <button
                onClick={()=>setOrd()}
                className="absolute -top-3 -right-3 bg-black text-white font-[800] btn-shadow rounded-[100%] p-[0.3rem]">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="25" 
                    height="25" 
                    className="opacity-60" 
                    viewBox="0 0 32 32">
                    <path fill="currentColor" d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"/></svg>
            </button>
            {children}
        </div>
    </div>
  )
}

export default Order