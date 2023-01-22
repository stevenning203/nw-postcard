import PageTemplate from '@/components/page_template';
import { google } from 'googleapis'
import Gallery from '../gallery';
import MiniPostcard from '@/components/mini_postcard';
import TinyCard from '@/components/tinyCard';
import { useUser } from '@auth0/nextjs-auth0/client';

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
    if (user == undefined) {
        return <div>Loading</div>
    }

    return (
        <div>
            {gallery ?
                <PageTemplate>
                    <h1 className='text-center text-5xl my-10'>Gallery</h1>
                    <h2 className='text-center text-3xl my-10'>Sent</h2>
                    <div className='flex min-h-[16rem] justify-center flex-wrap gap-10 mx-[10%] w-[80%] p-10 rounded-lg bg-orange-100'>
                        {array.filter((ele) => { return ele[4] == user.nickname; }).map((ele, index) => {
                            if (index == 0) {
                                return <div></div>;
                            }
                            const [content, from, to] = ele;
                            return (
                                <div>
                                    <TinyCard content={content} from={from} to={to} id={index} />
                                </div>
                            )
                        })}
                    </div>
                    <h2 className='text-center text-3xl my-10'>Inbox</h2>
                    <div className='flex min-h-[16rem] justify-center flex-wrap gap-10 mx-[10%] w-[80%] mb-48 bg-sky-300 p-10 rounded-lg'>
                        {array.filter((ele) => { return ele[3] == user.nickname }).map((ele, index) => {
                            if (index == 0) {
                                return;
                            }
                            const [content, from, to] = ele;
                            return (
                                <div>
                                    <TinyCard content={content} from={from} to={to} id={index} />
                                    {ele.idto}
                                </div>
                            )
                        })}
                    </div>
                </PageTemplate> :
                <div>
                    <PageTemplate>
                        <h1>{title}</h1>
                        <div>{content}</div>
                    </PageTemplate>
                </div>}
        </div>

    )
}