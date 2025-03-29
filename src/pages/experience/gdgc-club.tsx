// src/pages/experience/gdgc-club.tsx

import AppBarWhite from "@/components/AppBarWhite";
import React from "react";
import "@/styles/app-bar-white.css";

export default function GDGCClubPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <AppBarWhite />
      <div className="p-6">
      <h1>GDG Club</h1>
      <p>This is the GDG Club experience page!</p>
      {/* Add images, animations, etc. here */}
      </div>
    </div>
  );
}