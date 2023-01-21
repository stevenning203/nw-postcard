function NavbarElement(props: { className?: string, children: string, href: string }) {
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
            <NavbarElement className='text-3xl ml-auto' href='/'>PostCard</NavbarElement>
            <div className='ml-auto text-3xl h-auto flex pr-5'>
                <NavbarElement href="/login">Login</NavbarElement>
                <NavbarElement href='/editor'>Editor</NavbarElement>
            </div>



        </nav>
    )
}