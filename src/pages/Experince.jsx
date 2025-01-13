import React from 'react'

const Experince = () => {

  const data = [
    {
        "id":1,
        "role":"MERN stack Devloper Intern",
        "organisation":"Amilo AI",
        "startDate":"October, 2024",
        "endDate":"Present",
        "location":"Remote",
        "experiences":[
            "Gaining practical experience in building and managing full-stack web applications.",
            "Worked on various projects, enhancing my understanding of modern web development practices."
         ],
         "imageSrc":"../src/assets/experince-img/AmiloAi.png"
    },
    {
        "id":2,
        "role":"Jr. Front-end Devloper Intern",
        "organisation":"AUROSKKIL",
        "startDate":"March, 2024",
        "endDate":"September, 2024",
        "location":"Kharadi-Pune",
        "experiences":[
            "gaining hands-on experience in building responsive web applications.",
            "Developed skills in HTML, CSS, JavaScript, and frameworks during internship, contributing to live projects and enhancing user interfaces."
         ],
         "imageSrc":"../src/assets/experince-img/auroskkil.webp"
    }
]

  return (
    <>
      <div>
        <h3 className='font-bold text-4xl'>EXPERINCE</h3>
        {
          data.map((data,index)=>(
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