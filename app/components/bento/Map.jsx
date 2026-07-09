"use client";

import React from "react";

type MapProps = {
  lng: number;
  lat: number;
};

export default function Map({ lng, lat }: MapProps) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg border border-secondary bg-secondary p-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-primary">
          Map unavailable
        </h3>

        <p className="mt-2 text-sm text-secondary">
          This project no longer uses Mapbox.
        </p>
      </div>
    </div>
  );
}