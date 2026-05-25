import { NextResponse } from "next/server";

const TOUR_BASE_PATH = "/tour-de-la-vivienda";
const LEGACY_TOUR_BASE_PATH = [
  "/casas-apartamentos-colombia",
  "desde-el-exterior",
].join("-");

const TOUR_FILTERS_PATH = `${TOUR_BASE_PATH}/filtrados`;
const TOUR_PROPERTY_PATH = `${TOUR_BASE_PATH}/inmueble`;
const TOUR_PRIVACY_POLICY_PATH = `${TOUR_BASE_PATH}/politica-de-privacidad`;
const TOUR_FAVORITES_PATHS = new Set([
  `${TOUR_BASE_PATH}/favoritos`,
  `${TOUR_BASE_PATH}/favoritos/para-ti`,
  `${TOUR_BASE_PATH}/favoritos/comparar-propiedades`,
]);
const TOUR_FAIR_COUNTRY_PATH = `${TOUR_BASE_PATH}/feria/canada`;
const TOUR_FAIR_FILTERS_PATH = `${TOUR_FAIR_COUNTRY_PATH}/filtrados`;
const TOUR_FAIR_PROPERTY_PATH = `${TOUR_FAIR_COUNTRY_PATH}/inmueble`;

const GEOLOCATION_API = "https://ipinfo.io";
const TOKEN = "0b05297d792e01";

const countryNames = {
  CA: "canada",
};

function isTourEnvironment(request) {
  const host = request.headers.get("host") || "";

  return (
    process.env.TOUR_LOCKDOWN_ENABLED === "true" ||
    host.includes("tour.colraices.com")
  );
}

function isPublicAsset(pathname) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/portal-inmobiliario") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/img") ||
    pathname.startsWith("/icons") ||
    pathname.startsWith("/assets") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  );
}

function hasSubPathSegmentCount(pathname, basePath, minSegments, maxSegments) {
  if (!pathname.startsWith(`${basePath}/`)) {
    return false;
  }

  const segments = pathname.slice(basePath.length + 1).split("/").filter(Boolean);

  return segments.length >= minSegments && segments.length <= maxSegments;
}

function isPathOrSubPath(pathname, basePath) {
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
}

function replacePathBase(pathname, fromBasePath, toBasePath) {
  return `${toBasePath}${pathname.slice(fromBasePath.length)}`;
}

function redirectLegacyTourPath(request) {
  const url = request.nextUrl.clone();
  url.pathname = replacePathBase(url.pathname, LEGACY_TOUR_BASE_PATH, TOUR_BASE_PATH);

  return NextResponse.redirect(url);
}

function isAllowedTourPath(pathname) {
  return (
    pathname === TOUR_BASE_PATH ||
    pathname === TOUR_PRIVACY_POLICY_PATH ||
    TOUR_FAVORITES_PATHS.has(pathname) ||
    pathname === TOUR_FAIR_COUNTRY_PATH ||
    hasSubPathSegmentCount(pathname, TOUR_FILTERS_PATH, 1, 3) ||
    hasSubPathSegmentCount(pathname, TOUR_PROPERTY_PATH, 1, 1) ||
    hasSubPathSegmentCount(pathname, TOUR_FAIR_FILTERS_PATH, 1, 3) ||
    hasSubPathSegmentCount(pathname, TOUR_FAIR_PROPERTY_PATH, 1, 1)
  );
}

async function handleExistingGeolocationRedirect(request) {
  const { pathname } = request.nextUrl;

  if (pathname !== TOUR_BASE_PATH) {
    return null;
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",").shift() ||
    request.ip ||
    request.headers.get("x-real-ip") ||
    request.nextUrl.hostname;

  try {
    const geoResponse = await fetch(
      `${GEOLOCATION_API}/${ip}/json?token=${TOKEN}`
    );

    const geoData = await geoResponse.json();
    const country = countryNames[geoData.country];

    if (country) {
      return NextResponse.redirect(
        new URL(`${TOUR_BASE_PATH}/feria/${country}`, request.url)
      );
    }
  } catch (error) {
    console.error("Error fetching geolocation", error);
  }

  return null;
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (isPathOrSubPath(pathname, LEGACY_TOUR_BASE_PATH)) {
    return redirectLegacyTourPath(request);
  }

  /**
   * Si NO estamos en el entorno aislado del Tour,
   * la Web Actual sigue funcionando igual que antes.
   */
  if (!isTourEnvironment(request)) {
    const geolocationRedirect = await handleExistingGeolocationRedirect(request);

    if (geolocationRedirect) {
      return geolocationRedirect;
    }

    return NextResponse.next();
  }

  /**
   * Si el usuario entra a la raíz del entorno Tour,
   * lo mandamos al listado principal del Tour.
   */
  if (pathname === "/") {
    return NextResponse.redirect(new URL(TOUR_BASE_PATH, request.url));
  }

  /**
   * En el entorno Tour solo se permiten:
   * - Listado de inmuebles
   * - Resultados / filtros
   * - Detalle de inmueble
   * - Favoritos
   * - Feria
   */
  if (isAllowedTourPath(pathname)) {
    return NextResponse.next();
  }

  /**
   * Cualquier otra ruta queda inaccesible
   * SOLO desde el entorno Tour.
   */
  return NextResponse.redirect(new URL(TOUR_BASE_PATH, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
