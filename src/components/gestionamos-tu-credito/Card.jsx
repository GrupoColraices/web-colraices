
import '@/sass/components/gestionamos-tu-credito/Card.scss';
export const Card = ({ text, icon, position, color = "secondary" }) => {
    return (
        <article className={`container-card ${color} ${position}`}>
            <p>{text}</p>
            <img src={`/gestionamos-tu-credito/icons/${icon}.svg`} alt="Icon" />
        </article>
    )
}
