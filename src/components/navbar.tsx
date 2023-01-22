import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { useUser } from '@auth0/nextjs-auth0/client';


function NavbarElement(props: { className?: string, children: React.ReactNode, href: string }) {
    return (
        <a className='flex' href={props.href}>
            <div className={props.className + " flex flex-col justify-center p-5"}>
                <div>{props.children}</div>
            </div>
        </a>
    )
}

export default function Navbar() {
    const { user, error, isLoading } = useUser();
    return (<>
        <nav className='shadow flex bg-[#7D6643] text-white'>
            <NavbarElement className='text-5xl ml-auto' href='/'><DynamicFeedIcon style={{fontSize: 50}}/><span className='p-2'></span>Post-That</NavbarElement>
            <div className='ml-auto text-4xl h-auto flex pr-5'>
                <NavbarElement href='/posts/0'>Gallery</NavbarElement>
                <NavbarElement href='/editor'>Editor</NavbarElement>
                <NavbarElement href='/about'>About</NavbarElement>
                {!user && <NavbarElement href="/api/auth/login">Login</NavbarElement>}
                {user && <NavbarElement href="/api/auth/logout">Logout</NavbarElement>}
            </div>
        </nav>
        </>
    )
}