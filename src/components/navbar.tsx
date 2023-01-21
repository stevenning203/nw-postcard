import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

function NavbarElement(props: { className?: string, children: React.ReactNode, href: string }) {
    return (
        <a href={props.href}>
            <div className={props.className + " flex flex-row content-center bg-white p-5"}>
                <div>{props.children}</div>
            </div>
        </a>
    )
}

export default function Navbar() {
    return (
        <nav className='flex bg-white'>
            <NavbarElement className='text-3xl ml-auto' href='/'><DynamicFeedIcon /><span className='p-2'></span>Post-That</NavbarElement>
            <div className='ml-auto text-3xl h-auto flex pr-5'>
                <NavbarElement href="/api/auth/login">Login</NavbarElement>
                <NavbarElement href='/editor'>Editor</NavbarElement>
            </div>



        </nav>
    )
}