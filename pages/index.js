import React from 'react';
import Header from '@/components/layers/Header'
import Start from '@/components/responsive/layers/Start'


export default function Home() {
  return (
    <main>
      <div className='hidden md:block'>
        <Header /> 
      </div>
      <div className='md:hidden'>
        <Start />
      </div>
    </main>
  )
}
