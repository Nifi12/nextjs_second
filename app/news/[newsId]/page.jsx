import Image from 'next/image'
import { DUMMY_NEWS } from "@/dummy-new"
import { notFound } from 'next/navigation'

export default function NewsId({ params }) {
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === params.newsId)

    if (!newsItem) {
        notFound()
    }

    return (
        <article className='news-article'>
            <p>{params.newsId}</p>
            <header>
                <Image src={`/images/news/${newsItem.image}`} height={200} width={200} alt={newsItem.title} />
                <h1>{newsItem.title}</h1>
                <time datetime={newsItem.date}> {newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}
