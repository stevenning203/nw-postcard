import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import PageTemplate from '@/components/page_template';
import {ReactCurvedText, Icon, TextWrap1, TextWrap2} from './indexElements'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import GoogleIcon from '@mui/icons-material/Google';
import { useUser } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;

    return (
      <PageTemplate className='flex flex-row items-center min-h-screen bg-orange-100'>
          <div className='text-center mx-auto'>
                {user && <h1 className='font-bold text-3xl
                
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-[#8d9ea6] via-blue-700 to-[#426574]
            animate-text
            '> Hello {user.name}!</h1>}
            <br/>
                      <TextWrap1>
        <ReactCurvedText width='517'
          height='281'
          cx='262'
          cy='230'
          rx='128'
          ry='100'
          startOffset='30'
          reversed={true}
          text='POST-THAT'
          textProps={{ "style": { "fontSize": "60" } }}
          textPathProps={null}
          tspanProps={{ "dy": "-57" }}
          ellipseProps={null}
          svgProps={{ "style": { "transform": "rotate(0deg)" } }} />
          </TextWrap1>

        <Icon className='text-black text-[10rem]' />
        <TextWrap2>        
        <ReactCurvedText width='517'
          height='301'
          cx='262'
          cy='69'
          rx='170'
          ry='170'
          startOffset='50'
          reversed={false}
          text='NWHACKS 2023'
          textProps={{ "style": { "fontSize": "60" } }}
          textPathProps={null}
          tspanProps={{ "dy": "55" }}
          ellipseProps={null}
          svgProps={{ "style": { "transform": "rotate(0deg)" } }} />
          </TextWrap2>
          </div>
      </PageTemplate>
    )
}
