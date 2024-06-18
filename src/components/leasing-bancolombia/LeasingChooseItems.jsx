import "@/sass/components/leasing-bancolombia/LeasingChooseItems.scss"
export const LeasingChooseItems = ({ data }) => {
    return (
        <div className="container-choose-items">
            <img src={data.icon} alt="Icono ilustrativo" />
            <p>{data.text}</p>
        </div>
    )
}
