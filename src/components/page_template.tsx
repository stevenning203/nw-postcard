import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function PageTemplate(props: { children: React.ReactNode, className: string }) {
    return (
        <div>
            <Head>
                <title>NWHacks Postcard App</title>
            </Head>
            <Navbar />
            <div className={props.className}>
                {props.children}
            </div>
            <Footer />
        </div>

    )
}