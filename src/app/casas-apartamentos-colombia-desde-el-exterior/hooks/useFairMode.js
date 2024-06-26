"use client"

import { usePathname } from "next/navigation";


export const useFairMode = () => {
    const pathName = usePathname();
    const countries = [
        "espana",
        "suiza",
        "alemania",
        "reino-unido",
        "canada",
        "panama",
        "mexico",
        "costa-rica",
        "peru",
        "estados-unidos",
        "emiratos-arabes-unidos"
    ];

    const fairRoutes = new Set(
        countries.map(country => `/casas-apartamentos-colombia-desde-el-exterior/${country}`)
    );

    const fairMode = fairRoutes.has(pathName)

    return { fairMode }
}
