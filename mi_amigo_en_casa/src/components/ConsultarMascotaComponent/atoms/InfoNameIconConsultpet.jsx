import React from 'react';

const InfoNameIconConsultpet = ({ label, placeholder}) => {
    return (
    <div className="flex justify-center items-center h-[50px] w-[360px]">
        <div className="flex items-center h-[50px] mx-auto">
            <div className="bg-white bg-opacity-40 text-white p-2 rounded-s-xl w-[100px] font-semibold text-opacity-65">
                {label}
            </div>
            <input
            type="text"
            className="bg-gray-200 p-2 rounded-r-xl placeholder:text-sky-900 bg-opacity-70 placeholder:text-opacity-65 text-sky-900 border-none focus:outline-none w-auto pl-4 font-semibold" // Cambia el valor de w-[200px] según sea necesario
            placeholder={placeholder}
            />
        </div>
    </div>
  );
};

export default InfoNameIconConsultpet;
