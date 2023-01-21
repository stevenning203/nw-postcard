export default function Footer() {
    return (
        <div className='bg-blue-500 text-white'>
            <footer className='ml-[10%] w-[80%] flex flex-wrap gap-5 py-5'>
                <div className='p-5'>
                    <h1 className='font-bold text-2xl'>Authors</h1>
                    <br />
                    Designed & developed by Christine, <br /> Aditya, Emily, and Steven
                </div>
                <div className='p-5'>
                    <h1 className='font-bold text-2xl'>NWHacks 2023</h1>
                    <br />
                    Developed at NWHacks 2023
                </div>
                <div className='p-5'>
                    <button className='p-5 bg-sky-300 rounded-md text-white text-lg'>Login</button>
                </div>
            </footer>
        </div>

    )
}