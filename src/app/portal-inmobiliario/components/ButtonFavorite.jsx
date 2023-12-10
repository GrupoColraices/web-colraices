'use client'
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { ContextLike } from '../Context/Like';
import { useLocalStorage } from "../hooks/useLocalStorage";


export const ButtonFavorite = ({ inmueble }) => {
    const [liked, setLiked] = useLocalStorage(inmueble.slug, false);
    const { handelLike, handelDelete } = useContext(ContextLike);

    const handelLikeInmueble = () => {
        handelLike(inmueble);
        setLiked(!liked);
        toast('!Añadido a favoritos! ',
            {
                duration: 1700,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                icon: '💙',
            }
        );
    }

    const handelDeleteIcon = (inmueble) => {
        setLiked(!liked);
        handelDelete(inmueble);
        toast('!Se Eliminó de favoritos! ',
            {
                duration: 1700,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                icon: '💔',
            }
        );
    }
    return (
        <button className='button-favorite' type='button'
            onClick={liked ? () => handelDeleteIcon(inmueble) : () => handelLikeInmueble()}>
            Añadir a favoritos
            {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
    )
}
