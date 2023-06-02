import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import PageLoader from '../common/PageLoader';

const Card1 = () => {
  const [cardData, setCardData] = useState(null);

  // Fetching data---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        setCardData(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching dashboard data:', error);
      }
    };
    fetchData();
  }, []);

  if (!cardData) {
    return (
      <div>
        {/* --Page Loader-- */}
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      <div className='flex items-center gap-5'>
        <h1 className='text-xl font-bold text-blue-950'>Overview</h1>
        <select name='' id='' className='px-5 py-1 rounded-xl cursor-pointer'>
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </select>
      </div>
      {/* --Card-- */}
      <div className='mt-6 lg:flex gap-10 px-5 w-full'>
        <div className='shadow-2xl p-3 text-center lg:w-2/4'>
          <div className='flex gap-6 mb-3 w-full'>
            <div className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-2/4 py-12 rounded-xl'>
              <h1 className='text-md'>This Week Visitor</h1>
              <h1 className='text-xl font-bold'>{cardData.weekVisitor}</h1>
            </div>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-2/4 py-12 rounded-xl'>
              <h1 className='text-md'>Total Amount Sale</h1>
              <h1 className='text-xl font-bold'>${cardData.totalSale}</h1>
            </div>
          </div>
          <div className='flex gap-6 mt-3 w-full'>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-2/4 py-12 rounded-xl'>
              <h1 className='text-md'>Total Order </h1>
              <h1 className='text-xl font-bold'>{cardData.totalOrder}</h1>
            </div>
            <div className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-2/4 py-12 rounded-xl'>
              <h1 className='text-md'>This Sale In Year</h1>
              <h1 className='text-xl font-bold'>${cardData.totalSaleInYear}</h1>
            </div>
          </div>
        </div>
        {/* --Chart-- */}
        <div className='shadow-2xl p-3 text-center lg:w-2/4 mt-5 lg:mt-0'>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Card1;
