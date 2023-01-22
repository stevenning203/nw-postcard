import PageTemplate from "@/components/page_template";

export default function About() {
    return (
        <PageTemplate>
            <h1 className='text-center text-5xl my-10'>About This Project</h1>
            <div className='mx-[30%] w-[40%] text-3xl'>
                <div className="h-10"></div>
                <p>Post-That allows someone to create and send a personalized post card!</p>
                <div className='h-10'></div>
                <p>The receiving user can login and view in their gallery the sent and received post cards.</p>
                <div className='h-10'></div>
                <p>Post-That was made using Next.js, auth0, and Google Cloud</p>
                <div className="h-20"></div>
            </div>
        </PageTemplate>
    )
}