import React from 'react'

const Home = () => {
  return (
    <>
      <div className='lg:flex justify-around h-screen text-center items-center home sm:block '>
        <div className='left'>
          <h1>I am frountend Devloper</h1>
          <button>Download Resume</button>
        </div>
        <div>
          <img src="../src/assets/My-img/MyImage.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home