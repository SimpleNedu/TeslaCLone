import { useState, useEffect } from "react";
import { navData } from "../../../assets/data";

function Nav1({Nav, setNav}) {
  const [windowWidth, setWindowWidth] = useState(true);

  const All1 = navData.all1.map((data)=>{
    return(
      <a 
        href={data.href}
        key={data.name}>
        <li>
          {data.name}
        </li>
      </a>
    )
  })

  const sm1 = navData.sm1.map((data)=>{
    return(
      <a 
        href={data.href}
        key={data.name}>
        <li>
          {data.name}
        </li>
      </a>
    )
  })

  const All2 = navData.all2.map((data)=>{
    return(
      <a 
        href={data.href}
        key={data.name}>
        <li>
          {data.name}
        </li>
      </a>
    )
  })

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(false);

      setTimeout(() => {
        setWindowWidth(true)
      }, 1000);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div>
      <nav
        className={`font-[600] text-[0.95rem] ${windowWidth? 'animate':''} ${Nav? 'navHide':"navClosed"}`}>
        <div>
          <a href="/">
            <img 
              className={`w-[6rem] top1 font-[800] font-mono contrast-[20000%]`} 
              src="https://cdn.worldvectorlogo.com/logos/tesla-9.svg" 
              alt="TESLA" /></a>
        </div>

        <div
          className="bg-white h-[4rem] sticky top-0 closeFather">
          <button
            onClick={()=>setNav(true)}
            className={`close`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="opacity-60" viewBox="0 0 32 32"><path fill="currentColor" d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"/></svg>
          </button>
        </div>

        {/* the navigation buttons here */}
        <ul>
          {All1}
        </ul>
        <ul
          className="hiddenUL">
          {sm1}
        </ul>
        <ul>
          {All2}
        </ul>

        <ul className="hiddenUL">
          <li className=" flex gap-4 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.5 1.8a5.7 5.7 0 1 0 0 11.4a5.7 5.7 0 0 0 0-11.4ZM.9 7.5a6.6 6.6 0 1 1 13.2 0a6.6 6.6 0 0 1-13.2 0Z"/><path d="M13.5 7.9h-12v-.8h12v.8Z"/><path d="M7.1 13.5v-12h.8v12h-.8zm3.275-6c0-2.173-.781-4.322-2.313-5.743l.476-.514c1.702 1.58 2.537 3.93 2.537 6.257c0 2.327-.835 4.678-2.537 6.257l-.476-.514c1.532-1.42 2.313-3.57 2.313-5.743zM4 7.5c0-2.324.808-4.673 2.458-6.253l.484.506C5.458 3.173 4.7 5.323 4.7 7.5c0 2.176.758 4.327 2.242 5.747l-.484.506C4.808 12.173 4 9.823 4 7.5z"/><path d="M7.5 3.958c2.17 0 4.375.401 5.87 1.236a.35.35 0 1 1-.34.612c-1.35-.754-3.422-1.148-5.53-1.148s-4.18.394-5.53 1.148a.35.35 0 1 1-.34-.612c1.495-.835 3.7-1.236 5.87-1.236zm0 6.892c2.17 0 4.375-.401 5.87-1.236a.35.35 0 1 0-.34-.612c-1.35.754-3.422 1.148-5.53 1.148s-4.18-.394-5.53-1.148a.35.35 0 1 0-.34.611c1.495.836 3.7 1.237 5.87 1.237z"/></g></svg>
            </span>
            <span>
              <h1 className="font-bold">United States</h1>
              <p>English</p>
            </span>
          </li>
        </ul>
      </nav>

      <div className="nav">
        <a href="/">
          <img 
            className={`w-[6rem] font-[800] font-mono contrast-[20000%]`} 
            src="https://cdn.worldvectorlogo.com/logos/tesla-9.svg" 
            alt="TESLA" />
        </a>
        <button
          onClick={()=>setNav(!Nav)} 
          className={`menu`}>menu</button>
      </div>
      <button 
        onClick={()=>setNav(true)}
        className={`${windowWidth? 'animate':''} ${Nav? 'btnHide':"btnClosed"}`}>
      </button>
    </div>
  )
}

export default Nav1