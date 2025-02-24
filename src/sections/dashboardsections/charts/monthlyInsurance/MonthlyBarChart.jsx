import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "May", Personalized: 10, Instant: 50 },
  { name: "Jun", Personalized: 15, Instant: 55 },
  { name: "Jul", Personalized: 5, Instant: 25 },
  { name: "Aug", Personalized: 10, Instant: 50 },
  { name: "Sep", Personalized: 10, Instant: 40 },
  { name: "Oct", Personalized: 15, Instant: 65 },
  { name: "Nov", Personalized: 5, Instant: 60 },
];

export default function CustomBarChart() {
  return (
    <div
      className="chart-container"
      style={{
        width: "100%",
        height: "300px",
        paddingBottom: 40,
        borderRadius: "10px",
      }}
    >
      <h3 style={{ textAlign: "left", marginBottom: 10 }}>Monthly Issuance</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={4} barCategoryGap={10}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Personalized" stackId="a" fill="#003F91" />
          <Bar dataKey="Instant" stackId="a" fill="#A7CBF2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
