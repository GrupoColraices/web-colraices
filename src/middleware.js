/**
 * Middleware function to redirect users based on their geolocation.
 *
 * This middleware uses the IPAPI to determine the user's country and redirects
 * them to a specific page if they are from a specific country.
 *
 * @param {Request} request - The incoming request object
 * @returns {NextResponse} - The response object
 *
 * Example:
 * If a user from Canada accesses the `/casas-apartamentos-colombia-desde-el-exterior` page,
 * they will be redirected to `/casas-apartamentos-colombia-desde-el-exterior/canada`.
 *
 * Note: This middleware will redirect users to a page with their country code as a
 * URL parameter. For example, users from the United States will be redirected to
 * `/casas-apartamentos-colombia-desde-el-exterior/united-states`, and so on.
 */

import { NextResponse } from "next/server"

const GEOLOCATION_API = "https://ipinfo.io"
const TOKEN = "0b05297d792e01"
const countryNames = {
    // "ES": "españa",
    // "CH": "suiza",
    // "DE": "alemania",
    // "GB": "reino-unido",
    "CA": "canada",
    // "PA": "panamá",
    // "MX": "méxico",
    // "CR": "costa-rica",
    // "PE": "perú",
    // "US": "estados-unidos",
    // "AE": "emiratos-árabes-unidos"
};
export async function middleware(req) {
    const ip = req.headers.get('x-forwarded-for')?.split(',').shift() || req.ip || req.headers.get('x-real-ip') || req.nextUrl.hostname;

    try {
        // const testIP = "184.71.130.183"
        const geoResponse = await fetch(`${GEOLOCATION_API}/${ip}/json?token=${TOKEN}`);
        const geoData = await geoResponse.json();
        const country = countryNames[geoData.country];

        if (country) {
            return NextResponse.redirect(new URL(`/casas-apartamentos-colombia-desde-el-exterior/feria/${country}`, req.url));
        }

    } catch (error) {
        console.error("Error fetching geolocation", error);
    }
    return NextResponse.next();

}
export const config = {
    matcher: "/casas-apartamentos-colombia-desde-el-exterior"
}
