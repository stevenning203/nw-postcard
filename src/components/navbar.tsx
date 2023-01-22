import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import SendIcon from '@mui/icons-material/Send';

function NavbarElement(props: { className?: string, children: React.ReactNode, href: string }) {
    return (
        <a href={props.href}>
            <div className={props.className + " flex flex-row content-center p-5"}>
                <div>{props.children}</div>
            </div>
        </a>
    )
}

export function EditorBar() {
    return (
        <nav className='bg-[#A94E4E] items-center flex'>
            <NavbarElement className='text-3xl' href='/'><DynamicFeedIcon /><span className='p-2'></span>Post-That</NavbarElement>
            <div className='text-center'></div>
            <div className='ml-auto pr-5'><form onSubmit={() => { }}><button type='submit'><SendIcon className='text-5xl' /></button></form></div>
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