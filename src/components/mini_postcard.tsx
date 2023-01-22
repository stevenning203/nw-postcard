/**
 * 
 * @param props
 * @returns a small post card used for the gallery
 */
export default function MiniPostcard(props: { content: string, from: string, to: string, blob?: any }) {
    return (
        <div className='p-10'>
            <div>From: {props.from}</div>
            <div>To: {props.to}</div>
            <div>{props.content}</div>
        </div>
    )
}