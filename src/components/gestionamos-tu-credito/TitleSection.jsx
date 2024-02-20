import '@/sass/components/gestionamos-tu-credito/TitleSection.scss';

export const TitleSection = ({ text, span }) => {
    return (
        <h3 className='title-section'>{text} <span>{span}</span></h3>
    )
}
