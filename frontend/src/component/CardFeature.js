import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItem, } from '../redux/productSlide'
import { useDispatch } from 'react-redux'

const CardFeature = ({image,name,price,category,loading,id}) => {
  const dispatch=useDispatch()
  const handleAddCartProduct=(e)=>{
  //e.stopPropogation()
   dispatch(addCartItem({
    _id:id,
    name:name,
    price:price,
    category:category,
    image:image
   }))
   
  }
  return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer'>
        {
            image ? <>
            <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})
             }>
              <div className='h-28 flex flex-col justify-center items-center'>
        <img src={image} className='h-full'/>
     </div>
     <h3 className='font-semibold text-slate-600 text-center capitalize text-lg whitespace-nowrap overflow-hidden'>{name}</h3>
        <p className='text-center text-slate-500 font-medium capitalize'>{category}</p>
        <p className='text-center font-bold'><span className='text-red-500'>₹</span><span>{price}</span></p>
        </Link>
        <button className='bg-orange-200 py-1 my-2 w-full rounded hover:bg-orange-300 w-full' onClick={handleAddCartProduct}>
        Add Cart</button>
        

            </>
            :
            <div className='min-h-[150px] flex justify-center items-center'>
                <p>{loading}</p>
            </div>
        }
    
    </div>
  )
}

export default CardFeature