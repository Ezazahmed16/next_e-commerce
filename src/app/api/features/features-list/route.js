import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        let { searchParams } = new URL(req.url);
        let type = searchParams.get('type')
        
        const prisma = new PrismaClient();
        const result = await prisma.features.findMany()

        return NextResponse.json({ ststus: 'success', data: result })

    } catch (error) {
        return NextResponse.json({ ststus: 'fail', data: error })
    }
}