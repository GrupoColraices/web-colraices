'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { BiBath, BiExpand, BiBed } from 'react-icons/bi'
import { BsShareFill, BsSuitHeart, BsSuitHeartFill, BsImages } from 'react-icons/bs'
import { RWebShare } from 'react-web-share'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useCurrency } from '../hooks/useCurrency'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ContextLike } from '../Context/Like'
import 'swiper/css'
import Image from 'next/image'
import { useFairMode } from '../hooks/useFairMode'

export const ItemInmueble = ({ dataInmueble, Elim, serverUrl }) => {
    const router = useRouter()
    const {
        titulo,
        descripcion,
        precio,
        precio_feria,
        estado,
        tipo,
        baños,
        habitaciones,
        area_const,
        region,
        ciudad,
        slug,
        imagenes,
        num_img,
        fecha_inicial_feria,
        fecha_final_feria,
        is_fair_mode
    } = dataInmueble
    const [liked, setLiked] = useLocalStorage(slug, false)
    const { currency, convertedPrice, discountRate } = useFairMode(precio, precio_feria)
    const { handelLike, handelDelete } = useContext(ContextLike)
    const [formatePrice] = useCurrency()
    const isFairMode = Boolean(is_fair_mode)
    const handelLikeInmueble = () => {
        setLiked(!liked)
        handelLike(dataInmueble)
        toast('!Añadido a favoritos! ', {
            duration: 1700,
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            icon: '💙',
        })
    }

    const handelDeleteInm = (dataInmueble) => {
        handelDelete(dataInmueble)
        setLiked(!liked)
        router.push('/favoritos')
    }

    const handelDeleteIcon = (dataInmueble) => {
        setLiked(!liked)
        handelDelete(dataInmueble)
        toast('!Se Eliminó de favoritos! ', {
            duration: 1700,
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            icon: '💔',
        })
    }
    return (
        <article className={`itemReciente__main ${isFairMode ? 'fair__mode' : ''}}`} data-aos="fade-zoom-in" data-aos-offset="0">
            <Link href={`/casas-apartamentos-colombia-desde-el-exterior/inmueble/${slug}`}>
                <div className="itemReciente__img">
                    <div className="itemReciente__img--header">
                        <div className="itemReciente__img--header--content">
                            <p className="itemReciente__img--header--icon itemReciente__img--header--icon--sec">
                                {estado}
                            </p>
                            <div className="itemReciente__img--header-div">
                                <p className="itemReciente__img--header--icon">{tipo}</p>
                                <p className="itemReciente__img--header--icon bg__color">{ciudad}</p>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        className="mySwiper swiper_img"
                        modules={[Autoplay]}
                        autoplay={{ display: 2000 }}
                        speed={1000}
                        loop={true}
                    >
                        {imagenes?.map((image, index) => (
                            <SwiperSlide key={`image${index}`}>
                                <div className="itemReciente__img--img">
                                    <Image width={370} height={260} src={`${image}`} alt={titulo} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <picture className="itemReciente__img--footer">
                        <div className="itemReciente__img--footer--content">
                            <p className="itemReciente__img--footer--icon">{region}</p>
                            <p className="itemReciente__img--footer--icon">
                                {num_img} <BsImages />{' '}
                            </p>
                        </div>
                    </picture>
                </div>
            </Link>
            <div className="itemReciente__content">
                <div className="itemReciente__content--main">
                    {isFairMode && (
                        <p className="price__off">
                            <span>Estoy en Feria</span>
                        </p>
                    )}

                    <Link href={`/casas-apartamentos-colombia-desde-el-exterior/inmueble/${slug}`}>
                        <h2 className="itemReciente__content--main--title">{titulo}</h2>
                        <h3 className="itemReciente__content--main--subtitle">
                            {tipo} en venta en {ciudad}
                        </h3>
                        <p className="itemReciente__content--main--precio">
                            <span>Desde:</span> {formatePrice(convertedPrice.price)} {currency}
                        </p>
                        {/* 
                                {isFair && (
                                    <p className="itemReciente__content--main--precio-feria">
                                        <span>Precio feria: </span> {formatePrice(convertedPrice.fairprice)} {currency}
                                    </p>
                                )} 
                                */}
                        <div className="itemReciente__content--main--description">
                            <p>{descripcion.replace(/(<([^>]+)>)/gi, '')}</p>
                        </div>
                    </Link>

                    <div className="itemReciente__content--main--footer">
                        <p className="itemReciente__content--footer--icon">
                            <BiBed /> <span>{habitaciones}</span>{' '}
                        </p>
                        <p className="itemReciente__content--footer--icon">
                            <BiBath /> <span>{baños}</span>{' '}
                        </p>
                        <p className="itemReciente__content--footer--icon">
                            <BiExpand /> <span>{area_const} m2</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="itemReciente__content--actions">
                <div className="itemReciente__content--actions--content">
                    <RWebShare
                        sites={['facebook', 'whatsapp', 'mail', 'telegram']}
                        data={{
                            text: `${titulo}  ${descripcion}`,
                            url: `${serverUrl}${slug}`,
                            title: 'Vitrina Colombia',
                        }}
                        onClick={() => console.log('shared successfully!')}
                    >
                        <button aria-label="Compartir inmueble en redes sociales">
                            <BsShareFill />
                        </button>
                    </RWebShare>
                    {!Elim && (
                        <button
                            aria-label={liked ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
                            onClick={liked ? () => handelDeleteIcon(dataInmueble) : () => handelLikeInmueble()}
                        >
                            {liked ? <BsSuitHeartFill /> : <BsSuitHeart />}
                        </button>
                    )}
                    {Elim && (
                        <button
                            onClick={() => {
                                handelDeleteInm(dataInmueble)
                            }}
                        >
                            <RiDeleteBin6Line />
                        </button>
                    )}
                </div>
            </div>
        </article>
    )
}
export async function getServerSideProps({ req }) {
    const serverUrl = req.headers.host
    return {
        props: {
            serverUrl,
        },
    }
}
