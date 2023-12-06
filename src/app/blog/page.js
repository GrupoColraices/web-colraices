import { Partners } from "@/components/Partners";
import CardArticleSm from "@/components/blog/CardArticleSm";
import Pagination from "@/components/blog/Pagination";
import Podcast from "@/components/blog/Podcast";
import Top from "@/components/blog/Top";
import ArticlesSection from "@/containers/blog/ArticlesSection";
import BannerSectionBlog from "@/containers/blog/BannerSectionBlog";
import RecommendedSection from "@/containers/blog/RecommendedSection";
import { partners } from "@/helpers";
import '@/sass/containers/blog/Blog.scss';

export default function BlogPage() {
    return(
        <main>
            <BannerSectionBlog/>

            <div className="container-partners">
                <div className='partners'>
                    <Partners partners={partners} hover={true} />
                </div>
            </div>

            <div className="articles">
                <div className="article-container">
                    <ArticlesSection/>
                </div>
                <div className='container-cards-sm'>
                    <CardArticleSm />
                    <CardArticleSm />
                    <CardArticleSm />
                </div>
                <div className="container-pagination">
                    <Pagination/>
                </div>
            </div>

            <div className="recommended">
                <RecommendedSection/>
            </div>

            <div className="top-container">
                <Top/>
            </div>

            <div className="podcast-container">
                <Podcast/>
            </div>
        </main>
    )
}
