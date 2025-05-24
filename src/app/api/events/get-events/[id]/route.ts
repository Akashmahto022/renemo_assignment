import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient() 

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const event = await prisma.events.findUnique({
            where: { id: String((await params).id) },
        })

        if (!event) {
            return NextResponse.json({ error: "event not found with this id" }, { status: 404 })
        }
        return NextResponse.json({ event: event }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}