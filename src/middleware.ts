import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "@/constants/routes";
import { LS_TOKEN } from "./constants";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const isPublicPath = pathname === ROUTES.login

    const token = request.cookies.get(LS_TOKEN)?.value

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL(ROUTES.default, request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL(ROUTES.login, request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/auth/login',
        '/products',
        '/products/add_product',
        '/products/edit_product/',
        '/users',
        '/users/add_user',
        '/users/edit_user',
        '/orders',
        '/orders/view_order/',
    ]
}

// export { default } from "next-auth/middleware"