import { Partners } from "@/components/Partners";
import CardArticleSm from "@/components/blog/CardArticleSm";
import Pagination from "@/components/blog/Pagination";
import ArticlesSection from "@/containers/home/blog/ArticlesSection";
import BannerSectionBlog from "@/containers/home/blog/BannerSectionBlog";
import { partners } from "@/helpers";
import '@/sass/containers/blog/Blog.scss';

export default function BlogPage() {
    return(
        <main>
            <BannerSectionBlog/>
            <div className='partners'>
                <Partners partners={partners} hover={true} />
            </div>
            <div className="article-container">
                <ArticlesSection/>
            </div>
            <div className='container-cards-sm'>
                <CardArticleSm />
            </div>
            <div className="container-pagination">
                <Pagination/>
            </div>
        </main>
    )
}
