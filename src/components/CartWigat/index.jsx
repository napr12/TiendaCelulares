import { useEffect, useState } from "react"
import {BsFillCartFill} from 'react-icons/bs';

const CartWidget= ()=>{
    const [cant,setCant] = useState(0);
    useEffect(()=>{
        console.log("Agrega");
    }, cant)
   
    return  (<>
                <BsFillCartFill /> 
                {cant}
            </>
            )   
        
}
export default CartWidget