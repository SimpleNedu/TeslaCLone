import React, { useState, useContext } from "react";


const globalValue =  [
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
]

// creating the contexts neede
const OpeningsAndClosing = React.createContext()
export const UpdateAm =React.createContext()

// exporting for use in my pages
export const useAm = () =>{
    return useContext(OpeningsAndClosing)
}

export function updater (number, action){
    const value =  globalValue
    switch (action) {
        case 'OPENRIGHT':
            value[Number(number)]=[false, true]
            break;

        case 'OPENLEFT':
            value[Number(number)]=[true, false]
            break;
      default:
              break;
      }
      return value
}

export function PopUp({children}) {
    const [Order, setOrder] = useState(globalValue)
    
    return(
        <OpeningsAndClosing.Provider value={Order}>
            <UpdateAm.Provider value={setOrder}>
                {children}
            </UpdateAm.Provider>
        </OpeningsAndClosing.Provider>
    )
}