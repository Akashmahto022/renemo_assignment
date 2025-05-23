import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { title, description, location, date } = reqBody

        const event = await prisma.events.create({
            data: {
                title,
                description,
                location,
                date: new Date(date)
            }
        })
        return NextResponse.json({ "event": event }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}