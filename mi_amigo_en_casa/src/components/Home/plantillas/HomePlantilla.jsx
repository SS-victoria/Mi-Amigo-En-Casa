import React from 'react'
import HomeCardOrganism from '../organisms/HomeCardOrganism'
import HomeCloseIcon from '../atoms/HomeCloseIcon'
import HomeAddIcon from '../atoms/HomeAddIcon'


const HomePlantilla = () => {
  return (
    <>
        <div className=' h-100 w-100 flex justify-center items-center'>
            <div className="bg-[url('../../public/bg.svg')] h-[785px] w-[400px] relative flex flex-col  items-center space-y-4">
              <div className='flex justify-between items-center w-[360px] px-4 pt-10'>
                <h1 className='text-white text-2xl text-center flex-grow'>Administrar Mascotas</h1>
                <HomeCloseIcon />
              </div>
              <HomeAddIcon/>
              <HomeCardOrganism/>
              <HomeCardOrganism/>
              
              
            </div>
        </div>
    </>
  )
}

export default HomePlantilla
