import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import {SearchIcon, LeftArrowIcon, AddIcon, ProfileIcon, ExportIcon, CIcon } from './navbarElements'

function NavbarElement(props: { className?: string, children: React.ReactNode, href: string }) {
    return (
        <a href={props.href}>
            <div className={props.className + " flex flex-row content-center p-5"}>
                <div>{props.children}</div>
            </div>
        </a>
    )
}

function NavbarColour(props: { className?: string }) {
    return (
            <div className={"items-center flex flex-row content-center p-5"}>
                <CIcon style={{ color: props.className }} />
            </div>
    )
}


export function EditorBar() {
    return (
        <nav className='bg-[#EBE3D7] items-center flex'>
             <NavbarElement className='items-center' href='/'>
                <LeftArrowIcon />
            </NavbarElement>

            <div className='flex flex-center items-center justify-center grow'>
            <NavbarElement className='items-center' href='/'>
                <SearchIcon />
            </NavbarElement>

            <NavbarColour className='white' />
            <NavbarColour className='grey' />
            <NavbarColour className='black' />
            <NavbarColour className='red' />
            <NavbarColour className='yellow' />
            <NavbarColour className='green' />
            <NavbarColour className='blue' />

            <NavbarElement className='items-center' href='/'>
                <AddIcon />
            </NavbarElement>
            <NavbarElement className='items-center' href='/'>
                <ProfileIcon />
            </NavbarElement>         
            </div>   

            <div className='ml-auto pr-5'><form onSubmit={() => { }}><button type='submit'>          
            <ExportIcon />
</button></form></div>
        </nav >
    )
}

export default function Navbar() {
    return (
        <nav className='flex bg-white'>
            <NavbarElement className='text-3xl ml-auto' href='/'><DynamicFeedIcon /><span className='p-2'></span>Post-That</NavbarElement>
            <div className='ml-auto text-3xl h-auto flex pr-5'>

                <NavbarElement href="/api/auth/login">Login</NavbarElement>
                <NavbarElement href='/editor'>Editor</NavbarElement>
                <NavbarElement href="/api/auth/logout">Logout</NavbarElement>
            </div>
        </nav>
    )
}