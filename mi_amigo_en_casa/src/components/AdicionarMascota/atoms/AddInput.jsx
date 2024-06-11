import React from 'react'


const AddInput = ({placeholder, children, type}) => {
    return (
    <>
    <div>
        <input className='h-10 w-[360px] bg-slate-50 rounded-3xl pl-4  opacity-40  focus:outline-none' type={type} placeholder={placeholder} />
        {children}
    </div>
    </>
    )
}

export default AddInput


