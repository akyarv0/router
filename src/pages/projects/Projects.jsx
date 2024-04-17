import React from 'react'
import './_projects.scss'
import data from '../../helper/imageData'   


const Projects = () => {
  return (
    <div>
    {
      data.map((item)=>(
        <div className="project__card">
          <img src={item.img} alt="resim yok" />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Projects