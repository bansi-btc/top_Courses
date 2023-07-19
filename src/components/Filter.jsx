import React from 'react'

const Filter = ({filterData, handleFilter}) => {
  return (
    <div className='flex items-center justify-center gap-4 py-1 px-2 flex-wrap'>
      {filterData.map((filter)=>{
        return <div key={filter.id} className='py-1 px-4 bg-[#1e0c4e] font-semibold text-white rounded-md cursor-pointer' onClick={()=>{
          handleFilter(filter.title)
        }}>{filter.title}</div>
      })}
    </div>
  )
}

export default Filter