import React from "react";

function Events() {
  const events = [
    {
      month: "FEB",
      day: "27",
      title: "BHA-Kickoff to New Ownership",
      location: "Rim Rock Riders,17037 Alfalfa Rd, Powell Butte, OR 97753, USA",
    },
    {
      month: "FEB",
      day: "28",
      title: "Barret Race(race 6)",
      location: "14405 179th Ave SE,Monroe, WA 98272, USA",
    },
    {
      month: "FEB",
      day: "27",
      title: "BHA-Kickoff to New Ownership",
      location: "Rim Rock Riders,17037 Alfalfa Rd, Powell Butte, OR 97753, USA",
    },
    {
      month: "FEB",
      day: "27",
      title: "BHA-Kickoff to New Ownership",
      location: "Rim Rock Riders,17037 Alfalfa Rd, Powell Butte, OR 97753, USA",
    },
  ];
  return (
    <div>
      {events.map((event, index) => (
        <div className="flex items-center gap-4 py-4" key={index}>
          <div
            className={`${
              event.day == "27" ? "bg-purple-200" : "bg-green-100"
            } flex flex-col items-center rounded-md px-3 py-1`}
          >
            <span
              className={`${
                event.day == "27" ? "text-purple-700" : "text-green-500"
              } sm:text-lg font-bold`}
            >
              {event.month}
            </span>
            <span className="sm:text-xl font-bold">{event.day}</span>
          </div>
          <div>
            <h1 className="font-bold sm:text-lg">{event.title}</h1>
            <p className="text-slate-600 text-sm">{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
