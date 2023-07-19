import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import {apiUrl , filterData} from './components/data'
import Cards from './components/Cards'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  // console.log(apiUrl);
  const [courses, setcourses] = useState({});
  const [category, setcategory] = useState("All")



  async function FetchData(){
    let response=await fetch(apiUrl);
    let output=await response.json();

    // console.log(output.data);
    setcourses(output.data);
  }

  useEffect(()=>{
    FetchData();
  }, [])

  let handleFilter=(filter)=>{
    // console.log(filter);
    setcategory(filter);
  }
  return (
    <div className='flex flex-col gap-4 bg-[#352657] min-h-[100vh] pb-5'>
      <Navbar/>
      <Filter filterData={filterData} handleFilter={handleFilter}/>

      <Cards courses={courses} category={category}/>
    </div>
  )
}

export default App