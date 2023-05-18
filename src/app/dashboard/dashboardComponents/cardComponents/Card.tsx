import React from "react";
import {FiMoreVertical} from 'react-icons/fi'

interface CardProps{
    title:string
    amount: string|number
    description:string
    color:string
}

export const Card = ({title='Savings',amount="-",description='Balance Available',color='text-black'}:CardProps) => {
  return (
    <div className=" flex flex-col bg-white w-full md:w-2/6 h-fit my-2 rounded-lg shadow-md p-5 gap-2">
      <div className='flex justify-between'><span>{title}</span><FiMoreVertical/></div>
      <div className="text-3xl font-bold ">₦ <span className={color}>{amount}</span></div>
      <div className=" text-sm text-gray-500">{description}</div>
    </div>
  );
};
