import { Header } from '@/components/Header'
import Top from '@/components/blog/Top';
import '@/sass/containers/blog/ArticlePage.scss';
import { format } from 'date-fns';
import Image from 'next/image';


const getArticle = async (slug) => {
    const article = await fetch(`https://blog.colraices.com/api/v1/posts/${slug}`)
    const response = await article.json()
    return response?.data;
}
const getArticles = async () => {
    const fetching = await fetch(`https://blog.colraices.com/api/v1/posts?category_id=8`);
    const response = await fetching.json();
    return response?.data;
}


export default async function ArticlePage({ params }) {
    const articles = await getArticles();
    const article = await getArticle(params.slug)

    return (
        <>
            <Header />
            <section className='article-container'>
                <div className='article-content'>
                    <article>
                        <h1>Lorem Ipsum</h1>
                        <span className='author'>Lorem Ipsum / {format(new Date(article.creacion), 'dd MMMM yyyy')}</span>
                        <p>Lorem Ipsum</p>
                        <div width={705} height={500} className="image" src={article.imagen} alt={article.alt} />
                        {/* <div className='image'></div> */}
                        <p>Lorem Ipsum </p>
                    </article>
                    <aside>
                        <Top articles={articles} />
                    </aside>

                </div>
            </section>
        </>

    )
}
