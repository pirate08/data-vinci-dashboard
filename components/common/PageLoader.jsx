import React from 'react';
import { Spinner } from '@chakra-ui/react';

const PageLoader = () => {
  return (
    <div className='flex justify-center items-center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </div>
  );
};

export default PageLoader;
