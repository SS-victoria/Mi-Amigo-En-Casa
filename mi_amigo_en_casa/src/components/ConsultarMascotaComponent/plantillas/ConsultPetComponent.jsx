import HeaderOrganism from "../../Home/organisms/HeaderOrganism"
import AddPhotoPetConsultIcon from "../atoms/AddPhotoPetConsultIcon"
import InfoNameIconConsultpet from "../atoms/InfoNameIconConsultpet"
import HeaderConsultPetOrganims from "../organims/HeaderConsultPetOrganims"


const ConsultPetComponent = () => {
    return (
    <>
    <div className=' h-100 w-100 flex justify-center items-center'>
        <div className="bg-[url('../../public/bg.svg')] h-[785px] w-[400px] relative flex flex-col  items-center space-y-4">
            <div className='pt-6' ><HeaderConsultPetOrganims/></div>
            <div className='flex justify-center pt-10'><AddPhotoPetConsultIcon/></div>
            
            <div className='flex flex-col pt-24 justify-center space-y-0'>
            <InfoNameIconConsultpet label={'Nombre:'} placeholder={'Ingresa nombre'}/>
            <InfoNameIconConsultpet label={'Raza:  '} placeholder={'Ingrese la raza'}/>
            <InfoNameIconConsultpet label={'Categoria:'} placeholder={'Ingrese Categoria'}/>
            <InfoNameIconConsultpet label={'Genero:'} placeholder={'Ingresa Genero'}/>
            </div>
        </div>
    </div>
    </>
    )
}

export default ConsultPetComponent
