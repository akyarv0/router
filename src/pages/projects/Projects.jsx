import React from 'react'
import './_projects.scss'
import data from '../../helper/imageData'   


const Projects = () => {
  return (
    <div className="projects">
    {
      data.map((item)=>(
        <div className="project__card">
          <img src={item.img} alt="resim yok" className="project__img" />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Projects