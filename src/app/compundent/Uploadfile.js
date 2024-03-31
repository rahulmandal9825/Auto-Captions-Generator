"use client";

import React, { useState } from 'react'
import Uploadicon from './Uploadicon'
import axios from "axios";
import { useRouter } from 'next/navigation';


const Uploadfile = () => {

    const [isUploading , setIsUploading] =useState(false);
    const router =useRouter();

    const Upload = async (ev)=>{
        ev.preventDefault();
        const files = ev.target.files;
        if (files.length > 0) {
            const file =files[0];
            setIsUploading(true);
            const res = await axios.postForm('/api/upload', {
                file,
            });
         console.log(res.data);
         setIsUploading(false);
         const newName = res.data.newName;
         console.log(newName);
         router.push('/'+newName)
        }

    }
    
  return (
   <>
   {isUploading && (
    <div className='bg-black/80 text-white fixed inset-0 flex justify-center '>
        <div className='flex flex-col justify-center'>
           <img src="/loading.svg" alt="" />
           <h1 className='text-2xl'>Uploading...</h1>
        </div>
        </div>
   )}
      <label className="bg-green-500 p-3 cursor-pointer  rounded-xl outline-none inline-flex  font-semibold gap-2 hover:bg-green-600 shadow-lg border-none">
                   <Uploadicon/>
                    <span>Chosse File</span>
                     <input type="file" name="files" id="files" className="hidden"  onChange={Upload}/>
                </label>
   </>
   
  )
}

export default Uploadfile
