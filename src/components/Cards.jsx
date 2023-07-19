import React from 'react'
import Card from './Card'

const Cards = ({courses, category}) => {

  let allCourses=[];

  function getCourses(){
    if(category==="All"){
      for(let key in courses){
        for(let value of courses[key]){
          allCourses.push(value);
        }
      }
      return allCourses;
    }

    else{
      for(let key in courses){
        if(key===category){

          for(let value of courses[key]){
            allCourses.push(value);
          }
        }
      }
      return allCourses;

    }
  }
  return (
    <div className='flex flex-row items-center justify-center gap-10 flex-wrap max-w-[1000px] mx-auto'>

      {getCourses().map((course)=>{
        return <Card key={course.id} {...course}/>
      })}
    </div>
  )
}

export default Cards