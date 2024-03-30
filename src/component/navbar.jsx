import React from 'react'

function navbar() {
  return (
    <nav className="flex justify-between text-white">
        <div className="log font-bold" > 
        <span className=" text-white text-2xl"> &lt;  Pass </span>
       
        <span  className=" text-white text-2xl" > OP/&gt; </span>

        </div>
         <ul> 
            <li className="flex gap-6"> 
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </li>
         </ul>
    </nav>
  )
}

export default navbar
