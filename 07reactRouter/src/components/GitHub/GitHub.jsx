import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){

    const data=useLoaderData()

    // const[data,setData]=useState([])



    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //       .then(response => {
    //         if (!response.ok) {
    //           // If the status code is 403, it could indicate a rate limit issue
    //           if (response.status === 403) {
    //             throw new Error('Rate limit exceeded');
    //           }
    //           throw new Error('Failed to fetch data');
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         setData(data);
    //       })
    //       .catch(err => {
    //         console.error(err);
    //         setError(err.message);
    //       });
    //   }, []);

    return(
        <div className="text-center m-5 bg-gray-600 text-white p-4">GitHub Followers: {data.followers}</div>
    )
}

export default Github

export const githubInfo  = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}