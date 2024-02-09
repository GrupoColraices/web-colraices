'use client'
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TitleSection from "../components/TitleSection";
import { usePathname } from "next/navigation";


export const ItemFormulario = () => {
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbzBLSLXZ9XsJMM_QrvtQMABduwViV7FOc_BC-PxolcB7GBRKDD61p9xCwTSrdeNvW2fOg/exec";

    const [menssage, setMenssage] = useState("");
    const men = useRef(null);
    const pathname = usePathname()
    const handleMessage = () => {
        setMenssage(men.current.value);
    };

    const sendData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(
            "nombre",
            `${e.target.nombre.value}`
        );
        formData.append("email", e.target.email.value);
        formData.append("telefono", e.target.telefono.value);
        formData.append("mensaje", e.target.mensaje.value);
        formData.append("fecha", new Date().toLocaleString());
        formData.append("tipo", "contacto");
        formData.append("enlace", `colraices.com${pathname}`);

        fetch(scriptURL, { method: "POST", body: formData }).then(
            (response) => {
                const r = response;
                if (r.status === 200) {
                    toast("!Hemos recibido tu solicitud! ", {
                        duration: 4000,
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                        icon: "🏠👏",
                    });
                    e.target.reset();
                }
            }
        );
    };

    console.log(pathname)
    return (
        <section className="itemFormulario">
            <Toaster
                containerStyle={{ zIndex: 10000000 }}
                position="top-right"
            />
            <form onSubmit={sendData}>
                <fieldset className="itemFormulario__form">
                    <TitleSection title={"Me interesa este proyecto"} span={'Quiero más información'} />
                    <input
                        className="itemFormulario__input"
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                    <input
                        className="itemFormulario__input"
                        name="email"
                        type="email"
                        placeholder="Correo"
                        required
                    />
                    <input
                        className="itemFormulario__input"
                        name="telefono"
                        type="tel"
                        placeholder="Teléfono"
                        required
                    />
                    <textarea
                        className="itemFormulario__textarea"
                        name="mensaje"
                        onChange={handleMessage}
                        ref={men}
                        cols="30"
                        rows="4"
                        placeholder="Deja tu mensaje"
                    ></textarea>

                    <button type="submit" className="itemFormulario__button">
                        Enviar
                    </button>

                    <div className="itemFormulario__cta">
                        <button
                            onClick={() => {
                                window.open("tel:6013288939"), "_blank";
                            }}
                            type="button"
                            className="itemFormulario__button-call"
                        >
                            Llamar
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};
