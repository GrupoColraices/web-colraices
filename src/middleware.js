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
const allowedCountries = new Set(
    [
        // "ES", "CH", "DE", "GB", 
        "CA",
        // "PA", "MX", "CR", "PE", "US", "AE"
    ]
)
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
export async function middleware(request) {

    try {
        // const testIP = "184.71.130.183"
        const geoResponse = await fetch(`${GEOLOCATION_API}/json?token=${TOKEN}`);
        const geoData = await geoResponse.json();
        const country = countryNames[geoData.country];
        const redirectUrl = `/casas-apartamentos-colombia-desde-el-exterior/${country}`;

        if (allowedCountries.has(geoData.country)) {
            return NextResponse.redirect(new URL(redirectUrl, request.url).origin + redirectUrl);
        }

    } catch (error) {
        console.error("Error fetching geolocation", error);
    }
    return NextResponse.next();

}
export const config = {
    matcher: "/casas-apartamentos-colombia-desde-el-exterior"
}
