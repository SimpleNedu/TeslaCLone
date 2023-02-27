import TextBox from './common/textBox'

function Hero({data}) {

  return (
   <div
    className='h-[100vh] w-full hero relative'>
      <TextBox 
        data={data}/>
   </div>
  )
}

export default Hero