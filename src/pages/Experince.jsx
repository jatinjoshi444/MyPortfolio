import React from 'react'
import experince from "../data/experience.json"

const Experince = () => {
  return (
    <>
      <div>
        <h3 className='font-bold text-4xl'>EXPERINCE</h3>
        {
          experince.map((data,index)=>(
              <>
               <div key={data.id} className='flex gap-5 mt-10 ex items-center'>
                  <div>
                    <img src={`${data.imageSrc}`} alt="" width="60rem" height="60rem"/>
                  </div>
                  <div className='text-yellow-500 font-semibold'>
                    <h3 className='text-xl lg:text-2xl text-white'>{data.role}</h3>
                    <h3 className='text-sm lg:text-lg'>{data.startDate}{" "} {data.endDate} {" "} {data.location}
                    </h3>
                    <h3 className='text-sm lg:text-lg'>{data.experiences[0]}</h3>
                    <h3 className='text-sm lg:text-lg'>{data.experiences[1]}</h3>
                  </div> 
               </div>
              </>
          ))
        }
      </div>
    </>
  )
}

export default Experince