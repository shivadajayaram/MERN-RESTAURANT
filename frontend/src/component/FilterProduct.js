import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

export const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
    <div className={`text-3xl p-5  rounded-full cursor-pointer max-w-[70px] ${isActive ? "bg-blue-500 text-white" : "bg-blue-300"}`}>
               <ImSpoonKnife/>
    </div>
    <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>
  )
}
