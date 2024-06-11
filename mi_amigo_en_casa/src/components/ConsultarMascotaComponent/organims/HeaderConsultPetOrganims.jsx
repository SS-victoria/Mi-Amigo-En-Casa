import React from 'react'
import Header from '../../Home/molecules/Header'
import BtnBackIcon from '../../AdicionarMascota/atoms/BtnBackIcon'
import HomeCloseIcon from '../../Home/atoms/HomeCloseIcon'

const HeaderConsultPetOrganims = () => {
    return (
    <>
    <Header>
        <BtnBackIcon/>
        <div className='flex justify-between items-center '>
            <h1 className='text-white text-2xl text-center flex-grow'>Consultar Mascota</h1>
        </div>
        <HomeCloseIcon/>
    </Header>
    </>
    )
}

export default HeaderConsultPetOrganims
