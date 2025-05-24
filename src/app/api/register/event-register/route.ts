import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()

        const { name, email, event_id, } = reqBody

        if (!event_id || !name || !email) {
            return NextResponse.json({ message: "all the fields are requird to register for the event" }, { status: 400 })
        }

        const registeredEvent = await prisma.events.findUnique({
            where: {
                id: event_id
            }
        })

        if (!registeredEvent) {
            return NextResponse.json({ error: "event not found with this event id" }, { status: 404 })
        }

        const userRegistrationForUser = await prisma.registrations.create({
            data: {
                name, email, event_id,
            }
        })

        return NextResponse.json({ message: "congrats you have registered for this event", event: registeredEvent, registration: userRegistrationForUser }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ meesage: "error while register the user for an event", error: error }, { status: 500 })
    }
}