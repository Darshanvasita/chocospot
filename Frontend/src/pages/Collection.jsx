// Shree Ganeshay namah  
import React, { Profiler, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products,search,showSearch } = useContext(ShopContext)
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([])
  const [country,setCountry] = useState([])
  
  const [sortType,setSortType] = useState('relavent')

  const toggleCountry = (e) =>{
    
    if (country.includes(e.target.value)) {
      setCountry(prev => prev.filter(item => item !== e.target.value))
      // setCategory(prev => prev.filter((item,index)=>{
      //   return item !== e.target.value;
      // }))
    }else{
      setCountry(prev => [...prev,e.target.value])
    }
  }

 

  const applyFilter = () => {
    let productCopy = products.slice()

    if(showSearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(country.length > 0){
      productCopy = productCopy.filter(item => country.includes(item.country))
    }

    
    // if(subCategory.length > 0){
    //   productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    // }


      setFilterProducts(productCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch(sortType){
      case "low-high" : 
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;

      case "high-low" :
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price )))
        break

      default : 
      applyFilter()
      break
    }

  }

  useEffect(()=>{
    setFilterProducts(products)
  },[])

  useEffect(()=>{
      applyFilter()
  },[country,search,showSearch,products])
  
  useEffect(()=>{
    sortProduct()
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filterd Options */}
        <div className='min-w-60'>
            <p onClick={()=>setShowFilter(!showFilter)} className=' my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS

              <img className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ""}`} src={assets.dropdown_icon} alt="" />
            </p>

            {/* Category Filter */}
            <div className={` border border-gray-300 pl-5 py-3 mt-6 ${ showFilter ? "" : 'hidden'} sm:block`}> 
              <p className=' mb-3 text-sm font-medium'>COUNTRYS</p>
              <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox"  value={'Switzerland'} onChange={toggleCountry}/>Switzerland
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox"  value={'Austria'} onChange={toggleCountry}/>Austria
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox"  value={'Germany'} onChange={toggleCountry}/>Germany
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox"  value={'Ireland'} onChange={toggleCountry}/>Ireland
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox"  value={'United Kingdom'} onChange={toggleCountry}/>United Kingdom
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox"  value={'Sweden'} onChange={toggleCountry}/>Sweden
                </p>

              </div>
            </div>
            {/* SubCatgory Filter  */}

           
        </div>

      {/*  Right Side  */}
        <div className=' flex-1 '>
            <div className=' flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1={'ALL'} text2={'COLLECTION'} />
                {/* Product Sort  */}
                <select onChange={(e)=>setSortType(e.target.value)} className=' border-2 border-gray-300 text-sm px-2'>
                  <option value="relavent">Sort by: Relavent</option>
                  <option value="low-high">Sort by : Low to High</option>
                  <option value="high-low">Sort by : High to Low</option>
                </select>
            </div>

              {/* Map Products  */}

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>{
                return <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Collection