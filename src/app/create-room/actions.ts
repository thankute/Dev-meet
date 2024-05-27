'use server'

import { db } from "@/db";
import { Room, room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createRoomAction(params: Omit<Room, "userId">) {
    const session = await getSession();

    if (!session) {
        throw new Error("You must logged in before creating room");
    }

    await db.insert(room).values({ ...params, userId: session?.user.id });

    revalidatePath("/")
}

