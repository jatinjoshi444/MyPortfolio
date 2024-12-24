import React from 'react'
import project from '../data/projects.json'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
      <div className='mb-10'>
        <h1 className='font-bold text-4xl my-4 pb-4'>PROJECTS</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            project.map((data,index)=>(
              <>
                <div key={data.id} className='project rounded-lg hover:scale-105 duration-300'>
                  <img src={data.imageSrc} alt="" />
                  <h3 className='font-bold text-xl'>{data.title}</h3>
                  <p className='pb-5'>{data.description}
                  </p>
                  <Link className='border-2 rounded-lg p-2 bg-yellow-500 font-bold mr-5' to={data.source}>Source</Link>
                  <Link className='border-2 rounded-lg p-2 bg-yellow-500 font-bold' to={data.demo}>Demo</Link>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Projects