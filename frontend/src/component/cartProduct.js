import React from 'react'
import {AiFillPlusCircle,AiFillMinusCircle,AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteCartItem,increaseQty,decreaseQty} from '../redux/productSlide'

const CartProduct = ({id,name,image,category,qty,total,price}) => {
  const dispatch=useDispatch()
  return (
    <div className='bg-slate-200 p-2 flex gap-2 rounded'>
        <div className='bg-white p-3 rounded overflow-hidden'>
            <img src={image} className='h-28 w-40 object-cover '/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex justify-between'>
         <h3 className='font-semibold text-slate-600  capitalize text-lg md:text-xl'>{name}</h3>
         <div className='cursor-pointer text-slate-700 hover:text-red-500' onClick={()=>dispatch(deleteCartItem(id))}>
         <AiFillDelete/>
         </div>
         </div>
        <p className=' text-slate-500 font-medium capitalize '>{category}</p>
        <p className=' font-bold text-base'><span className='text-red-500'>₹</span><span>{price}</span></p>
        <div className='flex justify-between '>
        <div className='flex gap-3 items-center'>
        <button onClick={()=>dispatch(increaseQty(id))} className='bg-slate-300 py-1 mt-2  rounded hover:bg-slate-400 p-1 text-2xl'><AiFillPlusCircle/></button>
        <p className='font-semibold'>{qty}</p>
        <button onClick={()=>dispatch(decreaseQty(id))} className='bg-slate-300 py-1 mt-2  rounded hover:bg-slate-400 p-1 text-2xl '><AiFillMinusCircle/></button>
        </div>
        <div className='font-bold flex items-center gap-1 text-slate-700'>
            <p>Total :</p>
            <p><span className='text-red-500'>₹</span>{total}</p>
        </div>
        </div>
         </div>
    </div>
  )
}

export default CartProduct