import PageTemplate from "@/components/page_template";

export default function About() {
    return (
        <PageTemplate>
            
            <h1 className='text-center text-5xl my-10 underline'>About Post-That</h1>
            <div className='mx-[30%] w-[40%] text-2xl'>
                <div className="h-5"></div>
                <p>Post-That allows the user to create and send a personalized postcards.</p>
                <div className='h-5'></div>
                <p>The receiving user can login and view the postcards they sent and received.</p>
                <div className='h-5'></div>
                <p>Post-That was made using Next.js, auth0, and Google Cloud.</p>
                <div className="h-20"></div>
            </div>
        </PageTemplate>
    )
}