export const TitleSection = (props) => {
    return (
        <section className={`title-section ${props.shadow && 'shadow'}`} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
            <h2 className='title-section-title'>{props.title} <span>{props.span}</span></h2>
            <p className='title-section-paragraph'>{props.children}</p>
        </section>
    )
}
