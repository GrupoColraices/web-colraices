import Image from "next/image"
import '@/sass/components/molecules/CardTestimonial.scss'

export const CardTestimonial = ({ title, paragraph }) => {
  return (
    <div className="Card-container-testimonial">
      <div>
        <Image src='icons/testimonialIcon.svg' width={500} height={500} alt='Icon'></Image>
        <h3>{title}</h3>
      </div>
      <p>{paragraph}</p>
    </div>
  )
}
