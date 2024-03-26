import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const UserData = useLoaderData()
    // const [UserData, setUserData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/johebkhan32')
    //     .then(response => response.json())
    //     .then(UserData  => {setUserData(UserData)
    //  })
    // }, [])

     
      
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    text-3xl p-4'>Github Followers: {UserData.followers} 
    <img src={UserData.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async() => {
   const response = await fetch('https://api.github.com/users/johebkhan32')
   return response.json()
}