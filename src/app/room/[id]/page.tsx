import { TagsList } from '@/components/tags-list';
import { splitTags } from '@/lib/utils';
import { getRoomDetail } from '@/services/room'
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Room = async ({ params }: { params: { id: string } }) => {
    const room = await getRoomDetail(params.id);

    console.log(room);
    return (
        <div className='w-full h-full grid grid-cols-4'>
            <div className="col-span-3">
                Room id: {params.id}
            </div>
            <div className="col-span-1 p-4 pl-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
                    <h1 className="text-base">{room?.name}</h1>

                    {room?.githubRepo && (
                        <Link
                            href={room.githubRepo}
                            className="flex items-center gap-2 text-center text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon />
                            Github Project
                        </Link>
                    )}

                    <p className="text-base text-gray-600">{room?.description}</p>

                    <TagsList tags={splitTags(room?.tags || "")} />
                </div>
            </div>
        </div>
    )
}

export default Room