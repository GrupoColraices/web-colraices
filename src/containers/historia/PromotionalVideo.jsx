'use client'
// import ReactPlayer from 'react-player/youtube'
import '@/sass/containers/historia/PromotionalVideo.scss'
export const PromotionalVideo = () => {
    return (
        <section className='promotional-video-container'>
            <h2><span>Hacemos todo para que los Colombianos en el exterior </span>
                puedan cumplir su meta de tener casa en Colombia</h2>
            <iframe width="360" height="250" src="https://www.youtube.com/embed/14RhV3uhf8o?si=1q1HSOK-MyQSaIIW&amp;start=3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            {/* <ReactPlayer url='https://www.youtube.com/embed/14RhV3uhf8o?si=1q1HSOK-MyQSaIIW' controls={false} /> */}
        </section >
    )
}
