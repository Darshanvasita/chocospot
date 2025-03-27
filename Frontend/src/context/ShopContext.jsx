// Shree Ganeshay namah 

import { createContext, useEffect, useState } from "react";
import { assets, products,chocolateProduct } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = '$'
    const delivery_fee = 10
    const [search,SetSearch] = useState('') 
    const [showSearch,SetShowSearch] = useState(false)
    const [cartItems,setCartItems] = useState({})
    const navigate = useNavigate()
    const addToCart = async(itemId) => {

        // if(!size){
        //     toast.error('Select product Size')
        //     return
        // }

        let cartData = structuredClone(cartItems)
        
        if (cartData[itemId]) {
            cartData[itemId] += 1;  // Item pehle se hai toh count badhao
        } else {
            cartData[itemId] = 1;   // Item nahi hai toh 1 se start karo
        }setCartItems(cartData)
        
    }


    const getCartCount = () => { 
        let totalCount = 0;
        for (const itemId in cartItems) {  
            try {
                if (cartItems[itemId] > 0) {
                    totalCount += cartItems[itemId];
                }
            } catch (error) {
                console.log(error);
            }
        }
        return totalCount;
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
    
        if (quantity > 0) {
            cartData[itemId] = quantity;  // ✅ Direct quantity update ho rahi hai
        } else {
            delete cartData[itemId];  // ✅ Agar quantity 0 ho to item remove ho jayega
        }
    
        setCartItems(cartData);
    };
    

    const getCartAmount = () => {
        let totalAmount = 0;
    
        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[itemId];  // ✅ Direct quantity multiply
            }
        }
    
        return totalAmount;
    };
    

    const value = {
        products,currency,delivery_fee,search,SetSearch,showSearch,SetShowSearch,cartItems,setCartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate,chocolateProduct
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider