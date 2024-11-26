import SideBar from "@/components/SideBarDesktop";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import coverImage from "/public/pexels-jvdm-1559388.jpg";
import Link from "next/link";
import Slider from "@/components/Slider";
import Pagination from "@/components/Pagination";
import Events from "@/components/Events";
export default function Home() {
  return (
    <div className="">
      <div className="relative h-80">
        <img
          className=" sm:w-full h-80    object-cover absolute -z-10"
          src="/pexels-jvdm-1559388.jpg"
        />
        <div className="">
          <img
            className="sm:py-14 sm:px-10 p-5 text-black"
            src="https://framerusercontent.com/images/ubOFczMYrFQjarYF0WCFiDP9to.svg"
          />
          <h1 className="sm:text-3xl sm:px-10 font-bold text-white text-wrap">
            Supercharge your equine business<br></br> all in one place with
            Bridle
          </h1>
          <p className="text-white sm:p-10">
            Manage horses & clients,streamline finances, automate bookings &
            events,and more.
          </p>
        </div>
      </div>
      <div className="flex gap-5 border-b sm:p-3">
        <div className="">
          <span className="border-b-purple-600 border-b-4 font-semibold px-3 text-purple-600 p-3">
            All Events
          </span>

          <span>Saved Events(2)</span>
        </div>
      </div>
      <h1 className="text-xl font-bold p-6"> Featured Cards</h1>
      <Slider />
      <div className="p-4">
        <Pagination />
        <div className="grid sm:grid-cols-2">
          <Events />
          <Events />
        </div>
      </div>
    </div>
  );
}
