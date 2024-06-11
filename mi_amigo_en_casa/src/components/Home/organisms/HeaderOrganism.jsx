import React from 'react'
import Header from '../molecules/Header'
import BtnBackIcon from '../../AdicionarMascota/atoms/BtnBackIcon'
import HomeCloseIcon from '../atoms/HomeCloseIcon'

const HeaderOrganism = () => {
    return (
    <>
    <Header>
            <BtnBackIcon/>
        <div className='flex justify-between items-center '>
            <h1 className='text-white text-2xl text-center flex-grow'>Adicionar Mascota</h1>
        </div>
        <HomeCloseIcon/>
    </Header>
    </>
    )
}

export default HeaderOrganism
