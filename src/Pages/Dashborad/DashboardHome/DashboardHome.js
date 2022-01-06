import React from "react";
import "./DashboardHome.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardHome = () => {
  const data = [
    {
      name: "January",
      uv: 4000,
      sales: 2000,
      amt: 2400,
    },
    {
      name: "February",
      uv: 3000,
      sales: 0,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      sales: 0,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      sales: 0,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      sales: 0,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      sales: 0,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      sales: 0,
      amt: 2100,
    },
    {
      name: "August",
      uv: 3490,
      sales: 0,
      amt: 2100,
    },
    {
      name: "August",
      uv: 3490,
      sales: 0,
      amt: 2100,
    },
    {
      name: "October",
      uv: 3490,
      sales: 0,
      amt: 2100,
    },
    {
      name: "November",
      uv: 3490,
      sales: 0,
      amt: 2100,
    },
    {
      name: "December",
      uv: 3490,
      sales: 0,
      amt: 2100,
    },
  ];
  return (
    <div className="dashboard_home py-5">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardHome;
