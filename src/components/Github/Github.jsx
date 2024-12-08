import React, {useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom'
import{ useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData() 
    // const [data, setData] = useState([])
    // const {username} = useParams();
    // useEffect(() => {
    //  fetch("https://api.github.com/users/SanjayRawat0570") 
    //  .then(response => response.json())
    //   .then(data=>{
    //         console.log(data);
    //         setData(data)
    //   })
    // },[])
  return (
    <div>

        <img src={data.avatar_url} alt="git picture" width={100}/>

    
    <div className='text-center m-4 bg-gray-500  text-white
    p-4 text-3xl' >Github followors:{data.followers}<img src={data.avatar_url} alt="git picture" width={100}/> </div>
  
  <div className='text-center m-4 bg-gray-500  text-white
    p-4 text-3xl' >Github following:{data.following}<img src={data.avatar_url} alt="git picture" width={100}/> </div>

  </div>
  )
}

export default Github
export const githubInfoLoader = async()=>{ 
   const response = await fetch('https://api.github.com/users/SanjayRawat0570')
   return response.json()
}