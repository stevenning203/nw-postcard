import Head from "next/head";
import Navbar from "./navbar";

export default function PageTemplate(props: { children: React.ReactNode, className: string }) {
    return (
        <div className={props.className}>
            <Head>
                <title>NWHacks Postcard App</title>
            </Head>
            <Navbar />
            Hello
            {props.children}
        </div>
    )
}