import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import PageTemplate from '@/components/page_template';
import GoogleIcon from '@mui/icons-material/Google';

import {ReactCurvedText, Icon, TextWrap1, TextWrap2} from './indexElements'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageTemplate className='flex flex-row items-center min-h-screen bg-orange-100'>
      <div className='text-center mx-auto'>
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
        <button className='mt-5 bg-white border p-5 rounded-md'><GoogleIcon /><span className='px-2'></span> Sign in with Google</button>
      </div>

    </PageTemplate>
  )
}
