import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/app/shared/hooks/useRouteChange";
import { ICONS } from "@/app/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import { color } from "framer-motion";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import SidebarFooterLogo from "./sidebar.footer.logo";
import UserPlan from "./userPlan";

function DashboardItems({ bottomContent }: { bottomContent?: boolean }) {
  const { signOut, user } = useClerk();
  const { activeRoute, setActiveRoute } = useRouteChange();
  const pathName = usePathname();
  const handleLogoutUser = () => {
    signOut();
    redirect("/sign-in");
  };
  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, activeRoute, setActiveRoute]);
  return (
    <div>
      {!bottomContent ? (
        <div className="flex flex-col gap-3">
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="p-3 flex items-center gap-3"
            >
              <span
                className={`text-xl  ${
                  item.url === activeRoute ? "text-pink-600" : "text-slate-600"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-large font-medium ${
                  item.url === activeRoute ? "text-pink-600" : "text-slate-600"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                href={
                  item.url === "/"
                    ? `/subscribe?username${user?.username}`
                    : item.url
                }
                className="p-3 flex items-center gap-3"
              >
                <span
                  className={`text-xl ${
                    item.url === activeRoute ? "text-pink-600" : "text-slate-600"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-large font-medium ${
                    item.url === activeRoute ? "text-pink-600" : "text-slate-600"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
          {/* signout */}
          <div
            className="p-3 flex items-center gap-3 cursor-pointer"
            onClick={handleLogoutUser}
          >
            <span className="text-xl text-slate-600">{ICONS.logOut}</span>
            <span className="text-large font-medium text-slate-600">Logout</span>
          </div>
          {/* footer */}
          <hr className="border-b-1 border-slate-200 w-75 m-auto" />
          <div
            className="p-3 flex flex-col items-center gap-3"
          >
            <span className="text-xl">
              <SidebarFooterLogo />
            </span>
            <span className="text-sm">
              <div className="text-center py-1">
                &copy; {new Date().getFullYear()} PiegeonPulse. All rights
                reserved.
              </div>
            </span>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default DashboardItems;
