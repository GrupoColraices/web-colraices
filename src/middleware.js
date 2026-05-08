import { NextResponse } from "next/server";

const TOUR_BASE_PATH = "/casas-apartamentos-colombia-desde-el-exterior";

const ALLOWED_TOUR_PATHS = [
  TOUR_BASE_PATH,
  `${TOUR_BASE_PATH}/filtrados`,
  `${TOUR_BASE_PATH}/inmueble`,
];

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

function isAllowedTourPath(pathname) {
  return ALLOWED_TOUR_PATHS.some((allowedPath) => {
    return pathname === allowedPath || pathname.startsWith(`${allowedPath}/`);
  });
}

async function handleExistingGeolocationRedirect(request) {
  const { pathname } = request.nextUrl;

  if (pathname !== TOUR_BASE_PATH) {
    return NextResponse.next();
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

  return NextResponse.next();
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  /**
   * Si NO estamos en el entorno aislado del Tour,
   * la Web Actual sigue funcionando igual que antes.
   */
  if (!isTourEnvironment(request)) {
    return handleExistingGeolocationRedirect(request);
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