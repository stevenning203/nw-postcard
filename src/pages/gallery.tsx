import MiniPostcard from "@/components/mini_postcard";
import PageTemplate from "@/components/page_template";
import { Database, PostCard } from "@/logic/database";

export default function Gallery() {
    return (
        <PageTemplate className='flex'>
            {Database.RetrieveAllPostCards().map((post_card: PostCard, index: number) => {
                return (
                    <MiniPostcard from={post_card.GetFrom()} to={post_card.GetTo()} content={post_card.GetContent()} />)
            })}
        </PageTemplate>

    )
}