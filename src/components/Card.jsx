import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
// import AiOutlineHeart from 'react-icons'
import {AiFillHeart} from 'react-icons/ai'


const Card = ({id, title, description, image}) => {

  const [liked, setliked] = useState(false);

  let handleLike=()=>{
    if(!liked){
      setliked((prev)=>{
        return !prev;
      })

      toast.success("Liked successfully");
    }

    else{
      setliked((prev)=>{
        return !prev;
      })

      toast.error("Like removed");
    }
  }
  
  return (
    <div className='w-[250px] flex flex-col items-start justify-start h-[270px] gap-2 bg-[#1d1041] rounded-md relative'>
        <div className='absolute text-white right-3 top-[38%] bg-white px-2 py-2 rounded-full' onClick={handleLike}><AiFillHeart className={`${liked?"text-red-500":"text-gray-800"} text-xl`}></AiFillHeart></div>
        <div className='h-[125px] w-full object-center overflow-hidden rounded-md'>
            <img src={image.url} alt="" className=''/>
        </div>
        <div className='text-white font-semibold text-xl px-2'>{title.length>25?title.substr(0, 25)+"...":title}</div>
        <p className='text-sm px-2 text-gray-200'>{description.length>30?description.substr(0, 80)+"...":description}</p>
    </div>
  )
}

export default Card