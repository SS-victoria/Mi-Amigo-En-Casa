import {Navigate } from "react-router-dom"


const LoginComponent = () => {

    const handleNavigate =()=>{
        Navigate('/home')
    }



    return (
    <>
    
        <div className='h-screen w-100 flex justify-center items-center'>
            <div className="bg-[url('../../public/bg-login.svg')] h-[785px] w-[400px] relative flex justify-center items-center">
                <input className='absolute rounded-3xl flex w-80 bottom-44 h-10 pl-4 bg-[#cbd5e1] placeholder-opacity-60 placeholder-blue-900 opacity-70 focus:outline-none' type="text" placeholder='correo electronico' />
                <input className='absolute rounded-3xl flex w-80 bottom-28 h-10 pl-4 bg-[#cbd5e1] placeholder-opacity-60 placeholder-blue-900 opacity-70 focus:outline-none' type="password" placeholder='Contraseña' />
                <button  className='absolute rounded-3xl bg-blue-500 bottom-14 py-2 px-32' onClick={handleNavigate}>Ingresar</button>
            </div>
        </div>
    </>
    )
}

export default LoginComponent