import React from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  gradient?: boolean;
}

export function ChartCard({
  title,
  subtitle,
  children,
  action,
  gradient = false,
}: ChartCardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-card p-6 ${
        gradient ? "gradient-card-accent" : ""
      }`}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
