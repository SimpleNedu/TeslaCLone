import React, { useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import FullLanding from './fullLanding';
import Hero from './Hero';
import { HeroData } from '../../assets/data';

const fullpages = [
  {
    section:"section1",
    anchor: 'models',
    element: <Hero data={HeroData.models}/>
  },
  {
    section:"section2",
    anchor: 'model3',
    element: <Hero  data={HeroData.model3} />
  },
  {
    section:"section3",
    anchor: 'modelx',
    element: <Hero  data={HeroData.modelx} />
  },
  {
    section:"section4",
    anchor: 'modely',
    element: <Hero  data={HeroData.modely}  />
  },
  {
    section:"section5",
    anchor: 'solarRoof',
    element: <Hero  data={HeroData.solarRoof}/>
  },
  {
    section:"section6",
    anchor: 'solarpanels',
    element: <Hero  data={HeroData.solarPanels}/>
  },
  {
    section:"section7",
    anchor: 'solarcharger',
    element: <Hero data={HeroData.charger}/>
  }
]

const FullPageCaller = () => (
  
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {200} /* Options here */
    

    render={({ state, fullpageApi }) => {

    const pages1 = fullpages.map((page)=>{
      
      return <FullLanding
              section={page.section}
              anchor={page.anchor}
              children={page.element} />
    })
    
    return (
         <ReactFullpage.Wrapper>
          {pages1}
        </ReactFullpage.Wrapper>
    );
    }}
  />
);


export default FullPageCaller