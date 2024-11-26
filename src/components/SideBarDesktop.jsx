import Link from "next/link";
import SideBarButton from "./SideBarButton";
import { Button } from "./ui/button";
import { FaHorse } from "react-icons/fa";

import {
  BellPlus,
  Flag,
  icons,
  List,
  LogOut,
  Mail,
  MessageCircle,
  Star,
  SunIcon,
  User,
  UserRoundCog,
} from "lucide-react";
function SideBarDesktop() {
  const menuButtons = [
    {
      title: "Browse Event",
      icon: <Flag />,
      href: "/",
    },
    {
      title: "My Event",
      icon: <List />,
      href: "/item/myevent",
    },
    {
      title: "Messages",
      icon: <MessageCircle />,
      href: "/item/messages",
    },
    {
      title: "My Horses",
      icon: <FaHorse />,
      href: "/item/myhorses",
    },
    {
      title: "My Points",
      icon: <UserRoundCog />,
      href: "/item/mypoints",
    },
    {
      title: "My Profile",
      icon: <User />,
      href: "/item/myprofile",
    },
  ];
  return (
    <aside className="sm:w-[270px] sm:block hidden  bg-pink-50 max-w-xs h-full fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-4 py-8 flex flex-col  ">
        <div className="flex justify-between items-center">
          <img
            src="https://framerusercontent.com/images/ubOFczMYrFQjarYF0WCFiDP9to.svg"
            className="w-28"
          />
          <div className="bg-white rounded-full p-2">
            <BellPlus />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-2">
            {menuButtons.map((btn, index) => (
              <Link href={btn.href} key={index}>
                <SideBarButton icon={btn.icon}>{btn.title}</SideBarButton>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute left-0 bottom-3 w-full px-4 ">
          <SideBarButton icon={<LogOut />}>SignOut</SideBarButton>
        </div>
      </div>
    </aside>
  );
}

export default SideBarDesktop;
