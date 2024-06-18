'use client'
import Image from "next/image";
import Line from "../Line"
import '@/sass/components/blog/Podcast.scss';
import podcast from '../../../public/Podcast.svg';
import podcastDesktop from '../../../public/Podcast-desktop.svg';

const Podcast = () => {
  return (
    <div className="podcast">
      <h2 className="title-podcast">Podcast</h2>
      <Line width='20' />

      <div className="podcast-content">
        {/* <Image className="podcast-image" src={podcast} alt="podcast" width={200} height={200} /> */}
        {/* <Image className="podcast-image-desktop" src={podcastDesktop} alt="podcast" width={200} height={200} /> */}
        <iframe style={{ borderRadius: "30px" }} src="https://open.spotify.com/embed/show/3PN93OC1LaC3UTV8xufRir?utm_source=generator" width="100%" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      </div>
    </div>
  )
}

export default Podcast
