import { Header } from "@/components/Header";
import { Partners } from "@/components/Partners";
import Podcast from "@/components/blog/Podcast";
import TopArticles from "@/components/blog/TopArticles";
import ArticlesSection from "@/containers/blog/ArticlesSection";
import BannerSectionBlog from "@/containers/blog/BannerSectionBlog";
import RecommendedSection from "@/containers/blog/RecommendedSection";
import { ArticlesProvider } from "@/context/ArticlesContext";
import { partners } from "@/helpers";
import '@/sass/containers/blog/Blog.scss';




export const metadata = {
    title: 'Blog de vivienda colombianos en el exterior l Colraices',
    description: "El blog para colombianos en el exterior ofrece todo lo que necesitas para tomar decisiones inteligentes sobre inmuebles en Colombia. ¡Descubre todo lo que necesitas en un solo lugar! Desde guías de compra hasta consejos sobre las mejores ciudades y zonas para invertir en Colombia.",
    keywords: "Comprar casa en Colombia desde el exterior,Invertir en vivienda en Colombia,Mercado inmobiliario en Colombia,Consejos para comprar casa en Colombia,Vivienda nueva o usada en Colombia,Mejores ciudades para comprar casa en Colombia,Guía para comprar vivienda en ColombiComprar propiedad en Colombia desde el exterior,Requisitos para comprar casa en Colombia,Trámites para comprar casa en Colombia."
}
const getArticles = async () => {
    const fetching = await fetch(`https://blog.colraices.com/api/v1/posts?category_id=8`);
    const response = await fetching.json();
    return response?.data;
}
const getVideos = async () => {
    const apiKey = "AIzaSyAWQ4bAayePmmYTrnhxvwefzcQQaTmQk2k";
    const channelId = "UCiBystYzqzabHULJWwgAjnw"
    const fetching = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`);
    const response = await fetching.json();
    return response?.items;
}

export default async function BlogPage() {
    const articles = await getArticles();
    const videos = await getVideos();
    return (
        <ArticlesProvider>
            <Header />
            <main>
                <BannerSectionBlog articles={articles} />

                <div className="container-partners">
                    <div className='partners'>
                        <Partners partners={partners} hover={true} />
                    </div>
                </div>

                <div className="articles">
                    <div className="article-container">
                        <ArticlesSection />
                    </div>
                </div>

                <div className="recommended">
                    <RecommendedSection articles={articles} videos={videos} />
                </div>

                <div className="top-container">
                    <TopArticles articles={articles} />
                </div>

                <div className="podcast-container">
                    <Podcast />
                </div>
            </main>
        </ArticlesProvider>
    )
}
