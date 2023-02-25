import React, { useState, useContext } from "react";

// creating the contexts neede
const OpeningsAndClosing = React.createContext()
export const UpdateAm =React.createContext()

// exporting for use in my pages
export const useAm = () =>{
    return useContext(OpeningsAndClosing)
}

export function updater (number, action, setOrder){
        const value =  [
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
    ]
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
        console.log(value)
        return value
}

export function PopUp({children}) {
    const [Order, setOrder] = useState([
        [true, false], 
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
    
    return(
        <OpeningsAndClosing.Provider value={Order}>
            {/* <UpdateAm.Provider value={setOrder}> */}
            <UpdateAm.Provider value={setOrder}>
                {children}
            </UpdateAm.Provider>
        </OpeningsAndClosing.Provider>
    )
}