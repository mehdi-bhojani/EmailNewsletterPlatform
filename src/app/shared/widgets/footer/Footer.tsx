import React from "react";
import FooterLogo from "./FooterLogo";
import { Button } from "@nextui-org/react";
import Link from "next/link";

function Footer() {
return (
    <footer className="bg-slate-800 text-white">
        <div className="p-5 flex flex-col gap-3 md:justify-between w-[95%] m-auto md:flex-row">
            <div className="flex flex-col gap-3 border-b border-x-slate-400 md:border-none p-5 ">
                <Link href="/">
                    <FooterLogo />
                </Link>
                <h1>Receive PegionPulse updates straight to your email inbox.</h1>
                <div className="flex h-[36px]">
                    <input
                        type="email"
                        className="border-slate-400 bg-transparent border-1 w-max p-2 text-white"
                        placeholder="Enter your email address"
                    />
                    <Button className="bg-blue-500 text-white uppercase font-semibold rounded-none h-auto">
                        Subscribe
                    </Button>
                </div>
                <p className="text-sm">
                    By subscribing you agree to with our Privacy Policy and provide
                    consent to receive updates from our company.
                </p>
            </div>
            <ul className="flex flex-col gap-2 border-b border-slate-400  md:border-none p-5 md:mt-10">
                <li>
                    <Link href="/" className="font-semibold capitalize">create</Link>
                </li>
                <li>
                    <Link href="/" className="font-semibold capitalize">Write</Link>
                </li>
                <li>
                    <Link href="/" className="font-semibold capitalize">Grow</Link>
                </li>
                <li>
                    <Link href="/" className="font-semibold capitalize">Monitize</Link>
                </li>
                <li>
                    <Link href="/" className="font-semibold capitalize">Analayze</Link>
                </li>
            </ul>
            <ul className="flex flex-col gap-2 md:mt-10 p-5">
                <li>
                    <Link href="/" className="font-semibold capitalize">Careers</Link>
                </li>
                <li>
                    <Link href="/" className="font-semibold capitalize">Pricing</Link>
                </li>
                <li>
                    <Link href="/" className="font-semibold capitalize">Shop</Link>
                </li>
                <li>
                    <Link href="/" className="font-semibold capitalize">Compare</Link>
                </li>
                <li>
                    <Link href="/" className="font-semibold capitalize">Love</Link>
                </li>
            </ul>
        </div>
        <hr className="w-[85%] m-auto"/>
        <div className="text-center w-full p-5 ">
            © 2024 PegionPulse, Inc. All rights reserved.
            <br />M & Manage by Mehdi Bhojani Project Portfolio
        </div>
    </footer>
);
}

export default Footer;
