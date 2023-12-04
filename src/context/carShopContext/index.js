import { createContext, useEffect, useState} from "react"
import { carShopState } from "./data";


export const CarShopContext = createContext();

export const CarContext = ({children}) =>{
    const [carState, setCarState] = useState(carShopState);

    useEffect(() => {
        console.log(carState)
    }, [carState])
    
    return (
        <CarShopContext.Provider value={{ carState, setCarState }}>
            {children}
        </CarShopContext.Provider>
    )
}

