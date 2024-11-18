"use client";

import { Activity } from "@/lib/types";
import { ActivityCard } from "./activity-card";
import { activities, activitiesWithScores } from "@/lib/data";

export function SocialCardGraphic() {
  return (
    <div className="aspect-[3/2] bg-white relative overflow-hidden">
      {/* Left side content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-[45%] p-12">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent tracking-tight leading-tight">
              Life Fuel Score
            </h1>
            <p className="text-xl mt-4 text-muted-foreground font-light leading-relaxed">
              Nourish Your Mind, Fuel Your Life
            </p>
          </div>
        </div>

        {/* Right side with activity card */}
        <div className="flex-1 h-full relative perspective-[2000px]">
          <ActivityCard
            className="absolute right-[-8%] top-0 -translate-y-1/2 transform"
            style={{
              transform:
                "perspective(2000px) rotateY(347deg) rotateX(19deg) rotateZ(0) translate3D(-50px, -50px, 0) scale(0.9)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            activity={activitiesWithScores[0]}
          />
        </div>
      </div>
    </div>
  );
}
