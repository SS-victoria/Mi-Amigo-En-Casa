import AddInput from "../../AdicionarMascota/atoms/AddInput"
import ArrowsIcon from "../../AdicionarMascota/atoms/ArrowsIcon"
import BtnPhotoIcon from "../../AdicionarMascota/atoms/BtnPhotoIcon"
import AddPhotoPetConsultIcon from "../../ConsultarMascotaComponent/atoms/AddPhotoPetConsultIcon"
import BtnEditIcon from "../atoms/BtnEditIcon"
import HeaderEditPetOrganims from "../organims/HeaderEditPetOrganims"


const EditPetComponentPlantilla = () => {
    return (
    <>
    <div className=' h-100 w-100 flex justify-center items-center'>
        <div className="bg-[url('../../public/bg.svg')] h-[785px] w-[400px] relative flex flex-col  items-center space-y-4">
            <div className='pt-6' ><HeaderEditPetOrganims/></div>
            <div className='flex justify-center pt-10'><AddPhotoPetConsultIcon/></div>
            
            <div className='flex flex-col pt-16 justify-center space-y-6'>

                <div><AddInput placeholder="Nombre" type='text'/></div>

                <div className='relative w-[360px]'><AddInput placeholder="Seleccione Raza"/>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ArrowsIcon />
                    </div>
                </div>

                <div className='relative w-[360px]'><AddInput placeholder="Seleccione Categoria"/>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ArrowsIcon />
                    </div>
                </div>

                <div className='relative w-[360px]'><AddInput placeholder="Subir Foto"/>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <BtnPhotoIcon/>
                    </div>
                </div>

                <div className='relative w-[360px]'><AddInput placeholder="Seleccione Genero"/>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ArrowsIcon />
                    </div>
                </div>

                <BtnEditIcon/>
            </div>
        </div>
    </div>
    </>
    )
}

export default EditPetComponentPlantilla
