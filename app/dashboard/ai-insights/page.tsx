"use client";

import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/stats-card";
import { ActivityFeed } from "@/components/activity-feed";
import { ChartCard } from "@/components/chart-card";
import { MoreVertical, Download, Filter } from "lucide-react";
import { Zap, Brain, BarChart3, TrendingUp } from "lucide-react";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";

import { Box, Toolbar } from "@mui/material";

const dashboardData = [
  { month: "Jan", requests: 2400, performance: 65, users: 1200 },
  { month: "Feb", requests: 1398, performance: 81, users: 1300 },
  { month: "Mar", requests: 2800, performance: 56, users: 1600 },
  { month: "Apr", requests: 3908, performance: 75, users: 1900 },
  { month: "May", requests: 4800, performance: 89, users: 2200 },
  { month: "Jun", requests: 3490, performance: 92, users: 2400 },
];

const aiMetricsData = [
  { name: "Accuracy", value: 92 },
  { name: "Precision", value: 88 },
  { name: "Recall", value: 85 },
  { name: "F1-Score", value: 89 },
];

const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"];

const activityItems = [
  {
    id: "1",
    title: "Model Training Completed",
    description: "v3.2 ML model trained with 98.5% accuracy",
    timestamp: "2 hours ago",
    type: "success" as const,
  },
  {
    id: "2",
    title: "API Rate Limit Alert",
    description: "87% of daily API quota used",
    timestamp: "4 hours ago",
    type: "warning" as const,
  },
  {
    id: "3",
    title: "Performance Peak",
    description: "Highest request volume this month: 5.2k/min",
    timestamp: "6 hours ago",
    type: "trending" as const,
  },
  {
    id: "4",
    title: "Data Sync Successful",
    description: "2.3M records synchronized across regions",
    timestamp: "8 hours ago",
    type: "success" as const,
  },
];

export default function AnalyticsDashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, ml: "240px" }}>
        <Header />

        <Toolbar />

        <div className="min-h-screen bg-background">
          {/* Header */}
          <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    AI Analytics Dashboard
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    Real-time insights and performance metrics
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:bg-muted"
                  >
                    <Filter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:bg-muted"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:bg-muted"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatsCard
                title="Total Requests"
                value="18.4K"
                change={12}
                trend="up"
                gradient={true}
                icon={<Zap className="w-5 h-5" />}
              />
              <StatsCard
                title="AI Accuracy"
                value="94.2%"
                change={5}
                trend="up"
                gradient={true}
                icon={<Brain className="w-5 h-5" />}
              />
              <StatsCard
                title="Active Models"
                value="7"
                change={2}
                trend="up"
                icon={<BarChart3 className="w-5 h-5" />}
              />
              <StatsCard
                title="Avg Response"
                value="145ms"
                change={-8}
                trend="down"
                gradient={true}
                icon={<TrendingUp className="w-5 h-5" />}
              />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Main Chart */}
              <div className="lg:col-span-2">
                <ChartCard
                  title="Request Volume & Performance"
                  subtitle="Last 6 months trend"
                  action={
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Export
                    </Button>
                  }
                  gradient={true}
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                      data={dashboardData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorRequests"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3b82f6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d2d44" />
                      <XAxis stroke="#909097" style={{ fontSize: "12px" }} />
                      <YAxis stroke="#909097" style={{ fontSize: "12px" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1a1a2e",
                          border: "1px solid #2d2d44",
                          borderRadius: "8px",
                          color: "#e4e4f0",
                        }}
                        cursor={{ stroke: "#6366f1", strokeWidth: 2 }}
                      />
                      <Legend
                        wrapperStyle={{ paddingTop: "20px" }}
                        iconType="line"
                      />
                      <Area
                        type="monotone"
                        dataKey="requests"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorRequests)"
                        name="API Requests"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>

              {/* AI Metrics Pie Chart */}
              <ChartCard
                title="AI Model Metrics"
                subtitle="Current performance"
                gradient={true}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={aiMetricsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {colors.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a2e",
                        border: "1px solid #2d2d44",
                        borderRadius: "8px",
                        color: "#e4e4f0",
                      }}
                      formatter={(value) => `${value}%`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            {/* Performance Bar Chart & Activity Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartCard
                  title="Performance Analysis"
                  subtitle="Response time by endpoint"
                  action={
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      View Details
                    </Button>
                  }
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={dashboardData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d2d44" />
                      <XAxis stroke="#909097" style={{ fontSize: "12px" }} />
                      <YAxis stroke="#909097" style={{ fontSize: "12px" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1a1a2e",
                          border: "1px solid #2d2d44",
                          borderRadius: "8px",
                          color: "#e4e4f0",
                        }}
                        cursor={{ fill: "#6366f1", fillOpacity: 0.1 }}
                      />
                      <Legend
                        wrapperStyle={{ paddingTop: "20px" }}
                        iconType="square"
                      />
                      <Bar
                        dataKey="performance"
                        fill="#8b5cf6"
                        name="Performance Score"
                        radius={[8, 8, 0, 0]}
                      />
                      <Bar
                        dataKey="users"
                        fill="#14b8a6"
                        name="Active Users"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>

              {/* Activity Feed */}
              <ActivityFeed items={activityItems} />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
