import React from 'react'
import eye from '../assets/eye.png'
function Manager() {

    const handelClick =()=>{

    }
  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <h1>  <span className=" text-white text-2xl"> &lt;  Pass </span>
       
       <span  className=" text-white text-2xl" > OP/&gt; </span>
       <p className=" text-white mb-4"> Your Own Password Manager </p>
</h1>
            <input type="text" className=" mb-8 rounded-lg p-2 text-black w-[80%]" placeholder="Enter Your Website URL" />

        <div className=" flex text-white p-4 gap-5 justify-center ">
            <input type="text"   className=" mb-8 rounded-lg p-2 text-black w-[40%]" placeholder="Enter Your Username"/>
            <input type="text"   className=" mb-8 rounded-lg p-2 text-black  w-[40%]" placeholder="Enter Your Password" />
            <img src={eye} alt="eye" className=" w-[2rem] h-[2rem] relative top-0.5 left-[-4rem]" onClick={ handelClick }/>
        </div>
    
    <button className= "bg-purple-600 p-3 rounded-lg text-xl text-white hover:bg-purple-500">
        <lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover">
      </lord-icon> Add Password </button>
        </>
  )
}

export default Manager
