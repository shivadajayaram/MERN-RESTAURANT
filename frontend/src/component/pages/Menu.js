import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import AllProduct from '../AllProduct'
import { addCartItem } from '../../redux/productSlide'

const Menu = () => {
  const {filterby}=useParams()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const productData=useSelector(state=>state.product.productList)
  const productDisplay=productData.filter(el=>el._id===filterby)[0]
  
  const handleAddCartProduct=(e)=>{
    //e.stopPropogation()
     dispatch(addCartItem(productDisplay))
  }
     const handleBuy=()=>{
      dispatch(addCartItem(productDisplay))
      navigate("/cart")
     }
    
  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl m-auto md:flex bg-white'>
         <div className='max-w-sm overflow-hidden p-6 bg-white '>
          <img src={productDisplay.image} className='hover:scale-105 transition-all'/>
         </div>
         <div className='flex flex-col gap-2'>
         <h3 className='font-semibold text-slate-600  capitalize text-2xl md:text-4xl'>{productDisplay.name}</h3>
        <p className=' text-slate-500 font-medium capitalize text-2xl'>{productDisplay.category}</p>
        <p className=' font-bold md:text-2xl'><span className='text-red-500'>₹</span><span>{productDisplay.price}</span></p>
        <div className='flex gap-3'>
        <button onClick={handleBuy} className='bg-orange-200 py-1 my-2 w-full rounded hover:bg-orange-300 min-w-[100px] max-w-[100px]'>Buy</button>
        <button onClick={handleAddCartProduct} className='bg-orange-200 py-1 my-2 w-full rounded hover:bg-orange-300 max-w-[100px] min-w-[100px]'>Add Cart</button>
        </div>
         <div>
          <p className='text-slate-600 font-medium'>Description:</p>
          <p>{productDisplay.description}</p>
         </div>
         </div>
      </div>
      <AllProduct heading={"Related Product"}/>
    </div>
  )
}

export default Menu