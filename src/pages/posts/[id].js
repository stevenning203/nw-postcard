import PageTemplate from '@/components/page_template';
import { google } from 'googleapis'
import Gallery from '../gallery';
import TinyCard from '@/components/tinyCard';
import { useUser } from '@auth0/nextjs-auth0/client';
import BigPostcard from '@/components/bigPostcard';
import { boxSizing } from '@mui/system';
import { useState } from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './buttonElements'

export async function getServerSideProps({ query }) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] })

    const sheets = google.sheets({ version: "v4", auth });

    const { id } = query
    const range = "Sheet1!A:H";

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
    const [content, from, to, idfrom, idto, date, image, sticker] = response.data.values[id];

    return {
        props: {
            content: content,
            from: from,
            to: to,
            idto: idto,
            idfrom: idfrom,
            date: date,
            image: image,
            sticker: sticker,
        }
    }
}

export default function Post({ content, from, to, idto, idfrom, gallery = false, array, image, sticker}) {
    const { user, error, isLoading } = useUser();
    const [box, setBox] = useState(true);

    if (user == undefined) {
        return <div>Loading, or you are not logged in!</div>
    }

    return (
        <div>
            {gallery ?
                <PageTemplate className='min-h-screen bg-orange-100'>
                <br/><br/>
                <h1 style={{fontFamily: 'Roboto Slab',
                            fontWeight: 4000,
                            fontStyle: "bold",
                            fontSize: 50,
                            textAlign: "center",
                            color: "#426574"}}>
                Gallery</h1>
                {box ? <h2 style={{fontFamily: 'Roboto Slab',
                            fontWeight: 4000,
                            fontStyle: "bold",
                            fontSize: 30,
                            textAlign: "center",
                            color: "#426574"}}>Sent</h2> :<h2 style={{fontFamily: 'Roboto Slab',
                            fontWeight: 4000,
                            fontStyle: "bold",
                            fontSize: 30,
                            textAlign: "center",
                            color: "#A94E4E"}}>Inbox</h2> }<br/>
                            <CheckBoxWrapper>
                        <CheckBox className='cursor-pointer' id="checkbox" type="checkbox" onClick={() => setBox(!box)} />
                            <CheckBoxLabel htmlFor="checkbox" />
                        </CheckBoxWrapper>

                    {box ? <div>
                        <div className='flex min-h-[16rem] justify-center flex-wrap gap-10 mb-48 mx-[10%] w-[80%] p-10 rounded-lg bg-[#426574]'>
                            {array.map((ele, index) => {
                                if (ele[4] != user.nickname || index == 0) {
                                    return;
                                }

                                const [content, from, to, idfrom, idto, date, image, sticker] = ele;

                                return (
                                    <a href={"/posts/" + index}>
                                        <TinyCard content={content} from={from} to={to} id={index} image={image} sticker={"../" + sticker} />
                                    </a>
                                )
                            })}
                        </div></div> : <div>
                        <div className='flex min-h-[16rem] justify-center flex-wrap gap-10 mx-[10%] w-[80%] mb-48 bg-[#A94E4E] p-10 rounded-lg'>
                            {array.map((ele, index) => {
                                if (ele[3] != user.nickname || index == 0) {
                                    return;
                                }
                                const [content, from, to, idfrom, idto, date, image, sticker] = ele;
                                return (
                                    <a href={"/posts/" + index}>
                                        <TinyCard content={content} from={from} to={to} id={index} image={image} sticker={"../" + sticker} />
                                    </a>
                                )
                            })}
                        </div></div>}


                </PageTemplate> :
                <div>
                    <PageTemplate>
                        <div className='flex justify-center items-center mx-[10%] w-[80%] my-16'>
                            <BigPostcard content={content} from={from} to={to} image={image} sticker={"../" + sticker} />
                        </div>
                    </PageTemplate>
                </div>}
        </div>

    )
}