import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Bookmark,
  BookmarkCheck,
  Calendar,
  LocateIcon,
  Save,
} from "lucide-react";

export default function Slider() {
  const cardsArray = [
    {
      imgUrl: "/bullrider.png",
      title: "Underground Bull Riders Memebership",
      icon: <LocateIcon />,
      location: "Bull Ring",
      icon2: <Calendar />,
      date: "Jan 1- Dec 31,2...",
      save: <Bookmark />,
    },
    {
      imgUrl: "/horseITL.png",
      title: "Horses in two lines",
      icon: <LocateIcon />,
      location: "Bull Ring",
      icon2: <Calendar />,
      date: "Jan 1- Dec 31,2...",
      save: <BookmarkCheck />,
    },
    {
      imgUrl: "/bullrider.png",
      title: "Underground Bull Riders Memebership",
      icon: <LocateIcon />,
      location: "Bull Ring",
      icon2: <Calendar />,
      date: "Jan 1- Dec 31,2...",
      save: <Bookmark />,
    },
    {
      imgUrl: "/horseITL.png",
      title: "Horses in two lines",
      icon: <LocateIcon />,
      location: "Bull Ring",
      icon2: <Calendar />,
      date: "Jan 1- Dec 31,2...",
      save: <Bookmark />,
    },
    {
      imgUrl: "/bullrider.png",
      title: "Underground Bull Riders Memebership",
      icon: <LocateIcon />,
      location: "Bull Ring",
      icon2: <Calendar />,
      date: "Jan 1- Dec 31,2...",
      save: <Bookmark />,
    },
    {
      imgUrl: "/bullrider.png",
      title: "Underground Bull Riders Memebership",
      icon: <LocateIcon />,
      location: "Bull Ring",
      icon2: <Calendar />,
      date: "Jan 1- Dec 31,2...",
      save: <Bookmark />,
    },
  ];
  return (
    <Carousel
      className="sm:max-w-6xl max-w-full"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {cardsArray.map((card, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="flex items-center h-52  border box-content">
                <CardContent className="flex sm:gap-4 gap-2 items-center  ">
                  <img src={card.imgUrl} alt="" className="w-40  " />
                  <div>
                    <span className="sm:text-lg text-sm  font-semibold sm:py-2">
                      {card.title}
                    </span>
                    <div className="flex items-center gap-2 text-slate-800 py-2">
                      {card.icon}
                      <span className="text-slate-800">{card.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800 py-2">
                      {card.icon2}
                      <span>{card.date}</span>
                    </div>
                  </div>
                  <div className="flex items-start rounded-lg mx-2 p-2 border-2">
                    {card.save}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
