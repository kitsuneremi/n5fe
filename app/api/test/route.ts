import { signJWTToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

type RequestBody = {
    username: string,
    password: string
}

export async function GET(request: Request) {
    const t = await prisma.nguoi_dung.findMany();

    return new Response(JSON.stringify(t))
}
