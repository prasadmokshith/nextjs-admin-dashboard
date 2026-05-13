import React from "react";
import { CheckCircle2, AlertCircle, Activity, TrendingUp } from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "success" | "warning" | "info" | "trending";
  icon?: React.ReactNode;
}

interface ActivityFeedProps {
  items: ActivityItem[];
  title?: string;
}

export function ActivityFeed({
  items,
  title = "Recent Activity",
}: ActivityFeedProps) {
  const getIconForType = (type: ActivityItem["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case "trending":
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
      default:
        return <Activity className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getColorForType = (type: ActivityItem["type"]) => {
    switch (type) {
      case "success":
        return "bg-emerald-400/10 border-emerald-400/20";
      case "warning":
        return "bg-yellow-400/10 border-yellow-400/20";
      case "trending":
        return "bg-blue-400/10 border-blue-400/20";
      default:
        return "bg-muted border-border";
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${getColorForType(
              item.type,
            )} hover:border-accent/50`}
          >
            <div className="mt-1 flex-shrink-0">
              {item.icon || getIconForType(item.type)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
              {item.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
