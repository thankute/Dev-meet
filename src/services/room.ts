import { db } from "@/db";
import { unstable_noStore } from "next/cache";

export async function getRooms() {
    unstable_noStore();
    const rooms = await db.query.room.findMany();
    return rooms;
}


export async function getRoomDetail(id: string) {
    unstable_noStore();
    const room = await db.query.room.findFirst({
        where: (rooms, { eq }) => eq(rooms.id, id),
    });
    return room;
}