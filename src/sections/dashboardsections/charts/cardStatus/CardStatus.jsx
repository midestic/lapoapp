import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from "./CardStatus.module.css";

const data = [
  { name: "Active", value: 1600, color: "#1EAD63" },
  { name: "Expired", value: 400, color: "#F4B400" },
  { name: "Inactive", value: 250, color: "#1A73E8" },
  { name: "Blocked", value: 150, color: "#8E24AA" },
  { name: "Lost", value: 50, color: "#E53935" },
];

const totalCards = data.reduce((sum, entry) => sum + entry.value, 0);

const CardStatusChart = () => {
  return (
    <div className={styles.chartContainer}>
      <h3>Card Status Distribution</h3>

      <div className={styles.chartWrapper}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Center Text Inside Pie Chart */}
        <div className={styles.chartLabel}>
          <p>Total Cards</p>
          <h2>{totalCards.toLocaleString()}</h2>
        </div>
      </div>

      <div className={styles.legend}>
        {data.map((entry) => (
          <div key={entry.name} className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStatusChart;
