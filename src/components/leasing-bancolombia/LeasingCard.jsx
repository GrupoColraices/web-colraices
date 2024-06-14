import "@/sass/components/leasing-bancolombia/LeasingCard.scss"
export const LeasingCard = ({ data }) => {
    return (
        <div className='container-card'>
            <img src={data.icon} alt="Icono ilustrativo" />
            <p>{data.text}</p>
        </div>
    )
}
