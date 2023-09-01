"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card } from "../ui/card";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

// const getIntroOfPage = (label:string) => {
//   if (label === 'Jan') {
//     return 
//   }
//   if (label === 'Feb') {
//     return 
//   }
//   if (label === 'Mar') {
//     return "Page C is about women's bag";
//   }
//   if (label === 'Apr') {
//     return 'Page D is about household goods';
//   }
//   if (label === 'May') {
//     return 'Page E is about food';
//   }
//   if (label === 'Page F') {
//     return 'Page F is about baby food';
//   }
//   return '';
// };

const CustomTooltip = ({ active, payload, label }:any) => {
  if (active && payload && payload.length) {
    return (
      <Card className="p-1">
        <p className="label">{`${label} : ₦ ${payload[0].value}`}</p>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </Card>
    );
  }

  return null;
};

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value:any) => `$${value}`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="total" fill="#800080" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
