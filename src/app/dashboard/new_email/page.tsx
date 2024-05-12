"use client";

import { ICONS } from "@/app/shared/utils/icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const Emaileditor = dynamic(
  () => import("@/app/shared/component/editor/email.editor"),
  {
    ssr: false,
  }
);

const Page = () => {
  const searchParams = useSearchParams();
  const subject: string = searchParams.get("subject")!;
  const subjectTitle = subject.replace(/-/g, " ");

  return (
    <div className="absolute w-[100vw] h-screen bg-white bg-opacity-65 left-0 top-0 flex items-center justify-center">
    <div className="w-full flex bg-[#F7F7F7]">
      <div className="w-full p-5 bg-white rounded-r-xl">
        {/* back arrow */}
        <Link
          href={"/dashboard/write"}
          className="opacity-[.7] w-min flex text-xl items-center"
        >
          <span>{ICONS.backArrow}</span>
          <span>Exit</span>
        </Link>
        {/* email editor */}
        <div className="w-[90vw]  flex items-center m-auto">
          <Emaileditor subjectTitle={subjectTitle} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;