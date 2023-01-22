import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import PageTemplate from '@/components/page_template'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import GoogleIcon from '@mui/icons-material/Google';
import { useUser } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
      <PageTemplate className='flex flex-row items-center min-h-screen bg-orange-100'>
          <div className='text-center mx-auto'>
                {user && <h1 className='text-teal-700 font-bold text-2xl'> Welcome back {user.name}!</h1>}
            <br/>
              <h1 className='text-teal-700 font-bold text-6xl'>POST-THAT</h1>
              <DynamicFeedIcon className='text-black text-[10rem]' />
              <h2 className='text-teal-700 font-bold text-5xl'>NWHACKS 2023</h2>
              <button className='mt-5 bg-white border p-5 rounded-md'><GoogleIcon /><span className='px-2'></span> Sign in with Google</button>
          </div>
      </PageTemplate>
    )
    
}
