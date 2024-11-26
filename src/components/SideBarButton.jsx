import React from "react";
import { Button } from "./ui/button";
import { Flag, Sun } from "lucide-react";

function SideBarButton({ icon, children }) {
  return (
    <div>
      <Button variant="ghost" className="w-full justify-start">
        {icon}
        <span className="text-l text-gray-800">{children}</span>
      </Button>
    </div>
  );
}

export default SideBarButton;
