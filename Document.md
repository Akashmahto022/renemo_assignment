
I have used SQLite with Prisma ORM 
most queries filter event based on the date of the event 

first i Have created Schema with prisma
with these fields:-

model events {
  id            String          @id @default(cuid())
  title         String
  description   String
  location      String
  date          DateTime
  created_at    DateTime        @default(now())
  updated_at    DateTime        @updatedAt
  registrations registrations[]
}

pros: 
1 Faster filtering and sorting by date
2 improve performance by date

cons:
1 increase databases file with one more date field


second filter the data by prisma Quesry

 const allEvents = await prisma.events.findMany({
            where: {
                date: {
                    gte: startingDate ? new Date(startingDate) : undefined,
                    lte: endingDate ? new Date(endingDate) : undefined
                }
            }
        })

