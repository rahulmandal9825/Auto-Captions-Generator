"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Filepage({params}){
    const filename = params.filename;
    useEffect(()=>{
        axios.put('/api/transcription='+filename);

    },[filename])

  return (
    <div> {filename} </div>
  )
}
