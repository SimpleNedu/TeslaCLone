import ContactInfo from './drive/contactInfo'
import Gallery from './drive/gallery'
import Nav1 from './landing/common/nav1'

function Drive() {
  return (
    <div>
        {/* <Nav1/> */}
        <div 
            className='max-md:min-w-[80vw] md:w-[55rem] m-auto'>
    <div className="flex justify-center text-center pt-[4rem]">
     <span>
       <h1 className="text-[2rem] font-[600] uppercase">Still under Production</h1>
        <p className="text-[0.9rem] text-red-600 capitalise">Loading!!!!!</p>
      </span>
    </div>
            {/* <Gallery/>
            <ContactInfo/> */}
        </div>
    </div>
  )
}

export default Drive