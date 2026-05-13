import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: number;
  icon?: React.ReactNode;
  gradient?: boolean;
  trend?: "up" | "down";
}

export function StatsCard({
  title,
  value,
  change,
  icon,
  gradient = false,
  trend,
}: StatsCardProps) {
  const isPositive = trend === "up";

  return (
    <div
      className={`relative rounded-lg border border-border p-6 ${
        gradient ? "gradient-card" : ""
      } bg-card overflow-hidden transition-all hover:shadow-lg hover:border-accent/50`}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {title}
            </p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
          </div>
          {icon && <div className="text-accent ml-2">{icon}</div>}
        </div>

        {change !== undefined && (
          <div className="mt-4 flex items-center gap-2">
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                isPositive ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {isPositive ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
              <span>{Math.abs(change)}%</span>
            </div>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
}
