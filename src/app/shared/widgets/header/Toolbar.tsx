"use Client"
import {Button} from "@nextui-org/react";
import Link from "next/link";
import React from 'react'

function Toolbar() {
  return (
    <div className="flex gap-3 items-center">
        <Button color="primary" className="uppercase font-semibold">Start Trial</Button>
        <Link href={"/sign-up"}>Sign-up</Link>
    </div>
  )
}

export default Toolbar