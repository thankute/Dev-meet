import { Room } from '@/db/schema'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const RoomCard = ({ item }: { item: Room }) => {
    return (
        <div className="grid-cols-1 border-2 border-white rounded-sm p-4 " key={item?.name}>
            <h1 className='text-xl font-bold'>{item?.name}</h1>
            <p>{item?.description}</p>
            <Button className='mt-2'><Link href={`/room/${item.id}`}>
                Join Room
            </Link>
            </Button>
        </div>
    )
}

export default RoomCard