'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '周一',
    visit: 4000,
    click: 2400,
  },
  {
    name: '周二',
    visit: 3000,
    click: 1398,
  },
  {
    name: '周三',
    visit: 2000,
    click: 3800,
  },
  {
    name: '周四',
    visit: 2780,
    click: 3908,
  },
  {
    name: '周五',
    visit: 1890,
    click: 4800,
  },
  {
    name: '周六',
    visit: 2390,
    click: 3800,
  },
  {
    name: '周日',
    visit: 3490,
    click: 4300,
  },
];

const Chart = () => {
  return (
    <div className="round-lg h-[350px] bg-white p-4">
      <h2 className="mb-4">每周回顾</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
