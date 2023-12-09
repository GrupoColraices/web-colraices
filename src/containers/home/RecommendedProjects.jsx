'use client'
import Image from 'next/image';
import { useRecommendedProject } from '@/hooks/components/useRecommendedProject';
import { recommendedProjects } from '@/helpers';
import '@/sass/components/RecommendedProjects.scss';

const RecommendedProjects = () => {
  const { projects, index, setIndex } = useRecommendedProject(recommendedProjects)

  return (
    <section className="recommendedProjects">

      <div className='btn-recommended'>
        <button className='btn-gold-rounded'>Inmueble Destacado</button>
      </div>

      <Image alt="circle1" className="circle1" src={'/components/carouselRecommendedProjects/circle1.svg'} width={500} height={500} />
      <Image alt="circle2" className="circle2" src={'/components/carouselRecommendedProjects/circle2.svg'} width={500} height={500} />
      
      <div className='container-projects-btn'>
        <div className="container-projects">
          {projects.map((item, idx) => {
            const { image } = item;
            let position = "nextSlide";
            if (idx === index) position = "activeSlide";
            if (idx === index - 1 ||(index === 0 && idx === projects.length - 1)) position = "lastSlide";
            return (
              <article className={position} key={idx}>
                <Image src={image} alt={image} className="project-img" />
                <button className='name-project'>Lórient</button>
              </article>
            );
          })}
        </div>

        <div className='slider-button-desktop'>
          <svg onClick={() => setIndex(index - 1)} xmlns="http://www.w3.org/2000/svg" width="32" height="9" viewBox="0 0 32 9" fill="none">
            <path d="M0.646446 4.29134C0.451183 4.48661 0.451183 4.80319 0.646446 4.99845L3.82843 8.18043C4.02369 8.37569 4.34027 8.37569 4.53553 8.18043C4.73079 7.98517 4.73079 7.66859 4.53553 7.47332L1.70711 4.6449L4.53553 1.81647C4.73079 1.62121 4.73079 1.30463 4.53553 1.10936C4.34027 0.914101 4.02369 0.914101 3.82843 1.10936L0.646446 4.29134ZM32 4.1449L0.999998 4.1449V5.1449L32 5.1449V4.1449Z" fill="#CAA55E"/>
          </svg>
          <span>{index+1} / <span>{projects?.length}</span></span>
          <svg onClick={() => setIndex(index + 1)} xmlns="http://www.w3.org/2000/svg" width="32" height="8" viewBox="0 0 32 8" fill="none">
            <path d="M31.3536 4.42167C31.5488 4.22641 31.5488 3.90982 31.3536 3.71456L28.1716 0.532581C27.9763 0.337319 27.6597 0.337319 27.4645 0.532581C27.2692 0.727844 27.2692 1.04443 27.4645 1.23969L30.2929 4.06812L27.4645 6.89654C27.2692 7.0918 27.2692 7.40839 27.4645 7.60365C27.6597 7.79891 27.9763 7.79891 28.1716 7.60365L31.3536 4.42167ZM31 3.56812L-1.90735e-06 3.56812V4.56812L31 4.56812V3.56812Z" fill="#CAA55E"/>
          </svg>
        </div>

      </div>

      <div className='slider-button'>
        <svg onClick={() => setIndex(index - 1)} xmlns="http://www.w3.org/2000/svg" width="32" height="9" viewBox="0 0 32 9" fill="none">
          <path d="M0.646446 4.29134C0.451183 4.48661 0.451183 4.80319 0.646446 4.99845L3.82843 8.18043C4.02369 8.37569 4.34027 8.37569 4.53553 8.18043C4.73079 7.98517 4.73079 7.66859 4.53553 7.47332L1.70711 4.6449L4.53553 1.81647C4.73079 1.62121 4.73079 1.30463 4.53553 1.10936C4.34027 0.914101 4.02369 0.914101 3.82843 1.10936L0.646446 4.29134ZM32 4.1449L0.999998 4.1449V5.1449L32 5.1449V4.1449Z" fill="#CAA55E"/>
        </svg>
        <span>{index+1} / <span>{projects?.length}</span></span>
        <svg onClick={() => setIndex(index + 1)} xmlns="http://www.w3.org/2000/svg" width="32" height="8" viewBox="0 0 32 8" fill="none">
          <path d="M31.3536 4.42167C31.5488 4.22641 31.5488 3.90982 31.3536 3.71456L28.1716 0.532581C27.9763 0.337319 27.6597 0.337319 27.4645 0.532581C27.2692 0.727844 27.2692 1.04443 27.4645 1.23969L30.2929 4.06812L27.4645 6.89654C27.2692 7.0918 27.2692 7.40839 27.4645 7.60365C27.6597 7.79891 27.9763 7.79891 28.1716 7.60365L31.3536 4.42167ZM31 3.56812L-1.90735e-06 3.56812V4.56812L31 4.56812V3.56812Z" fill="#CAA55E"/>
        </svg>
      </div>

      <div className='container-text-btn'>

        <div className='btn-recommended-desktop'>
          <button className='btn-gold-rounded-desktop'>Inmueble Destacado</button>
        </div>

        <div className='container-texts'>
          <p className='p-mobile'>Entra y visita Vitrina Colombia, el portal inmobiliario pensado especialmente para los colombianos en el exterior.</p>
          <p className='p-desktop'>¿Tienes un inmueble en tu mente? Seguro lo encuentras en nuestro portal inmobiliario. Tenemos la mayor variedad para tí.</p>
          <span>Oferta de vivienda nueva y usada.</span>
        </div>

        <div className='offer'>
          <button className='offer-btn'>
            Ofertas del mes
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
              <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="white"/>
            </svg>
          </button>

          <button className='star-btn'>
            Inmueble Estrella
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
              <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>

    </section>
  )
}

export default RecommendedProjects
