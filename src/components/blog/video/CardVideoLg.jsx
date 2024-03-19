'use client'
import '@/sass/components/blog/video/CardVideoLg.scss';

const CardVideoLg = ({ video }) => {
  const videoId = video.id.videoId;

  return (
    <div className='card-video-lg'>
      <div className='video-control'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
          title={video.snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='texts'>
        <p className='title'>{video.snippet.title} </p>
        <p className='description'>{video.snippet.description}</p>
        <p className='author'>{video.snippet.channelTitle}</p>
      </div>
    </div>
  )
}

export default CardVideoLg