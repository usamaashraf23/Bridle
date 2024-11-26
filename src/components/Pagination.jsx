"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "./ui/calendar";
import CalenderDemo from "./CalenderDemo";
import { SearchIcon } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex gap-2">
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
          <TabsTrigger value="upcomin">Upcoming</TabsTrigger>
        </TabsList>
      </Tabs>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <CalenderDemo />
      <div className="flex items-center gap-4 border rounded-md px-2">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search by event name...."
          className="border-none outline-none px-6"
        />
      </div>
    </div>
  );
}
