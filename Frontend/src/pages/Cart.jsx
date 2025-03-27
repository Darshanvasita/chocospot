import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import CardTotal from '../components/CardTotal'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, chocolateProduct } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
            tempData.push({
                _id: itemId,
                quantity: cartItems[itemId]
            });
        }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3 '>
        <Title text1={'YOUR'} text2={'CART'} />
        <div>
          {
            cartData.map((item, index) => {
              console.log(chocolateProduct)
              const productData = chocolateProduct.find(product => product._id === item._id)
              console.log(productData)
              if (!productData) return null; // Agar productData na mile toh kuch render na ho

              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                      <p>{currency}{productData.price}</p>
                    </div>
                  </div>

                  {/* Quantity Input Without Size */}
                  <input 
                    onChange={(e) => {
                      const newValue = Number(e.target.value);
                      if (newValue > 0) {
                        updateQuantity(item._id, newValue);
                      }
                    }} 
                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
                    type="number" 
                    min={1} 
                    defaultValue={item.quantity} 
                  />

                  {/* Remove Item Button */}
                  <img 
                    onClick={() => updateQuantity(item._id, 0)} 
                    className='w-4 mr-5 sm:w-5 cursor-pointer' 
                    src={assets.bin_icon} 
                    alt="Remove" 
                  />
                </div>
              )
            })
          }
        </div>

        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CardTotal />
            <div className='w-full text-end'>
              <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
