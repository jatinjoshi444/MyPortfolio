import React from 'react'
import skillsData from '../data/skills.json'

const Skills = () => {
  return (
    <>
      <div>
        <h1 className='font-bold text-4xl my-4 pb-4'>SKILLS</h1>
        <div className='grid grid-cols-2 gap-16 lg:grid-cols-4'>
          {skillsData.map((skill,index)=>(
            <div key={index} className='flex flex-col justify-center items-center skills hover:scale-105 duration-300'>
              <img className='w-20 mb-4' src={`${skill.imageSrc}`} alt="" />
              <h3 className='font-bold text-2xl'>{skill.title}</h3>
            </div>
          ))}
        </div>

        <div>
          {SKILL_IMAGE_DATA.map((obj,i)=> {
            <div key={i}>
              <img src={obj.image} alt="" />
            </div>
          })}
        </div>
        
      </div>
    </>
  )
}

export default Skills