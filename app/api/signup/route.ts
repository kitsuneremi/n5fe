import { signJWTToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

type RequestBody = {
    username: string,
    name: string,
    firstname: string,
    email: string,
    password: string
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();
    if (body.username === undefined || body.email === undefined || body.password === undefined) {
        return new Response('Invalid', { status: 400 })
    }

    const user = await prisma.nguoi_dung.findFirst({
        where: {
            ten_dang_nhap: body.username
        }
    })

    if (user) {
        return new Response(JSON.stringify({ message: 'username already exist' }), { status: 406 })
    } else {
        try {
            const data = {
                ten_dang_nhap: body.username,
                ten: body.name,
                email: body.email,
                ho: body.firstname,
                mat_khau: body.password,

                // username: body.username,
                // password: body.password,
                // name: body.username,
                // id_chuc_vu: 0
            }
            const newuser = await prisma.nguoi_dung.create({
                data: data
            })
            if (newuser) {
                const { mat_khau, ...userWithoutPassword } = newuser;
                return new Response(JSON.stringify(userWithoutPassword), { status: 201 })
            } else {
                return new Response(JSON.stringify(null), { status: 406 })
            }

        } catch (error) {
            console.log(error)
            return new Response(JSON.stringify({ message: 'error creating account' }), { status: 500 })
        }

    }
}


// const newuser = await prisma.nguoi_dung.create({
//     data: {
//         ten_dang_nhap: body.username,
//         ten: body.username,
//         email: body.email,
//         ho: '',
//         mat_khau: body.password,

//     }
// })