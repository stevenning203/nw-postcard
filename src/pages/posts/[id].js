import PageTemplate from '@/components/page_template';
import { google } from 'googleapis'
import Gallery from '../gallery';
import TinyCard from '@/components/tinyCard';
import BigPostcard from '@/components/bigPostcard';

export async function getServerSideProps({ query }) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] })

    const sheets = google.sheets({ version: "v4", auth });

    const { id } = query
    const range = "Sheet1!A:C";

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

    const [content, from, to] = response.data.values[id];

    return {
        props: {
            content: content,
            from: from,
            to: to
        }
    }
}

export default function Post({ content, from, to, gallery = false, array }) {
    return (
        <div>
            {gallery ?
                <PageTemplate>
                    <h1 className='text-center text-5xl my-10'>Gallery</h1>
                    <div className='flex justify-center flex-wrap gap-10 mx-[10%] w-[80%] pb-10'>

                        {array.map((ele, index) => {
                            if (index == 0) {
                                return;
                            }
                            const [content, from, to] = ele;
                            return (
                    <TinyCard content={content} from={from} to={to} id={index} />
                    )
                        })}
                    </div>

                </PageTemplate> :
                <div>
                    <PageTemplate>
                    <div className='flex justify-center items-center mx-[10%] w-[80%]'>
                    <BigPostcard content={content} from={from} to={to} />
                    </div>
                    </PageTemplate>
                </div>}
        </div>

    )
}