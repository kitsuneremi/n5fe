import { signJWTToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

type RequestBody = {
    username: string,
    password: string
}

export async function POST(request: Request) {
    
    const body: RequestBody = await request.json();

    const user = await prisma.nguoi_dung.findFirst({
        where: {
            ten_dang_nhap: body.username,
        }
    })

    if (user 
        && 
        // await bcrypt.compare(body.password.trim(), user.password)
        body.password === user.mat_khau
        ) {
        const { mat_khau, ...UserWithoutPass } = user
        const accessToken = signJWTToken(UserWithoutPass)
        const result = {
            ...UserWithoutPass,
            accessToken
        }
        return new Response(JSON.stringify(result))
    } else {
        return new Response(JSON.stringify(null));
    }
}
