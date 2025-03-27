// Shree Ganeshay namah 
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const { products,chocolateProduct }  = useContext(ShopContext)
    const [LatestProduct,setLatestProducts] = useState([])
    const [LatestChocolate,setLatestChocolates] = useState([])

    useEffect(()=>{
       const LatestProduct = products.slice(0,10)
        console.log(LatestProduct)
        const LatestChocolate = chocolateProduct.slice(0,10)
        setLatestChocolates(LatestChocolate)
        setLatestProducts(LatestProduct)
        
    },[])
  return (
    <div className=' my-10'>
        <div className=' text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>
        </div>

    {/* Rendaring  Products */}
    
    <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            LatestChocolate.map((item,index)=>{
                console.log(item,"item")
               return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                // 
            })
        }
    </div>
    </div>
  )
}

export default LatestCollection