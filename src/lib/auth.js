"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import { postDataToAPI } from "./api";

// axios.defaults.baseURL = "http://127.0.0.1:8000/v1/admin/"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

export async function login(formData) {
    `
        returns {success, message}
    `
    let res = await axios.post("user/signUpSignIn/", formData)
    res = res.data

    if (res.success) {
        const email_sent = await axios.get(`user/${res?.user?.id}/getOTPOnEmail/`)

        if (email_sent.data.success) {
            return { success: true, message: "Check your email inbox to get your OTP", user: res.user }
        }
    }

    return { success: false, message: res.message, user: res.user }
}

export async function verifyOTP(uid, otp) {
    const res = await axios.post(`user/${uid}/verifyOTPOnEmail/`, {
        otp: parseInt(otp)
    });
    let data = res.data;

    if (data.success) {
        const accessToken = data?.user?.access_token;

        const decodedToken = jwtDecode(accessToken);
        const expires = new Date(decodedToken.exp * 1000)
        cookies().set('session', accessToken, { expires, httpOnly: true })
    }

    return data;
}

export async function logout() {
    cookies().delete('session')
}

export async function verifySession(request) {
    const session = request.cookies.get('session')?.value

    if (session && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (!session && !request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}