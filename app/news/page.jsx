import Link from 'next/link'
import Image from 'next/image'
import { DUMMY_NEWS } from '@/dummy-new'
export default function News() {
    return (
        <section>
            <div className='news-list'>
                {
                    DUMMY_NEWS.map((newsItem) => (
                        <li key={newsItem.id}>
                            <Link href={`/news/${newsItem.slug}`}>
                                <Image src={`/images/news/${newsItem.image}`} width={300} height={300} alt={newsItem.title} />
                                <span>{newsItem.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </div>
        </section>
    )
}