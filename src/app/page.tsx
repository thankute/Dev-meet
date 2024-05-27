import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { getRooms } from "@/services/room";
import Link from "next/link";

export default async function Home() {
  const rooms = await getRooms();

  return (
    <>
      <div className="">
        <div className="px-8 pt-8 pb-4 flex justify-between">
          <h1 className="text-2xl font-bold">Rooms</h1>
          <Button asChild><Link href="/create-room">Create Room</Link></Button>
        </div>
        <div className="px-8 grid grid-cols-4 gap-4">
          {rooms.map(item => <RoomCard key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
}
