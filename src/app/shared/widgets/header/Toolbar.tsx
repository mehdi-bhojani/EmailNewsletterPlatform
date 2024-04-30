"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

function Toolbar() {
  const {user} = useUser();
  return (
    <div className="flex gap-3 items-center">
        <Button color="primary" className="uppercase font-semibold">Start Trial</Button>
       
        {user ? (
          <>
          <Link href={"/dashboard"}>
            <Image src={user?.imageUrl} alt="profile" width={40} height={40} className="rounded-full" />
          </Link>
          </>
        ):(
          <Link href={"/sign-up"}>Sign-up</Link>
        )}
        
    </div>
  )
}

export default Toolbar