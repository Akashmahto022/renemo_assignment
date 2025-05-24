import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    try {

        const searchParams = req.nextUrl.searchParams;
        const startingDate = searchParams.get('startingDate');
        const endingDate = searchParams.get('endingDate');

        console.log(startingDate, endingDate)

        const allEvents = await prisma.events.findMany({
            where: {
                date: {
                    gte: startingDate ? new Date(startingDate) : undefined,
                    lte: endingDate ? new Date(endingDate) : undefined
                }
            }
        })

        if (allEvents.length == 0) {
            return NextResponse.json({ message: "there is no event between this date" })
        }

        return NextResponse.json({ message: "list of all the events", events: allEvents }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
