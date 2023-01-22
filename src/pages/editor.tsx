import Footer from '@/components/footer'
import { EditorBar } from '@/components/navbar'
import PageTemplate from '@/components/page_template'
import PostCard from '@/components/postcard'
import Head from 'next/head'
import React from 'react'

const Editor = () => {
    return (
        <div>
            <Head>
                <title>Editor</title>
            </Head>
            <EditorBar />
            <PostCard />
            <Footer />
        </div>

    )
}

export default Editor