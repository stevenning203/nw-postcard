import PageTemplate from '@/components/page_template';
import { google } from 'googleapis'
import Gallery from '../gallery';
import TinyCard from '@/components/tinyCard';
import { useUser } from '@auth0/nextjs-auth0/client';
import BigPostcard from '@/components/bigPostcard';
import { boxSizing } from '@mui/system';
import { useState } from 'react';

export async function getServerSideProps({ query }) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] })

    const sheets = google.sheets({ version: "v4", auth });

    const { id } = query
    const range = "Sheet1!A:E";

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    if (id >= response.data.values.length) {
        return {
            props: {
                title: "Error",
                content: "Error"
            }
        }
    }

    if (id == 0) {
        return {
            props: {
                gallery: true,
                array: response.data.values
            }
        }
    }

    const [content, from, to, idfrom, idto] = response.data.values[id];

    return {
        props: {
            content: content,
            from: from,
            to: to,
            idto: idto,
            idfrom: idfrom,
        }
    }
}

export default function Post({ content, from, to, idto, idfrom, gallery = false, array }) {
    const { user, error, isLoading } = useUser();
    const [box, setBox] = useState(true);

    if (user == undefined) {
        return <div>Loading, or you are not logged in!</div>
    }

    return (
<div>
            {gallery ?
                <PageTemplate>
                    <h1 className='text-center text-5xl my-10'>Gallery</h1>
                    <input type='checkbox' onClick={() => setBox(!box)} />
                    {box ? <div><h2 className='text-center text-3xl my-10'>Sent</h2>
                        <div className='flex min-h-[16rem] justify-center flex-wrap gap-10 mb-48 mx-[10%] w-[80%] p-10 rounded-lg bg-orange-100'>
                        {array.filter((ele, index) => { return ele[4] == user.nickname && index != 0 }).map((ele, index) => {
                            const [content, from, to] = ele;

                            return (
                                <div key={index}>
                                    <TinyCard content={content} from={from} to={to} id={index} />
                                </div>
                            )
                        })}
                        </div></div> : <div><h2 className='text-center text-3xl my-10'>Inbox</h2>
                    <div className='flex min-h-[16rem] justify-center flex-wrap gap-10 mx-[10%] w-[80%] mb-48 bg-sky-300 p-10 rounded-lg'>
                        {array.map((ele, index) => {
                            console.log(ele + user.nickname);

                            if (ele[3] != user.nickname || index == 0) {
                                return;
                            }
                            const [content, from, to] = ele;
                            return (
                                <div>
                                    <TinyCard content={content} from={from} to={to} id={index} />
                                </div>
                            )
                        })}
                        </div></div>}


                </PageTemplate> :
                <div>
                    <PageTemplate>
                        <div className='flex justify-center items-center mx-[10%] w-[80%] my-16'>
                    <BigPostcard content={content} from={from} to={to} />
                    </div>
                    </PageTemplate>
                </div>}
        </div>

    )
}