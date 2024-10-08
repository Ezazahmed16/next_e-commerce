import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get('id'));
    console.log(headerList)
    let reqBody = await req.json();

    const prisma = new PrismaClient();

    let customer = await prisma.customer_profiles.findUnique({
      where: { user_id: id }
    });

    reqBody.customer_id = customer['id'];

    const result = await prisma.product_reviews.create({
      data: reqBody
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
