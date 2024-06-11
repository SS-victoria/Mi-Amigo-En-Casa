import React from 'react'
import HomeCard from '../molecules/HomeCard'
import HomePhoto from '../atoms/HomePhoto'
import HomeDeleteIcon from '../atoms/HomeDeleteIcon'
import HomeSearchIcon from '../atoms/HomeSearchIcon'
import HomeEditIcon from '../atoms/HomeEditIcon'

const HomeCardOrganism = () => {
    return (
    <>
    <HomeCard>
        <HomePhoto/>
        <div className='p-4'>
            <h6>nombre</h6>
            <span>raza</span>
        </div>
        <div className='flex ml-auto space-x-3'>
            <HomeSearchIcon/>
            <HomeEditIcon/>
            <HomeDeleteIcon/>
        </div>
    </HomeCard>    
    </>
    )
}

export default HomeCardOrganism
