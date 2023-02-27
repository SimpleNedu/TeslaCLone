import { BrowserRouter, Route , Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/landing'
import Shop from './components/shop'
import Drive from './components/drive'
import Overview from './components/overview'

function App() {
    
    return(
       <div className='relative'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/drive' element={<Drive/>}/>
            <Route path='/overview' element={<Overview/>}/>
          </Routes>
        </BrowserRouter>
       </div>
    )
}

export default App

