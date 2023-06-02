import React, { useState, useEffect } from 'react';

const Table = () => {
  const [dataOfTable, setDataOfTbale] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        setDataOfTbale(data);
      } catch (error) {
        console.log('Error fetching dashboard data:', error);
      }
    };
    fetchData();
  }, []);

  if (!dataOfTable) {
    return <div></div>;
  }

  return (
    <div className='px-5'>
      <table className='w-full border shadow-xl'>
        <thead className='border bg-blue-800 text-white mb-2 py-2 text-lg'>
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className='text-center break-normal'>
          {dataOfTable.tableData.map((row, index) => (
            <tr key={index} className='border border-blue-200 text-slate-700'>
              <td>{row.no}</td>
              <td>{row.product}</td>
              <td>{row.orderDate}</td>
              <td>
                <button className='bg-gradient-to-r from-red-700 to-violet-800 rounded-lg px-2 py-1 text-white'>
                  {row.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
