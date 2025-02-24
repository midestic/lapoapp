import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./WeekIncome.module.css";
const data = [
  { day: "Mon", income: 55 },
  { day: "Tue", income: 40 },
  { day: "Wed", income: 60 },
  { day: "Thu", income: 50 },
  { day: "Fri", income: 70 },
  { day: "Sat", income: 30 },
  { day: "Sun", income: 85 },
];

const WeekIncome = () => {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.heading}>Weekly Income</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#999" />
          <YAxis domain={[0, 100]} stroke="#999" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#2ECC71"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeekIncome;
