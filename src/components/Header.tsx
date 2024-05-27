'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button";
import { ModeToggle } from "./ToggleDarkMode";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


const Header = () => {
    const session = useSession();


    const DropdownLogin = () => {

        return <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button>
                        {
                            session?.data?.user?.name ? session.data?.user?.name : <></>}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>

    }


    return (
        <>
            <div className="dark:bg-slate-700 px-8 py-4">
                <div className=" flex justify-between items-center">
                    <div className="">
                        <Link href="/">
                            LOGO
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <ModeToggle />
                        {
                            session.data ? <> <DropdownLogin /></> : <><Button onClick={() => signIn("google")}>Sign In</Button></>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header