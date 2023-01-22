import PageTemplate from '@/components/page_template';
import { google } from 'googleapis'

export async function getServerSideProps({ query }) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] })

    const sheets = google.sheets({ version: "v4", auth });

    const { id } = query
    const range = "Sheet1!A:C";

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    if (id >= response.data.values.length || id == 0) {
        return {
            props: {
                title: "Error",
                content: "Error"
            }
        }
    }
    const [title, content] = response.data.values[id];

    return {
        props: {
            title: title,
            content: content
        }
    }
}

export default function Post({ title, content }) {
    return (
        <div>
            <PageTemplate></PageTemplate>
            <h1>{title}</h1>
            <div>{content}</div>
        </div>
    )
}