

const HomeCard = ({children}) => {
    return (
    <>
    <div className='h-20 w-[360px] bg-slate-50 rounded-2xl bg-opacity-40 flex items-center p-4 justify-between'>
        {children}
    </div>
    </>
    )
}

export default HomeCard