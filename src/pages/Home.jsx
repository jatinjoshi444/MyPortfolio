import React from 'react'

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2  text-center items-center home mt-10'>
        <div className='left w-4/5 m-auto'>
          <h1 className='font-bold text-3xl'>I am frontend Devloper</h1>
          <button className='border-2 rounded-lg p-2 bg-yellow-500 font-bold mt-5'>Download CV</button>
        </div>
        <div className='w-4/5 flex justify-center m-auto'>
          <img src="../../public/assets/My-img/MyImage.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home