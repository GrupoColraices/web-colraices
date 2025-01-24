import TopArticles from '@/components/blog/TopArticles'
import { formatDate } from '@/helpers/formatDate'
import '@/sass/containers/blog/ArticlePage.scss'
import Image from 'next/image'

export async function generateMetadata({ params }) {
    const { titulo, description } = await getArticle(params.slug)
    return {
        title: titulo,
        description: description,
    }
}

const getArticle = async (slug) => {
    const article = await fetch(`https://blog.colraices.com/api/v1/posts/${slug}`)
    const response = await article.json()
    return response?.data
}
const getArticles = async () => {
    const fetching = await fetch(`https://blog.colraices.com/api/v1/posts?category_id=8`)
    const response = await fetching.json()
    return response?.data
}

export default async function ArticlePage({ params }) {
    const articles = await getArticles()
    const article = await getArticle(params.slug)

    return (
        <section className="article-container">
            <div className="article-content">
                <article>
                    <h1>{article.titulo}</h1>
                    <span className="author"> {formatDate(article.creacion)}</span>
                    <p>{article.description}</p>
                    <Image width={705} height={500} className="image" src={article.imagen} alt={article.alt} />
                    <div dangerouslySetInnerHTML={{ __html: article.contenido }}></div>
                </article>
                <aside>
                    <TopArticles articles={articles} />
                </aside>
            </div>
        </section>
    )
}
