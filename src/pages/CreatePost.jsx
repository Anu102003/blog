import React, { useState,useEffect } from 'react'
import {addDoc,collection} from "firebase/firestore"
import {auth,db} from "../firebaseconfig";
import {useNavigate} from "react-router-dom";
const CreatePost = ({isAuth}) => {
  const [title,setTitle]=useState("");
  const [postTitle,setPosTitle]=useState("");
  let navigate=useNavigate();
  const postsCollectionRef=collection(db,"posts");
  const CreatePost=async()=>{
    if(title==="" || postTitle===""){
      alert("Fill the fields");
      return false;
    }else{
      console.log("hello");
      try{
        await addDoc(postsCollectionRef,{
          title,
          postTitle,
          auth:{
            name:auth.currentUser.displayName,
            id:auth.currentUser.uid
          }
        })
        navigate("/");
        console.log(auth);

      }catch(error){
        console.log(error);
      }

    }
  }
  useEffect(()=>{
   if(!isAuth){
    navigate("/login");
   }
  })
  return (
    <div className='container'>
      <div className='bg-light p-5 rounded mt-3'>
        <h1>Create a Blog</h1>
        <div className='mb-3'>
        <label className='form-label' htmlFor='title'>Title</label>
          <input type="text" placeholder='Title' className='form-control' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='posts'>Write your own Blog</label>
          <textarea placeholder="Blog..." className='form-control'onChange={(e)=>setPosTitle(e.target.value)}></textarea>
        </div>
        <button className='btn btn-dark' onClick={CreatePost}>Submit</button>
      </div>
    </div>
  )
}

export default CreatePost
