import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Jun',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'July',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Aug',
    uv: 1190,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sept',
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 3090,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3890,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3900,
    pv: 4300,
    amt: 2100,
  },
];

export default class Chart extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <h1 className='text-sm font-bold text-blue-950'>Earning Chart</h1>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#3333ff'
              fill='#b3ffff'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
