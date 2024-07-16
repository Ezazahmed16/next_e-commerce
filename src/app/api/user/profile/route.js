import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        let headerList = headers();
        let id = parseInt(headerList.get('id'));
        let reqBody = await req.json();
console.log(reqBody)
        const prisma = new PrismaClient();
        const result = await prisma.customer_profiles.upsert({
            where: { user_id: id },
            update: reqBody,
            create: { ...reqBody, user_id: id }
        });

        return NextResponse.json({ status: "success", data: result });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e.toString() });
    }
}
