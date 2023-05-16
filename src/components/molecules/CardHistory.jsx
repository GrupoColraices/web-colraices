import Image from 'next/image'
import '@/sass/components/molecules/CardHistory.scss'

export const CardHistory = ({ data }) => {
    return (
        <div className='Card-container'>
            <Image src={data.image} width={113} height={119} alt='Icon'></Image>
            <h3 className={`${data.id === 2 && 'small'}`}>{data.title} <span>{data.span}</span></h3>
        </div>
    )
}
