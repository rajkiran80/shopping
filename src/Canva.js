import React, { useEffect, useState } from 'react'
import css from './canvastyle.css'

const Canva=()=>{
    const [position,setPosition]=useState({x:0,y:0})
    const getMousePosition=(e)=>{
          const rect=e.target.getBoundingClientRect()
          console.log(e.clientX)
          setPosition({x:parseInt(e.clientX - rect.left),y:parseInt(e.clientY - rect.top)})
    }
    useEffect(()=>{
        console.log(position)
    })
    return(
        <div className='canva-container'>
             <h2>{position.x+" "+position.y}</h2>
             <canvas className='canva' onMouseMove={(e)=>getMousePosition(e)}/>
        </div>
    )
}
export default Canva